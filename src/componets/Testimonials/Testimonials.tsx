import style from './Testimonials.module.scss'
import ellipse from '../../../../cosmetic/src/shared/assets/img/Ellipse.png'
import OpenHeading from '../../../../cosmetic/src/shared/assets/svg/open.svg'
import CloseHeading from '../../../../cosmetic/src/shared/assets/svg/close.svg'
import LeftArrow from '../../../../cosmetic/src/shared/assets/svg/chevron-left.svg'
import RightArrow from '../../../../cosmetic/src/shared/assets/svg/chevron-right.svg'

export function Testimonials () {
  return (
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
                                <OpenHeading />
                                <div>
                                    <p>Leslie Alexander</p>
                                    <text className={style.quote_small}>Moncton, Canada</text>
                                </div>
                                <div>
                                    <h4>Neque porro quisquam est qui dolum</h4>
                                    <text className={style.quote_large}>“It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English“</text>
                                </div>
                                <CloseHeading />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.content_nav}>
                    <LeftArrow className={style.content_nav_last}/>
                    <RightArrow className={style.content_nav_next}/>
                </div>
            </div>
        </>
  )
}
export default Testimonials
