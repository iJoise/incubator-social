import React, {ComponentType, ReactNode, Suspense} from "react";
import {Preloader} from "../components/common/preloader/Preloader";


export function WithSuspense<T>(Component: ComponentType<T>) {

   return (props: ReactNode) => {
      return <Suspense fallback={<Preloader/>}>
         <Component {...props as T}/>
      </Suspense>
   }
}