import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const Input = (props) => {
  const {
    type, text, label, placeholder, required,
  } = props;
  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <input
        type={type}
        value={text}
        required={required}
        placeholder={placeholder}
        className={style.input}
      />
    </div>
  );
  return html;
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: '',
  text: '',
  label: '',
  placeholder: '',
  required: false,
};

export default Input;
