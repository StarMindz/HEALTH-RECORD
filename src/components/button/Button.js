import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
 const { text, btnType, onClick } = props
 const html = (
  <button onClick={onClick} type="submit" className={`button_${btnType}`}>
   {text}
  </button>
 )
 return html
}

Button.propTypes = {
 text: PropTypes.string,
 btnType: PropTypes.number,
 onClick: PropTypes.func
}

Button.defaultProps = {
 text: '',
 btnType: '',
 onClick: () => ''
}

export default Button
