import style from './CreateAccount.module.css';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';

const HospitalAdminCreateAccount = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <div className={style.background}>
          <p className={style.intro}>
            Securely manage your patient health records with our easy-to-use data management system.
          </p>
        </div>
      </div>
      <div className={style.right_cont}>
        <div className={style.form_cont}>
          <h1 className={style.heading}>
            Enrol Hospital
          </h1>
          <form className={style.form}>
            <Input
              type="text"
              label="Hospital Name"
              placeholder="Hospital Name"
              required
            />
            <Input
              type="email"
              label="Official Email Address"
              placeholder="Email Address"
              required
            />
            <Input
              type="text"
              label="Active Phone Number"
              placeholder="Phone number"
              required
            />
            <Input
              type="password"
              label="Enter Password"
              placeholder="Password"
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm password"
              required
            />
          </form>
          <div className={style.button_div}>
            <Button
              text="Sign in instead"
              btnType={1}
            />
            <Button
              text="Create new account"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
  return html;
};

export default HospitalAdminCreateAccount;
