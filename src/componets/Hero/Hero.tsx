import style from './Hero.module.scss'
import logo from '../../assets/svg/Vector.svg'
import { Image, Text} from '@nextui-org/react';
import React from 'react';


function Hero(){
    const text: string = 'There are many variation of passages are Ipsum available, majority have suffered alteration in some form.';
/*    const searcherElement=() =>{
        return(
            <>
вфы
            </>
        );
    }*/
    return(
        <div className={style.back}>
            <div className={style.content}>
                <div className={style.info}>
                    <img src={logo}/>
                    <Text transform='uppercase'  color='white' size={15}>Hair Salon, Masseuse, Beauty Salon</Text>
                </div>
                <Text size={70} h1 color="#F7E5C1">Find a service</Text>
                <Text size ={70} h1 color="#F7E5C1">close to you</Text>
                <div className={style.ps}>
                    <Text size={18} color='white'>There are many variation of passages are Ipsum available,</Text>
                    <Text size={18} color='white'>majority have suffered alteration in some form.</Text>
                </div>
                <div className={style.searcher}>
                    <div className={style.searcher_container}>

                    </div>
                </div>
            </div>
            <div className={style.last_pading}></div>
        </div>
    );
}

export default Hero;