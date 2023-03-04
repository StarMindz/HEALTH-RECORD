/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import style from './Dashboard.module.css';
import add from '../../assets/icons/add.png';

const Immunization = ({ input }) => {
  const dummyData = [
    {
      id: 1,
      name: 'Yellow fever vaccine',
      date: '23/01/23',
    },
    {
      id: 2,
      name: 'Influenza vaccine',
      date: '23/01/23',
    },
  ];

  const openInput = () => {
    input('immunization');
  };

  const html = (
    <div className={style.subsection}>
      <div className={style.subsection_head}>
        <h2 className={style.subsection_title}>Immunizations</h2>
        <div className={style.edit_cont}>
          <img className={style.edit_icon} onClick={openInput} src={add} alt="Add" />
          <h2 className={style.add_text} onClick={openInput}>Add Immunizations</h2>
        </div>
      </div>
      <hr className={style.subsection_horizontal} />
      <div className={style.subsection_subhead2}>
        <p>Name</p>
        <p>Date taken</p>
      </div>
      {dummyData.map((data) => (
        <div className={style.subsection_items2} key={data.id}>
          <p>{data.name}</p>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  );

  return html;
};

Immunization.propTypes = {
  input: PropTypes.func,
};

Immunization.defaultProps = {
  input: '',
};

export default Immunization;
