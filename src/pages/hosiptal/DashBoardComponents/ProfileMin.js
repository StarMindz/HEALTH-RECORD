import style from '../Dashboard.module.css';
import edit from '../../../assets/icons/edit.png';
import profilePic from '../../../assets/profile _pic.png';

const ProfileMin = () => {
  const html = (
    <div className={style.main_subsection}>
      <div className={style.edit_cont}>
        <img className={style.edit_icon} src={edit} alt="Edit" />
        <h2 className={style.edit_text}>Edit Medical Profile</h2>
      </div>
      <div className={style.profile_min_main}>
        <img className={style.profile_pic} src={profilePic} alt="profile pic" />
        <div className={style.bio}>
          <h2 className={style.name}>Simon Solomon</h2>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>Date of Birth</h3>
            <p>{}</p>
          </div>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>Height</h3>
            <p>{}</p>
          </div>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>Weight</h3>
            <p>{}</p>
          </div>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>BMI</h3>
            <p>{}</p>
          </div>
        </div>
        <div className={style.genotype_info}>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>Blood Group</h3>
            <p>{}</p>
          </div>
          <div className={style.bio_item}>
            <h3 className={style.bio_label}>Genotype</h3>
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return html;
};
export default ProfileMin;
