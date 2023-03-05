import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import style from './CheckIn.module.css';

const CheckIn = () => {
  const html = (
    <div className={style.check_in}>
      <div className={style.check_in_cont}>
        <div className={style.sub_cont}>
          <h1 className={style.heading}>Patients Record</h1>
          <div className={style.input}>
            <Input
              type="text"
              label="Patients ID"
              placeholder="Enter patients ID"
              required
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter password"
              required
            />
          </div>
          <Button
            text="Check In Patient"
            btnType={2}
          />
        </div>
      </div>
    </div>
  );

  return html;
};

export default CheckIn;
