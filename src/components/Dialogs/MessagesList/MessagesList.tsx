import React, {useEffect} from "react";
import Message from "./Message/Message";
import style from "../Dialogs.module.scss";
import {MessageType} from "../../../redux/dialog-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";


type MessagesListPropsType = {
   messages: MessageType[]
   sendMessage: (newMessage: string) => void
}


export const MessagesList: React.FC<MessagesListPropsType> = React.memo((props) => {

   const {messages, sendMessage} = props;

   const messagesElement = messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);
   const messagesRef = React.createRef<HTMLDivElement>();

   useEffect(() => {
      const div = messagesRef.current;
      if (div) {
         div.scrollTo(0, div.scrollHeight)
      }
   })

   const addNewMessage = (formData: AddMessageFormDataType) => {
      sendMessage(formData.message);
   }

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

         <AddMessageReduxForm onSubmit={addNewMessage}/>

      </div>
   )
})


type AddMessageFormDataType = {
   message: string
}

const maxLength200 = maxLengthCreator(100);

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = React.memo((props) => {
   const sendButton = `fa fa-paper-plane ${style.btnSend}`;

   return (
      <form className={style.messageBottom} onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            className={style.messageText}
            placeholder={'Введите сообщение...'}
            name={'message'}
            validate={[requiredField, maxLength200]}
         />
         <div className={style.btn}>
            <button><i className={sendButton}/></button>
            <i className="fa fa-microphone"/></div>
      </form>
   )
})

const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({
   form: 'dialogAddMessageForm'
})(AddMessageForm)