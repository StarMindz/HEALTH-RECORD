import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const Input = (props) => {
  const {
    type, label, placeholder, required,
  } = props;
  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={style.input}
      />
    </div>
  );
  return html;
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: '',
  label: '',
  placeholder: '',
  required: false,
};

export default Input;
