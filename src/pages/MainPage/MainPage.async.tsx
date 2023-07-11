import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise( resolve => {
    // @ts-ignore
    // Искуственная подгрузка
    setTimeout(()=> resolve(import('./MainPage')), 2000)
}))