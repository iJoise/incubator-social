import React, {useEffect} from "react";
import {Message} from "./Message/Message";
import style from "../../Dialogs.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {ChatMessageType} from "../../../../api/chat-api";


type MessagesListPropsType = {
   sendMessage: (newMessage: string) => void
}

export const ChatItem: React.FC<MessagesListPropsType> = React.memo(() => {

   const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)

   const messagesElement = messages.map((m,i) =>
      <Message key={new Date().getTime() + i} chatItem={m}/>
   );
   const messagesRef = React.createRef<HTMLDivElement>();

   useEffect(() => {
      const div = messagesRef.current;
      if (div) {
         div.scrollTo(0, div.scrollHeight)
      }
   })

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

         <div className={style.messagesBody} ref={messagesRef}>
            {messagesElement}
         </div>
      </div>
   )
})

