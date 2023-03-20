import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import style from './input.module.css';

const Input = (props) => {
  const {
    type, label, placeholder, error, onChange, value, name,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const changeShow = () => {
    setShowPassword(!showPassword);
  };

  if (type === 'password') {
    const passwordHtml = (
      <div className={style.main_cont}>
        <div className={style.input_label}>
          {label}
        </div>
        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          className={style.input}
          value={value}
          onChange={onChange}
          name={name}
        />
        <div className={style.eye}>
          <AiOutlineEye
            onClick={changeShow}
            className={showPassword ? style.noDisplay : style.show}
          />
          <AiOutlineEyeInvisible
            onClick={changeShow}
            className={showPassword ? style.show : style.noDisplay}
          />
        </div>
        <div className={style.error}>
          {error}
        </div>
      </div>
    );

    return passwordHtml;
  }

  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={style.input}
        value={value}
        onChange={onChange}
        name={name}
      />
      <div className={style.error}>
        {error}
      </div>
    </div>
  );
  return html;
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: '',
  label: '',
  placeholder: '',
  error: '',
  onChange: () => '',
  value: '',
  name: '',
};

export default Input;
