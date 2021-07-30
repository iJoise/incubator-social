import React from 'react';
import style from './News.module.scss';

const News = React.memo(() => {
   return <div className={style.news}>News</div>;
});

export default News;
