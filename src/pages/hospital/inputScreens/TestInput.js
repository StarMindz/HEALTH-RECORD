/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types'
import Input from '../../../components/input/Input'
import TextArea from '../../../components/input/textArea'
import Button from '../../../components/button/Button'
import style from './inputStyles.module.css'
import back from '../../../assets/icons/back.png'

const TestInput = ({ backFunc }) => {
 const goBack = () => {
  backFunc()
 }

 const html = (
  <div className={style.add}>
   <div className={style.back_cont}>
    <img className={style.back} src={back} alt="back" onClick={goBack} />
    <p className={style.back_text} onClick={goBack}>
     Back
    </p>
   </div>
   <div className={style.add_main_cont}>
    <div className={style.add_cont}>
     <div className={style.sub_cont}>
      <h1 className={style.heading}>Add Test</h1>
      <div className={style.input}>
       <Input type="text" label="Name of Test" placeholder="Test" required />
       <TextArea label="More info" placeholder="Comments" />
       <Input type="file" label="Upload test file" placeholder="Dosage" required />
      </div>
      <Button text="+ Add Test" btnType={2} />
     </div>
    </div>
   </div>
  </div>
 )

 return html
}

TestInput.propTypes = {
 backFunc: PropTypes.func
}

TestInput.defaultProps = {
 backFunc: ''
}

export default TestInput
