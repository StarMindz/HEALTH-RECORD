import style from './Dashboard.module.css';
import add from '../../assets/icons/add.png';

const Immunization = () => {
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

  const html = (
    <div className={style.subsection}>
      <div className={style.subsection_head}>
        <h2 className={style.subsection_title}>Immunizations</h2>
        <div className={style.edit_cont}>
          <img className={style.edit_icon} src={add} alt="Edit" />
          <h2 className={style.add_text}>Add Immunizations</h2>
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
export default Immunization;
