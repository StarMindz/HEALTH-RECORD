import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import style from './portal.module.css';

const GetStarted = () => {
  document.body.style.overflow = 'auto';
  const html = (
    <div className={style.main_cont}>
      <div className={style.background}>
        <h1 className={style.heading}>Let’s get started with your profile</h1>
        <div className={style.card_grid}>
          <div className={style.card_1}>
            <h2 className={style.card_head}>Hospitals</h2>
            <p className={style.card_sub_head}>
              Health Provider
            </p>
            <p className={style.paragraph}>
              Create a profile. Keep your medical records safe
              safe and share with ease
            </p>
            <Link to="hospital">
              <Button
                text="Hospital"
                btnType={3}
              />
            </Link>
          </div>
          <div className={style.card_2}>
            <h2 className={style.card_head}>Patient</h2>
            <p className={style.card_sub_head}>
              Healthcare User
            </p>
            <p className={style.paragraph}>
              Create a profile. Keep your medical records safe
              safe and share with ease
            </p>
            <Link to="patient">
              <Button
                text="I'm a patient"
                btnType={2}
              />
            </Link>
          </div>
          <div className={style.card_3}>
            <h2 className={style.card_head}>Insurance</h2>
            <p className={style.card_sub_head}>
              Health Insurance Provider
            </p>
            <p className={style.paragraph}>
              Create a profile. Keep your medical records safe
              safe and share with ease
            </p>
            <Link to="insurance">
              <Button
                text="Insurance"
                btnType={3}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  return html;
};

export default GetStarted;
