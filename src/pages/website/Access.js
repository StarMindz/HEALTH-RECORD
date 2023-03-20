import style from './Access.module.css';
import image2 from '../../assets/patient.png';
import image1 from '../../assets/doctor_share.png';

const Access = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_images}>
        <img className={style.first_image} src={image1} alt="Doctor laughing" />
        <img className={style.second_image} src={image2} alt="Doctor laughing" />
      </div>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Struggling to access your health records?
          </h1>
          <p className={style.main_paragraph}>
            Whether you are seeing a new doctor, moving to a new city, or
            simply want to keep track of your medical history.
            {' '}
            <br />
            Our user-friendly platform makes it easy to access you health records
            anywhere, anytime, with just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
  return html;
};

export default Access;
