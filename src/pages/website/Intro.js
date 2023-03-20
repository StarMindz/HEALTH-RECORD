import { Link } from 'react-router-dom';
import style from './Intro.module.css';
import Button from '../../components/button/Button';
import image1 from '../../assets/doctor_laughing.png';
import image2 from '../../assets/record.png';

const Intro = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Your complete Health story at your finger tip.
          </h1>
          <p className={style.main_paragraph}>
            Your health is your most valuable asset.
            Protect and manage it like never before.
            Say goodbye to the hassle of paper records and hello to the future of digital health
          </p>
          <div className={style.main_button}>
            <Link to="/signup">
              <Button
                text="Get Started for free"
                btnType={5}
              />
            </Link>
          </div>
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

export default Intro;
