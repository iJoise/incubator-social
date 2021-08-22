import React, {useEffect, useRef, useState} from "react";
import {Message} from "./Message/Message";
import style from "../../Dialogs.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {ChatMessageType} from "../../../../redux/chat-reducer";


type MessagesListPropsType = {
   sendMessage: (newMessage: string) => void
}

export const ChatItem: React.FC<MessagesListPropsType> = React.memo(() => {

   const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)
   const [isAutoScroll, setIsAutoScroll] = useState(true);

   const messagesElement = messages.map(m =>
      <Message key={m.id} chatItem={m}/>
   );
   const messagesRef = useRef<HTMLDivElement>(null);
   const messagesAnchor = useRef<HTMLDivElement>(null);

   const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const el = e.currentTarget;
      if (Math.abs((el.scrollHeight - el.scrollTop) - el.clientHeight) < 300){
         !isAutoScroll && setIsAutoScroll(true)
      } else {
         isAutoScroll && setIsAutoScroll(false)
      }
   }
   useEffect(() => {
      if (isAutoScroll) {
       // messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
         messagesAnchor.current?.scrollIntoView({behavior: 'smooth'})
      }

   }, [messages, isAutoScroll])

   return (
      <div className={style.messages}>
         <div className={style.messageHeader}>
            <i className="fa fa-search"/>
            <input
               type="search"
               placeholder="Search message..."
               name="form"
            />
            <i className="fa fa-sliders"/>
         </div>

         <div className={style.messagesBody} ref={messagesRef} onScroll={scrollHandler}>
            {messagesElement}
            <div ref={messagesAnchor}/>
         </div>
      </div>
   )
})

