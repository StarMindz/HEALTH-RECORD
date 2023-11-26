/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './StatusModal.module.css';
import good from '../../assets/icons/pass.png';
import bad from '../../assets/icons/fail.png';

const StatusModal = (props) => {
  const {
    text,
    status,
    back,
  } = props;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains(style.modal_overlay)) {
        back(); // Call the close function when clicking on the overlay
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [back]);

  const html = (
    <div className={style.modal_overlay}>
      <div className={status ? style.modal_container2 : style.modal_container}>
        <div className={style.text_div}>
          {text}
        </div>
        <div className={style.cancel} onClick={back}>X</div>
        <div className={style.status}>
          <img className={status ? style.display : style.noDisplay} src={good} alt="status" />
          <img className={status ? style.noDisplay : style.display} src={bad} alt="status" />
        </div>
      </div>
    </div>
  );

  return html;
};

StatusModal.propTypes = {
  text: PropTypes.string,
  status: PropTypes.string,
  back: PropTypes.func,
};

StatusModal.defaultProps = {
  text: '',
  status: '',
  back: () => '',
};

export default StatusModal;
