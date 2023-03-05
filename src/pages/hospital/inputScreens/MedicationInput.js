/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import Input from '../../../components/input/Input';
import TextArea from '../../../components/input/textArea';
import Button from '../../../components/button/Button';
import style from './inputStyles.module.css';
import back from '../../../assets/icons/back.png';

const MedicationInput = ({ backFunc }) => {
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
            <h1 className={style.heading}>Add Medication</h1>
            <div className={style.input}>
              <Input
                type="text"
                label="Name of medication"
                placeholder="Medication"
                required
              />
              <Input
                type="text"
                label="Dosage"
                placeholder="Dosage"
                required
              />
              <Input
                type="date"
                label="Select Start Date"
                placeholder="08/17/2023"
              />
              <Input
                type="date"
                label="Select Due date"
                placeholder="08/17/2023"
              />
              <TextArea
                label="Reason for taking"
                placeholder="Reason for taking"
              />
            </div>
            <Button
              text="+ Add Medication"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return html;
};

MedicationInput.propTypes = {
  backFunc: PropTypes.func,
};

MedicationInput.defaultProps = {
  backFunc: '',
};

export default MedicationInput;
