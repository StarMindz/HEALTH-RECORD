/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import style from './Dashboard.module.css';
import add from '../../assets/icons/add.png';

const Medication = ({ input }) => {
  const dummyData = [
    {
      id: 1,
      name: 'Vitamin D1 capsules',
      reason: 'Vitamin D deficiency',
      date: '23/01/23',
    },
    {
      id: 2,
      name: 'Atovaquone/Proguanil (Malarone)',
      reason: 'Body Weakness',
      date: '23/01/23',
    },
  ];

  const openInput = () => {
    input('medication');
  };

  const html = (
    <div className={style.subsection}>
      <div className={style.subsection_head}>
        <h2 className={style.subsection_title}>Medication</h2>
        <div className={style.edit_cont}>
          <img className={style.edit_icon} src={add} alt="Add" onClick={openInput} />
          <h2 className={style.add_text} onClick={openInput}>Add Medication</h2>
        </div>
      </div>
      <hr className={style.subsection_horizontal} />
      <div className={style.subsection_subhead}>
        <p>Name</p>
        <p>Reason for taking</p>
        <p>Due date</p>
      </div>
      {dummyData.map((data) => (
        <div className={style.subsection_items} key={data.id}>
          <p>{data.name}</p>
          <p>{data.reason}</p>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  );

  return html;
};

Medication.propTypes = {
  input: PropTypes.func,
};

Medication.defaultProps = {
  input: '',
};

export default Medication;
