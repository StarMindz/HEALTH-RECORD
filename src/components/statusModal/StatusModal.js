/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const html = (
    <div className={style.modal_container}>
      {text}
      <div className={style.cancel} onClick={back}>X</div>
      <div className={style.status}>
        <img className={status ? style.display : style.noDisplay} src={good} alt="status" />
        <img className={status ? style.noDisplay : style.display} src={bad} alt="status" />
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
