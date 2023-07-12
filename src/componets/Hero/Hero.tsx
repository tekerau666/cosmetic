import style from './Hero.module.scss'
import logo from '../../assets/svg/Vector.svg'
import { Image, Text} from '@nextui-org/react';
import React from 'react';


function Hero(){
    const text: string = 'There are many variation of passages are Ipsum available, majority have suffered alteration in some form.';
    return(
        <div className={style.back}>
            <div className={style.content}>
                <div className={style.info}>
                    <img src={logo} alt=""/>
                    <p>Hair Salon, Masseuse, Beauty Salon</p>
                </div>
                <Text size={70} h1 color="#F7E5C1">Find a service</Text>
                <Text size ={70} h1 color="#F7E5C1">close to you</Text>
            </div>
        </div>
    );
}

export default Hero;