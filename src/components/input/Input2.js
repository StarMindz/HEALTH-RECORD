import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const Input2 = (props) => {
  const {
    options, label, required, name, onChange,
  } = props;
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e);
  };

  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <select
        value={selected}
        required={required}
        className={style.input2}
        name={name}
        onChange={handleChange}
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
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input2.defaultProps = {
  options: '',
  label: '',
  required: false,
  name: '',
  onChange: () => '',
};

export default Input2;
