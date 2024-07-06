// import style from './Profile.module.css';
import profilePic from '../../assets/profile_image.png'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Input2 from '../../components/input/Input2'
import style from './Profile.module.css'

const Profile = () => {
 const html = (
  <div className={style.profile}>
   <div className={style.profile_pic_cont}>
    <img src={profilePic} alt="Profile pic" className={style.profile_pic} />
   </div>
   <Button text="Upload" btnType={2} />
   <form className={style.profile_form}>
    <Input type="text" label="Full Name" placeholder="" required />
    <Input type="email" label="Email Address" placeholder="" required />
    <Input type="tel" label="Phone Number" placeholder="Enter phone number" required />
    <Input type="date" label="Date of Birth" placeholder="" required />
    <Input2 options={['Male', 'Female']} label="Gender" required />
    <Input type="number" label="Height" placeholder="Enter height" required />
    <Input type="number" label="Weight" placeholder="Enter weight" required />
    <Input type="number" label="BMI" placeholder="Enter BMI" required />
    <Input2 options={['A', 'B', 'AB', 'O']} label="Blood Group" required />
    <Input2 options={['AA', 'AS', 'SS', 'AC', 'SC']} label="Genotype" required />
   </form>
   <Button text="Save Changes" btnType={2} />
  </div>
 )

 return html
}

export default Profile
