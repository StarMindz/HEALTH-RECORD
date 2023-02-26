import style from '../Dashboard.module.css';
import add from '../../../assets/icons/add.png';

const AllergyMin = () => {
  const dummyData = [
    {
      id: 1,
      name: 'Strawberry',
      type: 'Food',
      reaction: 'Vomiting',
    },
    {
      id: 2,
      name: 'Paracetamol',
      type: 'Drug',
      reaction: 'Dizziness',
    },
    {
      id: 3,
      name: 'Honey',
      type: 'Drug',
      reaction: 'Body Weakness',
    },
  ];

  const html = (
    <div className={style.subsection}>
      <div className={style.subsection_head}>
        <h2 className={style.subsection_title}>Allergies</h2>
        <div className={style.edit_cont}>
          <img className={style.edit_icon} src={add} alt="Edit" />
          <h2 className={style.add_text}>Add Allergies</h2>
        </div>
      </div>
      <hr className={style.subsection_horizontal} />
      <div className={style.subsection_subhead}>
        <p>Name</p>
        <p>Type</p>
        <p>Reaction</p>
      </div>
      {dummyData.map((data) => (
        <div className={style.subsection_items} key={data.id}>
          <p>{data.name}</p>
          <p>{data.type}</p>
          <p>{data.reaction}</p>
        </div>
      ))}
    </div>
  );

  return html;
};
export default AllergyMin;
