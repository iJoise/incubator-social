import React from "react";
import s from "./Paginator.module.scss";

type PaginatorPropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
}


export const Paginator: React.FC<PaginatorPropsType> = React.memo((props) => {

   const {currentPage, onPageChanged, pageSize, totalUsersCount} = props;

   const pageCount = Math.ceil(totalUsersCount / pageSize);
   const pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }

   return (
      <div className={s.paginationContainer}>
         {
            pages.map(p => {
               return <div key={p}
                           className={currentPage === p ? `${s.pagination} ${s.selected}` : s.pagination}
                           onClick={() => {
                              onPageChanged(p)
                           }}
               >{p}</div>
            })
         }
      </div>
   )
});
