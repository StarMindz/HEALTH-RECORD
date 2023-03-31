import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import StatusModal from '../../components/statusModal/StatusModal';
import style from './SignIn.module.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import image from '../../assets/typing.png';

const PatientSignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const [status, setStatus] = useState('Something went wrong. Action failed');
  const [statusState, setStatusState] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent page refresh
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {
      username, password,
    } = values;

    if (!emailRegex.test(username)) {
      setStatus('Give a valid email address');
      setStatusState(false);
      setShowStatus(true);
      return;
    }
    if (password === '') {
      setStatus('No password given');
      setStatusState(false);
      setShowStatus(true);
      return;
    }

    try {
      const { username, password } = values;
      const payload = `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`;
      const response = await axios.post('http://tech-mavericks.ue.r.appspot.com/user/login', payload);
      setAuth({
        username, password,
      });
      console.log(response);
      setStatus('Form submitted successfully!');
      setStatusState(true);
      setShowStatus(true);
    } catch (error) {
      setStatus('Something went wrong. Form was not submitted');
      setStatusState(false);
      setShowStatus(true);
    }
  };

  const onBack = () => {
    setShowStatus(false);
    setStatus('Something went wrong. Action failed');
    setStatusState(false);
  };

  const html = (
    <div className={style.main_cont}>
      <div className={style.left_cont}>
        <div className={style.left_cont_content}>
          <p className={style.intro}>
            Sign in and access your health records.
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
              onChange={onChange}
              value={values.username}
              name="username"
            />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              onChange={onChange}
              value={values.password}
              name="password"
              required
            />
          </form>
          <div className={style.button_div}>
            <Link to="../../signup/patient">
              <Button
                text="Create account"
                btnType={1}
              />
            </Link>
            <Button
              text="Sign in"
              btnType={2}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <div className={showStatus ? style.display : style.noDisplay}>
          <StatusModal
            text={status}
            status={statusState}
            back={onBack}
          />
        </div>
      </div>
    </div>
  );
  return html;
};

export default PatientSignIn;
