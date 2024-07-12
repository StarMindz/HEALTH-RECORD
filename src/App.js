import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import HospitalAdminSignIn from './pages/hospital/Accounts/HospitalAdmin/SignIn'
import HospitalWorkerSignIn from './pages/hospital/Accounts/HospitalWorker/SignIn'
import InsuranceCreateAccount from './pages/insurance/Account/CreateAccount'
import HospitalAdminCreateAccount from './pages/hospital/Accounts/HospitalAdmin/CreateAccount'
import HospitalWorkerEnrol from './pages/hospital/Accounts/HospitalWorker/CreateAccount'
import PatientSignIn from './pages/patient/SignIn'
import PatientCreateAccount from './pages/patient/CreateAccount'
import CheckIn from './pages/patient/CheckIn'
import Dashboard from './pages/hospital/Dashboard'
import ForgetPassword from './pages/patient/ForgetPassword'
// import AllergyInput from './pages/hospital/inputScreens/AllergyInput';
// import ImmunizationInput from './pages/hospital/inputScreens/ImmunizationInput';
// import MedicationInput from './pages/hospital/inputScreens/MedicationInput';
// import TestInput from './pages/hospital/inputScreens/TestInput';
// import TransactionInput from './pages/hospital/inputScreens/TransactionInput';
// import Intro from './pages/website/Intro';
import LandingPage from './pages/website/LandingPage'
import GetStarted from './pages/portal/SignUp'
import StatusModal from './components/statusModal/StatusModal'

function App() {
 return (
  <Router className="App">
   <Routes className="appContainer">
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<GetStarted />} />
    <Route path="/signin" element={<PatientSignIn />} />
    <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />}/>
    <Route path="/dashboard-2" element={<Dashboard/>} />
    <Route path="signup/patient" element={<PatientCreateAccount />} />
    <Route path="signin/patient" element={<PatientSignIn />} />
    <Route path="/signup/hospital" element={<HospitalAdminCreateAccount />} />
    <Route path="/signin/hospital" element={<HospitalAdminSignIn />} />
    <Route path="/signup/healthworker" element={<HospitalWorkerEnrol />} />
    <Route path="/signin/healthworker" element={<HospitalWorkerSignIn />} />
    <Route path="/signup/insurance" element={<InsuranceCreateAccount />} />
    <Route path="/status/good" element={<StatusModal text="good" status />} />
    <Route path="/checkin" element={<CheckIn />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
   </Routes>
  </Router>
 )
}

export default App
