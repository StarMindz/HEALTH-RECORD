/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './CreateAccount.module.css';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';
import StatusModal from '../../../../components/statusModal/StatusModal';

const HospitalWorkerEnrol = () => {
  const [status, setStatus] = useState('Something went wrong. Action failed');
  const [statusState, setStatusState] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    specialty: 'Doctor',
    dob: '',
    phone: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    specialty: 'Doctor',
    dob: '',
    phone: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    if (value === '') {
      setError({ ...error, [name]: '' });
      setValues({ ...values, [name]: value });
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let pass1Error = '';
    let pass2Error = '';
    let emailError = '';

    switch (name) {
      case 'email':
        if (!emailRegex.test(value)) {
          emailError = 'Input a valid Email Address';
        } else {
          emailError = '';
        }
        break;

      case 'password1':
        if (!passwordRegex.test(value)) {
          pass1Error = 'Password should be 8-20 character and should include at least one letter, one number, and one special character';
        } else {
          pass1Error = '';
        }
        pass2Error = value !== values.password2 ? 'Password does not match' : '';
        break;

      case 'password2':
        pass2Error = value !== values.password1 ? 'Password does not match' : '';
        if (!passwordRegex.test(values.password1)) {
          pass1Error = 'Password should be 8-20 character and should include at least one letter, one number, and one special character';
        } else {
          pass1Error = '';
        }
        break;

      default:
        break;
    }
    setError({
      ...error, password2: pass2Error, password1: pass1Error, email: emailError,
    });
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {
      name, email, password1, password2, gender, dob, phone, address,
    } = values;

    if (name === '' || email === '' || password1 === '' || password2 === '' || gender === '' || dob === '' || address === '' || phone === '') {
      setStatus('All fields are required');
      setStatusState(false);
      setShowStatus(true);
      return;
    }
    if (!passwordRegex.test(password1)) {
      setStatus('Wrong password format');
      setStatusState(false);
      setShowStatus(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('Wrong Email format');
      setStatusState(false);
      setShowStatus(true);
      return;
    }
    if (password1 !== password2) {
      setStatus('Passwords do not match');
      setStatusState(false);
      setShowStatus(true);
      return;
    }

    axios.post('http://tech-mavericks.ue.r.appspot.com/patient/register', values)
      .then(() => {
      // Handle successful response and Show popup
        setStatus('Form submitted successfully!');
        setStatusState(true);
        setShowStatus(true);
        setValues({
          name: '',
          email: '',
          password1: '',
          password2: '',
          specialty: 'Doctor',
          dob: '',
          phone: '',
        });
      })
      .catch((error) => {
      // Handle error response
        if (!error && error.response.request.status === 409) {
          setStatus(JSON.parse(error.response.request.response).detail);
          setStatusState(false);
          setShowStatus(true);
          return;
        }
        setStatus('Something went wrong. Form was not submitted');
        setStatusState(false);
        setShowStatus(true);
      });
  };

  const onBack = () => {
    setShowStatus(false);
    setStatus('Something went wrong. Action failed');
    setStatusState(false);
  };

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
              error={error.email}
              onChange={onChange}
              value={values.email}
              name="email"
            />
            <Input
              type="text"
              label="Active Phone Number"
              placeholder="Phone number"
              onChange={onChange}
              value={values.phone}
              name="phone"
            />
            <Input
              type="date"
              label="Date of Birth"
              placeholder="dd/mm/yyyy"
              onChange={onChange}
              name="dob"
              value={values.dob}
            />
            <Input
              type="text"
              label="Specialty"
              placeholder="Doctor"
              onChange={onChange}
              name="specialty"
              value={values.specialty}
            />
            <Input
              type="password"
              label="Enter Password"
              placeholder="Password"
              error={error.password1}
              onChange={onChange}
              name="password1"
              value={values.password1}
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm password"
              error={error.password2}
              onChange={onChange}
              name="password2"
              value={values.password2}
            />
          </form>
          <div className={style.button_div}>
            <Link to="../../signin/healthworker">
              <Button
                text="Sign in instead"
                btnType={1}
              />
            </Link>
            <Button
              text="Create new account"
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

export default HospitalWorkerEnrol;
