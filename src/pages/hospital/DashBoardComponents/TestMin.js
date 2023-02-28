import style from '../Dashboard.module.css';
import add from '../../../assets/icons/add.png';
import file from '../../../assets/icons/files.png';

const TestMin = () => {
  const dummyData = [
    {
      id: 1,
      name: 'Check up result.pdf',
      date: '23/01/23',
    },
    {
      id: 2,
      name: 'Dental X-Ray Result.png',
      date: '23/01/23',
    },
  ];

  const html = (
    <div className={style.subsection}>
      <div className={style.subsection_head}>
        <h2 className={style.subsection_title}>Test</h2>
        <div className={style.edit_cont}>
          <img className={style.edit_icon} src={add} alt="Edit" />
          <h2 className={style.add_text}>Add Test</h2>
        </div>
      </div>
      <hr className={style.subsection_horizontal} />
      <div className={style.subsection_subhead2}>
        <p>Name</p>
        <p>Date</p>
      </div>
      {dummyData.map((data) => (
        <div className={style.subsection_items3} key={data.id}>
          <div className={style.file_cont}>
            <img className={style.file_icon} src={file} alt="File" />
            <p className={style.file_name}>{data.name}</p>
          </div>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  );

  return html;
};
export default TestMin;
