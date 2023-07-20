import style from './Testimonials.module.scss';
import ellipse from '../../assets/img/Ellipse.png';
import openHeading from '../../assets/svg/open.svg';
import closeHeading from '../../assets/svg/close.svg'
import {Text} from "@nextui-org/react";
export function Testimonials(){
    return(
        <>
            <div className={style.container}>
                <div className={style.heading}>
                    <text>Testimonials</text>
                    <h3>What our Customers says...</h3>
                </div>
                <div className={style.testimonials_background}>
                    <div className={style.testimonials_container}>
                        <div className={style.content_user}>
                            <div className={style.content_rectangle1}></div>
                            <div className={style.content_rectangle2}></div>
                            <img src={ellipse} alt="User"/>
                        </div>
                        <div className={style.quote_container}>
                            <div className={style.quote_content}>
                                <img className={style.left_mark} src={openHeading} alt='Open Heading'/>
                                <div>
                                    <p>Leslie Alexander</p>
                                    <text className={style.quote_small}>Moncton, Canada</text>
                                </div>
                                <div>
                                    <h4>Neque porro quisquam est qui dolum</h4>
                                    <text className={style.quote_large}>“It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English“</text>
                                </div>
                                <img className={style.right_mark} src={closeHeading} alt='Close Heading'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.content_nav}>

                </div>
            </div>
        </>
    )
}
export default Testimonials;