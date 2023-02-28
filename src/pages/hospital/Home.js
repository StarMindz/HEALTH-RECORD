import ProfileMin from './DashBoardComponents/ProfileMin';
import MedicationMin from './DashBoardComponents/MedicationMin';
import AllergyMin from './DashBoardComponents/AllergyMin';
import TestMin from './DashBoardComponents/TestMin';
import TransactionMin from './DashBoardComponents/TransactionMin';
import ImmunizationMin from './DashBoardComponents/ImmunizationMin';
import style from './Dashboard.module.css';

const Home = () => {
  const html = (
    <div className={style.home}>
      <ProfileMin />
      <MedicationMin />
      <AllergyMin />
      <ImmunizationMin />
      <TestMin />
      <TransactionMin />
    </div>
  );
  return html;
};

export default Home;
