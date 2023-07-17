import style from './Category.module.scss'
import React from "react";
import wellnes from '../../assets/img/categorys/wellnes.png';
import make from '../../assets/img/categorys/makeup.png'
import barber from '../../assets/img/categorys/barber.png'
import frisor from '../../assets/img/categorys/frie.png'
import massage from '../../assets/img/categorys/massage.png'
import foot from '../../assets/img/categorys/foot.png'
import left from '../../assets/svg/left.svg';
import right from '../../assets/svg/right.svg'
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