// import style from './Profile.module.css';
import { useState } from 'react'
import axiosInstance from '../../context/axiosInstance'
import profilePic from '../../assets/profile_image.png'
import StatusModal from '../../components/statusModal/StatusModal'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Input2 from '../../components/input/Input2'
import style from './Profile.module.css'

const Profile = () => {
  const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: 'M',
        height: '',
        weight: '',
        bmi: '',
        'blood group': '',
        genotype: '',
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'M',
    height: '',
    weight: '',
    bmi: '',
    'blood group': '',
    genotype: '',
})

  const [status, setStatus] = useState('Something went wrong. Action failed')
  const [statusState, setStatusState] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    if (value === '') {
        setError({ ...error, [name]: '' })
        setValues({ ...values, [name]: value })
        return
       }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     
    let emailError = ''
     
    switch (name) {
        case 'email':
        if (!emailRegex.test(value)) {
          emailError = 'Input a valid Email Address'
         } else {
          emailError = ''
         }
         break
     
        default:
         break
       }
       setError({
        ...error,
        email: emailError,
       })
    setValues({ ...values, [name]: value })
    console.log(values)
 }

 const handleSubmit = async (event) => {
    event.preventDefault() // prevent page refresh
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { email, phone } = values
  
    if (!emailRegex.test(email)) {
     setStatus('Give a valid email address')
     setStatusState(false)
     setShowStatus(true)
     return
    }

    setIsSubmitting(true)
  
    try {
     const endPoint = `https://tech-maverics.onrender.com/auth/login?email=${encodeURIComponent(email)}}`
  
     const response = await axiosInstance.post(endPoint, {}, { withCredentials: true })
     console.log(response)
  
     setIsSubmitting(false)
     setStatus('Record Updated successfully!')
     setStatusState(true)
     setShowStatus(true)

    } catch (error) {
     setIsSubmitting(false)
     const errorMessage = error?.response?.data?.detail?.[0]?.msg ?? 'Something went wrong'
     console.log(error)
     setStatus(errorMessage)
     setStatusState(false)
     setShowStatus(true)
    }
   }
  

 const html = (
  <div className={style.profile}>
   <div className={style.profile_pic_cont}>
    <img src={profilePic} alt="Profile pic" className={style.profile_pic} />
   </div>
   <Button text="Upload" btnType={2} onClick={() => document.getElementById('passport').click()} />
   <input type='file' id='passport' className={style.noDisplay} />
   <form className={style.profile_form}>
    <Input type="text" label="Full Name" placeholder="" onChange={onChange} value={values.name} name="name" required />
    <Input type="email" label="Email Address" placeholder="" onChange={onChange} value={values.email} name="email" required />
    <Input type="tel" label="Phone Number" placeholder="Enter phone number" onChange={onChange} value={values.phone} name="phone" required />
    <Input type="date" label="Date of Birth" placeholder="" onChange={onChange} value={values.dob} name="dob" required />
    <Input2 options={['Male', 'Female']} label="Gender" onChange={onChange} value={values.gender} name="gender" required />
    <Input type="number" label="Height" placeholder="Enter height" onChange={onChange} value={values.height} name="height" required />
    <Input type="number" label="Weight" placeholder="Enter weight" onChange={onChange} value={values.weight} name="weight" required />
    <Input type="number" label="BMI" placeholder="Enter BMI" onChange={onChange} value={values.bmi} name="bmi" required />
    <Input2 options={['A', 'B', 'AB', 'O']} label="Blood Group" onChange={onChange} value={values.blood_group} name="blood group" required />
    <Input2 options={['AA', 'AS', 'SS', 'AC', 'SC']} label="Genotype" onChange={onChange} value={values.genotype} name="genotype" required />
   </form>
   <Button text="Save Changes" btnType={2} />
  </div>
 )

 return html
}

export default Profile
