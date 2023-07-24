import style from './Category.module.scss'
import React from 'react'
import wellnes from '../../../../cosmetic/src/shared/assets/img/categorys/wellnes.png'
import make from '../../../../cosmetic/src/shared/assets/img/categorys/makeup.png'
import barber from '../../../../cosmetic/src/shared/assets/img/categorys/barber.png'
import frisor from '../../../../cosmetic/src/shared/assets/img/categorys/frie.png'
import massage from '../../../../cosmetic/src/shared/assets/img/categorys/massage.png'
import foot from '../../../../cosmetic/src/shared/assets/img/categorys/foot.png'
import Left from '../../../../cosmetic/src/shared/assets/svg/left.svg'
import Right from '../../../../cosmetic/src/shared/assets/svg/right.svg'
import CategoryElement from './CategoryElement'
export function Category () {
  return (
        <>
            <div className={style.container}>
                <div className={style.category_bar}>
                    <a href='#'> <Left/> </a>
                    <CategoryElement name={'Makeup-artist'} path={make}/>
                    <CategoryElement name={'Wellnesscenter'} path={wellnes}/>
                    <CategoryElement name={'Barbersalon'} path={barber}/>
                    <CategoryElement name={'Frisørsalon'} path={frisor}/>
                    <CategoryElement name={'Massageklinik'} path={massage}/>
                    <CategoryElement name={'Fodterapeut'} path={foot}/>
                    <a href='#'> <Right/> </a>
                </div>
            </div>
        </>
  )
}

export default Category
