import style from './CreateAccount.module.css';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';

const HospitalWorkerEnrol = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <div className={style.background}>
          <p className={style.intro}>
            Get quick, secure access to your patients health records
            Enrol to provide the best possible care for your patients
          </p>
        </div>
      </div>
      <div className={style.right_cont}>
        <div className={style.form_cont}>
          <h1 className={style.heading}>
            Enrol Health worker
          </h1>
          <form className={style.form}>
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
              label="Active Phone Number"
              placeholder="Phone number"
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
              label="Specialty"
              placeholder="Doctor"
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

export default HospitalWorkerEnrol;
