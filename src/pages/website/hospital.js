import React, { useRef, useEffect } from 'react'
import style from './hospital.module.css'
import image2 from '../../assets/hospital_tech.jpg'
import image1 from '../../assets/doctor_laptop.jpg'

const Hospital = () => {
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
   <div className={style.main_images}>
    <img className={style.first_image} src={image1} alt="Doctor laughing" />
    <img className={style.second_image} src={image2} alt="Doctor laughing" />
   </div>
   <div className={style.main_text}>
    <div className={style.main_text_cont}>
     <h1 className={style.main_heading}>
      Ready to transform your healthcare facility with cutting-edge technology?
     </h1>
     <p className={style.main_paragraph}>
      Our platform can help you exceed patient expectations, transform your healthcare delivery and
      drive growth.
     </p>
    </div>
   </div>
  </div>
 )
 return html
}

export default Hospital
