import React, { useRef, useEffect } from 'react'
import style from './Insurance.module.css'
import image1 from '../../assets/insurance.jpg'
import image2 from '../../assets/report.jpg'

const Insurance = () => {
 const imagesRef = useRef(null)

 useEffect(() => {
  const images = imagesRef.current
  const fadeInUp = () => {
   if (images.getBoundingClientRect().top <= window.innerHeight * 1) {
    images.classList.add(style.animate)
   }
  }
  window.addEventListener('scroll', fadeInUp)
  return () => window.removeEventListener('scroll', fadeInUp)
 }, [])

 const html = (
  <div className={style.intro} ref={imagesRef}>
   <div className={style.main_text}>
    <div className={style.main_text_cont}>
     <h1 className={style.main_heading}>
      Looking to improve your insurance company&apos;s bottom line?
     </h1>
     <p className={style.main_paragraph}>
      Streamline costs, detect fraud, prevent duplicate tests and procedures and earn customer
      loyalty with our platform
     </p>
    </div>
   </div>
   <div className={style.main_images}>
    <img className={style.first_image} src={image1} alt="Doctor laughing" />
    <img className={style.second_image} src={image2} alt="Doctor laughing" />
   </div>
  </div>
 )
 return html
}

export default Insurance
