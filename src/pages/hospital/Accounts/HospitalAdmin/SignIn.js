import style from './SignIn.module.css';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';
import image from '../../../../assets/typing.png';

const HospitalAdminSignIn = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <div className={style.left_cont_content}>
          <p className={style.intro}>
            Sign in to access hospital administration
          </p>
        </div>
        <img src={image} alt="Doctor typing" className={style.img} />
      </div>
      <div className={style.right_cont}>
        <div className={style.form_cont}>
          <h1 className={style.heading}>
            Sign in
          </h1>
          <form className={style.form}>
            <Input
              type="email"
              label="Email address"
              placeholder="Email address"
              required
            />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              required
            />
          </form>
          <div className={style.button_div}>
            <Button
              text="Create account"
              btnType={1}
            />
            <Button
              text="Sign in"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
  return html;
};

export default HospitalAdminSignIn;
