import './App.css';
// import HospitalAdminSignIn from './pages/hospital/Accounts/HospitalAdmin/SignIn';
// import HospitalWorkerSignIn from './pages/hospital/Accounts/HospitalWorker/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import InsuranceCreateAccount from './pages/insurance/Account/CreateAccount';
import HospitalAdminCreateAccount from './pages/hospital/Accounts/HospitalAdmin/CreateAccount';
// import HospitalWorkerEnrol from './pages/hospital/Accounts/HospitalWorker/CreateAccount';
import PatientSignIn from './pages/patient/SignIn';
import PatientCreateAccount from './pages/patient/CreateAccount';
// import CheckIn from './pages/patient/CheckIn';
import Dashboard from './pages/hospital/Dashboard';
// import AllergyInput from './pages/hospital/inputScreens/AllergyInput';
// import ImmunizationInput from './pages/hospital/inputScreens/ImmunizationInput';
// import MedicationInput from './pages/hospital/inputScreens/MedicationInput';
// import TestInput from './pages/hospital/inputScreens/TestInput';
// import TransactionInput from './pages/hospital/inputScreens/TransactionInput';
// import Intro from './pages/website/Intro';
import LandingPage from './pages/website/LandingPage';
import GetStarted from './pages/portal/SignIn';
import StatusModal from './components/statusModal/StatusModal';

function App() {
  return (
    <Router className="App">
      <Routes className="appContainer">
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="signup/patient" element={<PatientCreateAccount />} />
        <Route path="signin/patient" element={<PatientSignIn />} />
        <Route path="/signup/hospital" element={<HospitalAdminCreateAccount />} />
        <Route path="/signup/insurance" element={<InsuranceCreateAccount />} />
        <Route path="/signup/insurances" element={<Dashboard />} />
        <Route path="/status" element={<StatusModal text="good" status />} />
      </Routes>
    </Router>
  );
}

export default App;
