import style from './CreateAccount.module.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import image from '../../assets/typing.png';

const PatientCreateAccount = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <p className={style.intro}>
          Save your health records with ease and get access to them anytime, anywhere.
        </p>
        <img src={image} alt="Doctor typing" className={style.img} />
      </div>
      <div className={style.right_cont}>
        <div className={style.form_cont}>
          <h1 className={style.heading}>
            Create new account
          </h1>
          <form>
            <Input
              type="text"
              label="Full Name"
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="Email Address"
              required
            />
            <Input
              type="text"
              label="National Identification Nunber"
              placeholder="NIN"
              required
            />
            <Input
              type="date"
              label="Date of Birth"
              placeholder="dd/mm/yyyy"
              required
            />
            <Input
              type="text"
              label="Phone Number"
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

export default PatientCreateAccount;
