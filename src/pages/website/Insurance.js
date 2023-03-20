import style from './Insurance.module.css';
import image1 from '../../assets/insurance.jpg';
import image2 from '../../assets/report.png';

const Insurance = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Looking to improve your insurance company&apos;s bottom line?
          </h1>
          <p className={style.main_paragraph}>
            <br />
            With our platform, you can reduce administrative costs,
            prevent duplicate tests and procedures, and even identify instances of fraud and abuse.
            <br />
            By providing your clients with easy and secure access to their medical records,
            you can enhance customer satisfaction and loyalty.
          </p>
        </div>
      </div>
      <div className={style.main_images}>
        <img className={style.first_image} src={image1} alt="Doctor laughing" />
        <img className={style.second_image} src={image2} alt="Doctor laughing" />
      </div>
    </div>
  );
  return html;
};

export default Insurance;
