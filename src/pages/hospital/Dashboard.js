/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import style from './Dashboard.module.css';
import Home from './Home';
import Profile from './Profile';
import Medication from './Medication';
import Allergy from './Allergy';
import Immunization from './Immunization';
import Test from './Test';
import Transaction from './Transaction';
import MedicationInput from './inputScreens/MedicationInput';
import AllergyInput from './inputScreens/AllergyInput';
import ImmunizationInput from './inputScreens/ImmunizationInput';
import TestInput from './inputScreens/TestInput';
import TransactionInput from './inputScreens/TransactionInput';
import home from '../../assets/icons/home.png';
import profile from '../../assets/icons/profile.png';
import medication from '../../assets/icons/medication.png';
import allergy from '../../assets/icons/allergy.png';
import immunization from '../../assets/icons/immunization.png';
import tests from '../../assets/icons/test.png';
import transaction from '../../assets/icons/transaction.png';
import logo from '../../assets/Harchive.png';

const Dashboard = () => {
  const [active, setActive] = useState('home');
  const [showDashboard, setShowDashboard] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [activeInput, setActiveInput] = useState('');

  const handleClick = (command) => {
    setActive(command);
  };

  const handleInput = (screen) => {
    setShowInput(true);
    setActiveInput(screen);
    setShowDashboard(false);
  };

  const handleBack = () => {
    setShowInput(false);
    setShowDashboard(true);
    setActiveInput('');
  };

  const inputScreen = {
    medication: <MedicationInput backFunc={handleBack} />,
    allergy: <AllergyInput backFunc={handleBack} />,
    immunization: <ImmunizationInput backFunc={handleBack} />,
    test: <TestInput backFunc={handleBack} />,
    transaction: <TransactionInput backFunc={handleBack} />,
  };

  const screen = {
    home: <Home handleClick={handleClick} input={handleInput} />,
    profile: <Profile />,
    medication: <Medication input={handleInput} />,
    allergy: <Allergy input={handleInput} />,
    immunization: <Immunization input={handleInput} />,
    test: <Test input={handleInput} />,
    transaction: <Transaction input={handleInput} />,
  };

  const html = (
    <div className={style.dashboard}>
      <div className={showDashboard ? style.main_cont : style.none}>
        <div className={style.side_bar}>
          <img className={style.company_name} src={logo} alt="logo" />
          <div className={style.menu_items}>
            <div className={`${style.side_bar_item} ${active === 'home' ? style.active : ''}`} role="button" onClick={() => handleClick('home')}>
              <img className={style.item_img} src={home} alt="home" />
              <h2 className={style.item_text}>Home</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'profile' ? style.active : ''}`} role="button" onClick={() => handleClick('profile')}>
              <img className={style.item_img} src={profile} alt="medical profile" />
              <h2 className={style.item_text}>Medical Profile</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'medication' ? style.active : ''}`} role="button" onClick={() => handleClick('medication')}>
              <img className={style.item_img} src={medication} alt="medications" />
              <h2 className={style.item_text}>Medications</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'allergy' ? style.active : ''}`} role="button" onClick={() => handleClick('allergy')}>
              <img className={style.item_img} src={allergy} alt="allergies" />
              <h2 className={style.item_text}>Allergies</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'immunization' ? style.active : ''}`} role="button" onClick={() => handleClick('immunization')}>
              <img className={style.item_img} src={immunization} alt="immunization" />
              <h2 className={style.item_text}>Immunization</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'test' ? style.active : ''}`} role="button" onClick={() => handleClick('test')}>
              <img className={style.item_img} src={tests} alt="tests" />
              <h2 className={style.item_text}>Tests</h2>
            </div>
            <div className={`${style.side_bar_item} ${active === 'transaction' ? style.active : ''}`} role="button" onClick={() => handleClick('transaction')}>
              <img className={style.item_img} src={transaction} alt="transaction records" />
              <h2 className={style.item_text}>Transaction Records</h2>
            </div>
          </div>
        </div>
        <div className={style.main_infos}>
          {/* <Home /> */}
          {/* <Profile /> */}
          {/* <Medication /> */}
          {/* <Allergy /> */}
          {/* <Immunization /> */}
          {/* <Test /> */}
          {/* <Transaction /> */}
          {screen[active]}
        </div>
      </div>
      <div className={showInput ? style.inputModal : style.none}>
        {inputScreen[activeInput]}
      </div>
    </div>
  );

  return html;
};

export default Dashboard;
