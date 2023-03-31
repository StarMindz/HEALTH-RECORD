import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const TextArea = (props) => {
  const {
    label, placeholder, required, name, onChange, value,
  } = props;

  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <textarea
        placeholder={placeholder}
        required={required}
        className={style.big_input}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
  return html;
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  name: '',
  value: '',
  onChange: () => '',
};

export default TextArea;
