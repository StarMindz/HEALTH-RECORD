import style from './Dashboard.module.css';
import ProfileMin from './DashBoardComponents/ProfileMin';
import MedicationMin from './DashBoardComponents/MedicationMin';
import AllergyMin from './DashBoardComponents/AllergyMin';
import TestMin from './DashBoardComponents/TestMin';
import TransactionMin from './DashBoardComponents/TransactionMin';
import ImmunizationMin from './DashBoardComponents/ImmunizationMin';
import home from '../../assets/icons/home.png';
import profile from '../../assets/icons/profile.png';
import medication from '../../assets/icons/medication.png';
import allergy from '../../assets/icons/allergy.png';
import immunization from '../../assets/icons/immunization.png';
import tests from '../../assets/icons/test.png';
import transaction from '../../assets/icons/transaction.png';

const Dashboard = () => {
  const html = (
    <div className={style.main_cont}>
      <div className={style.side_bar}>
        <h1>Health Scribe</h1>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={home} alt="home" />
          <h2 className={style.item_text}>Home</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={profile} alt="medical profile" />
          <h2 className={style.item_text}>Medical Profile</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={medication} alt="medications" />
          <h2 className={style.item_text}>Medications</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={allergy} alt="allergies" />
          <h2 className={style.item_text}>Allergies</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={immunization} alt="immunization" />
          <h2 className={style.item_text}>Immunization</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={tests} alt="tests" />
          <h2 className={style.item_text}>Tests</h2>
        </div>
        <div className={style.side_bar_item}>
          <img className={style.item_img} src={transaction} alt="transaction records" />
          <h2 className={style.item_text}>Transaction Records</h2>
        </div>
      </div>
      <div className={style.main_infos}>
        <ProfileMin />
        <MedicationMin />
        <AllergyMin />
        <ImmunizationMin />
        <TestMin />
        <TransactionMin />
      </div>
    </div>
  );

  return html;
};

export default Dashboard;
