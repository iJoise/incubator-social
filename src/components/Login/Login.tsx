import React from "react";
import s from "./Login.module.scss";

type LoginPropsType = {}


export const Login: React.FC<LoginPropsType> = () => {

   return (
      <h1 className={s.title}>
         Login
      </h1>
   )
}
