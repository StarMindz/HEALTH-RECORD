import style from './Desktop.module.css';
import image1 from '../../../assets/desktop.png';

const WebApp = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_images}>
        <img className={style.image} src={image1} alt="Desktop app" />
      </div>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Stay on top of your insurance coverage with our easy-to-use web app
          </h1>
          <p className={style.main_paragraph}>
            Our Intuitive webapp allows insurance companies
            to conveniently access transaction records for insured patients,
            promoting honesty and preventing fraud.
            <br />
            <br />
            It is the ultimate tool for insurers looking to gain a
            competitive edge in a rapidly changing market.
          </p>
        </div>
      </div>
    </div>
  );
  return html;
};

export default WebApp;
