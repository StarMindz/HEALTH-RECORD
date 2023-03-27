import style from './Mobile.module.css';
import image1 from '../../../assets/desktop.png';

const Mobile = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            The ultimate health companion
            <br />
            Our patient app
          </h1>
          <p className={style.main_paragraph}>
            Experience a personalized healthcare experience tailored to your unique needs,
            all from the convenience of your mobile device.
            <br />
            <br />
            You can securely share your medical information with authorized parties,
            connect with healthcare professionals and fellow patients for support,
            and even order medications and supplements directly from the app.
          </p>
        </div>
      </div>
      <div className={style.main_images}>
        <img className={style.image} src={image1} alt="Desktop app" />
      </div>
    </div>
  );
  return html;
};

export default Mobile;
