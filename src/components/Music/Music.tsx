import React from 'react';
import style from './Music.module.scss';

const Music = React.memo(() => {
   return <div className={style.music}>Music</div>;
});

export default Music;
