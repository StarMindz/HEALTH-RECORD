/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import Input from '../../../components/input/Input';
import Input2 from '../../../components/input/Input2';
import TextArea from '../../../components/input/textArea';
import Button from '../../../components/button/Button';
import style from './inputStyles.module.css';
import back from '../../../assets/icons/back.png';

const AllergyInput = ({ backFunc }) => {
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
            <h1 className={style.heading}>Add Allergy</h1>
            <div className={style.input}>
              <Input
                type="text"
                label="Name of Allergy"
                placeholder="Allergen"
                required
              />
              <Input2
                options={['Food', 'Drug', 'Environmental', 'Insect', 'Latex', 'Contact', 'Weather']}
                label="Allergy Type"
                required
              />
              <Input
                type="text"
                label="Reactions"
                placeholder="Allergy Reaction"
              />
              <TextArea
                label="More info"
                placeholder="Comments"
              />
            </div>
            <Button
              text="+ Add Allergy"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return html;
};

AllergyInput.propTypes = {
  backFunc: PropTypes.func,
};

AllergyInput.defaultProps = {
  backFunc: '',
};

export default AllergyInput;
