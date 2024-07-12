import PropTypes from 'prop-types'
import ProfileMin from './DashBoardComponents/ProfileMin'
import MedicationMin from './DashBoardComponents/MedicationMin'
import AllergyMin from './DashBoardComponents/AllergyMin'
import TestMin from './DashBoardComponents/TestMin'
import TransactionMin from './DashBoardComponents/TransactionMin'
import ImmunizationMin from './DashBoardComponents/ImmunizationMin'
import style from './Dashboard.module.css'

const Home = ({ handleClick, input, patientData }) => {
 const html = (
  <div className={style.home}>
   <ProfileMin handleClick={handleClick} patientData={patientData} />
   <MedicationMin input={input} />
   <AllergyMin input={input} />
   <ImmunizationMin input={input} />
   <TestMin input={input} />
   <TransactionMin input={input} />
  </div>
 )
 return html
}

Home.propTypes = {
 patientData: PropTypes.string,
 handleClick: PropTypes.func,
 input: PropTypes.func
}


Home.defaultProps = {
 patientData: '',
 handleClick: '',
 input: ''
}

export default Home
