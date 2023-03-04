/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import style from './inputStyles.module.css';
import back from '../../../assets/icons/back.png';

const TransactionInput = ({ backFunc }) => {
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
            <h1 className={style.heading}>Add Transaction</h1>
            <div className={style.input}>
              <Input
                type="text"
                label="Description"
                placeholder="Transaction Description"
                required
              />
              <Input
                type="number"
                label="Transaction Amount"
                placeholder="Amount"
                required
              />
            </div>
            <Button
              text="+ Add Transaction"
              btnType={2}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return html;
};

TransactionInput.propTypes = {
  backFunc: PropTypes.func,
};

TransactionInput.defaultProps = {
  backFunc: '',
};

export default TransactionInput;
