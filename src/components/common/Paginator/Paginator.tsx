import React, {useState} from "react";
import s from "./Paginator.module.scss";

type PaginatorPropsType = {
   totalItemsCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   portionSize?: number
}


export const Paginator: React.FC<PaginatorPropsType> = React.memo((props) => {

   const {currentPage, onPageChanged, pageSize, totalItemsCount, portionSize = 10} = props;

   const pageCount = Math.ceil(totalItemsCount / pageSize);
   const pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }

   const portionCount = Math.ceil(pageCount / portionSize);
   const [portionNumber, setPortionNumber] = useState(1);
   const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
   const rightPortionNumber = portionNumber * portionSize;


   return (
      <div className={s.paginationContainer}>
         {
            portionNumber > 1 &&
            <button className={s.btn} onClick={() => setPortionNumber(portionNumber - 1)}>Pref</button>
         }
         {
            pages
               .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
               .map(p => {
               return <div key={p}
                           className={currentPage === p ? `${s.pagination} ${s.selected}` : s.pagination}
                           onClick={() => {
                              onPageChanged(p)
                           }}
               >{p}</div>
            })
         }
         {portionCount > portionNumber &&
         <button className={s.btn} onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>}
      </div>
   )
});
