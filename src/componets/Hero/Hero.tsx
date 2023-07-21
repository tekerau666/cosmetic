import style from './Hero.module.scss'
import LogoImg from '../../shared/assets/svg/Vector.svg'
import LocationImg from '../../shared/assets/svg/location.svg'
import SearchImg from '../../shared/assets/svg/search.svg'
import SecondSearchImg from '../../shared/assets/svg/whiteSearch.svg'
import { Text } from '@nextui-org/react';
import React from 'react';



function Hero(){
    return(
        <div className={style.back}>
            <div className={style.content}>
                <div className={style.info}>
                    <LogoImg/>
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
                        <div className={style.searcher_elem}>
                            <h4>Service Name</h4>
                            <div className={style.searcher_elem_content}>
                                <text>Book your services...</text>
                                <SearchImg/>
                            </div>
                        </div>
                        <div className={style.searcher_elem}>
                            <h4>Address</h4>
                            <div className={style.searcher_elem_content}>
                                <text>Where</text>
                                <LocationImg/>
                            </div>
                        </div>
                        <button className={style.searcher_button_content}>
                            <a>Search</a>
                            <SecondSearchImg/>

                        </button>
                    </div>
                </div>
            </div>
            <div className={style.last_pading}></div>
        </div>
    );
}

export default Hero;