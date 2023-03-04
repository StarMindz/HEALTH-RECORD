/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import Input from '../../../components/input/Input';
import TextArea from '../../../components/input/textArea';
import Button from '../../../components/button/Button';
import style from './inputStyles.module.css';
import back from '../../../assets/icons/back.png';

const ImmunizationInput = ({ backFunc }) => {
  const goBack = () => {
    backFunc();
  };

  const html = (
    <div className={style.add}>
      <div className={style.back_cont}>
        <img className={style.back} src={back} alt="back" onClick={goBack} />
        <p className={style.back_text} onClick={goBack}>Back</p>
      </div>
      <div className={style.add_main_cont}>
        <div className={style.add_cont}>
          <div className={style.sub_cont}>
            <h1 className={style.heading}>Add Immunization</h1>
            <div className={style.input}>
              <Input
                type="text"
                label="Name of Vaccine"
                placeholder="Vaccine"
                required
              />
              <Input
                type="text"
                label="Lot Number"
                placeholder="Vaccines batch number"
              />
              <Input
                type="date"
                label="Expiration Date"
                placeholder="Expiration date"
              />
              <TextArea
                label="More info"
                placeholder="Comments"
              />
            </div>
            <Button
              text="+ Add Immunization"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return html;
};

ImmunizationInput.propTypes = {
  backFunc: PropTypes.func,
};

ImmunizationInput.defaultProps = {
  backFunc: '',
};

export default ImmunizationInput;
