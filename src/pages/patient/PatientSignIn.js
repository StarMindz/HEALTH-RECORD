import style from './PatientSignIn.module.css';
import Input from '../../components/input/Input';
import image from '../../assets/typing.png';

const PatientSignIn = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <p>
          Sign in and access your health records.
        </p>
        <img src={image} alt="Doctor typing" />
      </div>
      <div className={style.right_cont}>
        <h1 className={style.heading}>
          Sign in
        </h1>
        <form>
          <Input />
        </form>
      </div>
    </div>
  );
  return html;
};

export default PatientSignIn;
