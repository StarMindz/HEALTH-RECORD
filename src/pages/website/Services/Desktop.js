import style from './Desktop.module.css'
import image1 from '../../../assets/desktop.png'

const Desktop = () => {
 const html = (
  <div className={style.intro}>
   <div className={style.main_images}>
    <img className={style.image} src={image1} alt="Desktop app" />
   </div>
   <div className={style.main_text}>
    <div className={style.main_text_cont}>
     <h1 className={style.main_heading}>User-Friendly Health Dashboard</h1>
     <p className={style.main_paragraph}>
      Our dashboard makes it easy to track your patients progress, stay informed, and make smart
      health decisions
     </p>
    </div>
   </div>
  </div>
 )
 return html
}

export default Desktop
