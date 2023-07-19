import style from './Category.module.scss'
import React from "react";
import wellnes from '../../shared/assets/img/categorys/wellnes.png';
import make from '../../shared/assets/img/categorys/makeup.png'
import barber from '../../shared/assets/img/categorys/barber.png'
import frisor from '../../shared/assets/img/categorys/frie.png'
import massage from '../../shared/assets/img/categorys/massage.png'
import foot from '../../shared/assets/img/categorys/foot.png'
import left from '../../shared/assets/svg/left.svg';
import right from '../../shared/assets/svg/right.svg'
import CategoryElement from '../Category/CategoryElement';
export function Category (){

    return(
        <>
            <div className={style.container}>
                <div className={style.category_bar}>
                    <a href='#'> <img src={left} alt="Left Arrow"/></a>
                    <CategoryElement name={'Makeup-artist'} path={make}/>
                    <CategoryElement name={'Wellnesscenter'} path={wellnes}/>
                    <CategoryElement name={'Barbersalon'} path={barber}/>
                    <CategoryElement name={'Frisørsalon'} path={frisor}/>
                    <CategoryElement name={'Massageklinik'} path={massage}/>
                    <CategoryElement name={'Fodterapeut'} path={foot}/>
                    <a href='#'><img src={right} alt="Right Arrow"/></a>
                </div>
            </div>
        </>
    );
}





export default Category;