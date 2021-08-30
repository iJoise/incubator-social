import React from "react";
import s from "./Modal.module.scss";

type ModalPropsType = {
   modalActive: boolean
   setModalActive: (value: boolean) => void
}


export const Modal: React.FC<ModalPropsType> = ({modalActive, setModalActive, children}) => {

   return (
      <div className={modalActive ? `${s.modal} ${s.modal__active}` : s.modal} onClick={() => setModalActive(false)}>
         <div className={modalActive ? `${s.modal__content} ${s.modal__content_active}` : s.modal__content}
              onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}
