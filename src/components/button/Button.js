import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    text,
    btnType,
  } = props;
  const html = (
    <button type="submit" className={`button_${btnType}`}>{text}</button>
  );
  return html;
};

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.number,
};

Button.defaultProps = {
  text: '',
  btnType: '',
};

export default Button;
