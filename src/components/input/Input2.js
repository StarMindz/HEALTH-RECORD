import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const Input2 = (props) => {
  const {
    options, label, required,
  } = props;
  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <select
        value={options[0]}
        required={required}
        className={style.input2}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  return html;
};

Input2.propTypes = {
  options: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

Input2.defaultProps = {
  options: '',
  label: '',
  required: false,
};

export default Input2;
