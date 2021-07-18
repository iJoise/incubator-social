import React from "react";
import s from "./Preloader.module.scss";
import preloader from "../../../assets/images/loading.svg";



export const Preloader = React.memo(() => {

   return (
      <>
         <div className={s.isFetching}>
            <img src={preloader} alt={'loading spinner'}/>
            <div className={s.overlay}/>
         </div>
      </>
   )
})
