import React from 'react';
import PropTypes from 'prop-types';
import style from './input.module.css';

const TextArea = (props) => {
  const { label, placeholder, required } = props;
  const html = (
    <div className={style.main_cont}>
      <div className={style.input_label}>
        {label}
      </div>
      <textarea
        placeholder={placeholder}
        required={required}
        className={style.big_input}
      />
    </div>
  );
  return html;
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
};

export default TextArea;
