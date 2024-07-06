/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import style from './CreateAccount.module.css'
import Input from '../../components/input/Input'
import Input2 from '../../components/input/Input2'
import Button from '../../components/button/Button'
import StatusModal from '../../components/statusModal/StatusModal'
import Loading from '../../components/loading/Loading'

const PatientCreateAccount = function () {
 const [status, setStatus] = useState('Something went wrong. Action failed')
 const [statusState, setStatusState] = useState(false)
 const [showStatus, setShowStatus] = useState(false)
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [values, setValues] = useState({
  name: '',
  nin: '',
  email: '',
  password1: '',
  password2: '',
  gender: 'M',
  dob: '',
  phone: '',
  address: '',
  insuranceID: ''
 })

 const [error, setError] = useState({
  name: '',
  nin: '',
  email: '',
  password1: '',
  password2: '',
  gender: 'M',
  dob: '',
  phone: '',
  address: '',
  insuranceID: ''
 })

 const onChange = (e) => {
  const { name, value } = e.target

  if (value === '') {
   setError({ ...error, [name]: '' })
   setValues({ ...values, [name]: value })
   return
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const ninRegex = /^\d{11}$/

  let pass1Error = ''
  let pass2Error = ''
  let emailError = ''
  let ninError = ''

  switch (name) {
   case 'email':
    if (!emailRegex.test(value)) {
     emailError = 'Input a valid Email Address'
    } else {
     emailError = ''
    }
    break

   case 'password1':
    if (!passwordRegex.test(value)) {
     pass1Error =
      'Password should be 8-20 character and should include at least one letter, one number, and one special character'
    } else {
     pass1Error = ''
    }
    pass2Error = value !== values.password2 ? 'Password does not match' : ''
    break

   case 'password2':
    pass2Error = value !== values.password1 ? 'Password does not match' : ''
    if (!passwordRegex.test(values.password1)) {
     pass1Error =
      'Password should be 8-20 character and should include at least one letter, one number, and one special character'
    } else {
     pass1Error = ''
    }
    break

   case 'nin':
    if (!ninRegex.test(value)) {
     ninError = 'Please input a valid NIN'
    } else {
     ninError = ''
    }
    break

   default:
    break
  }
  setError({
   ...error,
   password2: pass2Error,
   password1: pass1Error,
   email: emailError,
   nin: ninError
  })
  setValues({ ...values, [name]: value })
 }

 const handleSubmit = (event) => {
  event.preventDefault()
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const ninRegex = /^\d{11}$/
  const endPoint = 'https://tech-maverics.onrender.com/patient/register'
  const { name, email, password1, password2, gender, dob, phone, address, nin } = values

  if (
   name === '' ||
   email === '' ||
   password1 === '' ||
   password2 === '' ||
   gender === '' ||
   dob === '' ||
   address === '' ||
   phone === ''
  ) {
   setStatus('All fields are required. Insurance ID is the only optional field')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  if (!passwordRegex.test(password1)) {
   setStatus('Wrong password format')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  if (!emailRegex.test(email)) {
   setStatus('Wrong Email format')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  if (!ninRegex.test(nin)) {
   setStatus('Wrong NIN format')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  if (password1 !== password2) {
   setStatus('Passwords do not match')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  setIsSubmitting(true)
  axios
   .post(endPoint, values)
   .then((response) => {
    // Handle successful response and Show popup
    console.log(response)
    setStatus(
     'Account created successfully! Please check your email to verify and complete your registration.'
    )
    setIsSubmitting(false)
    setStatusState(true)
    setShowStatus(true)
    setValues({
     name: '',
     nin: '',
     email: '',
     password1: '',
     password2: '',
     gender: 'M',
     dob: '',
     phone: '',
     address: '',
     insuranceID: ''
    })
   })
   .catch((error) => {
    // Handle error response
    setIsSubmitting(false)
    console.log(error)
    const errorMessage = error?.response?.data?.detail?.[0]?.msg ?? 'Something went wrong'
    setStatus(errorMessage)
    setStatusState(false)
    setShowStatus(true)
   })
 }

 const onBack = () => {
  setShowStatus(false)
  setStatus('Something went wrong. Action failed')
  setStatusState(false)
 }

 const html = (
  <div className={style.main_cont}>
   <div className={style.left_cont}>
    <div className={style.background}>
     <p className={style.intro}>
      Save your health records with ease and get access to them anytime, anywhere.
     </p>
    </div>
   </div>
   <div className={style.right_cont}>
    <div className={style.form_cont}>
     <h1 className={style.heading}>Create new account</h1>
     <form className={style.form}>
      <Input
       type="text"
       label="Full Name"
       placeholder="Full Name"
       onChange={onChange}
       value={values.name}
       name="name"
      />
      <Input
       type="email"
       label="Email Address"
       placeholder="Email Address"
       error={error.email}
       onChange={onChange}
       value={values.email}
       name="email"
      />
      <Input
       type="text"
       label="National Identification Number"
       placeholder="NIN"
       error={error.nin}
       onChange={onChange}
       value={values.nin}
       name="nin"
      />
      <Input
       type="text"
       label="Insurance ID"
       placeholder="Insurance ID"
       error={error.insuranceID}
       onChange={onChange}
       value={values.insuranceID}
       name="insuranceID"
      />
      <Input2
       options={['M', 'F']}
       label="Gender"
       onChange={onChange}
       name="gender"
       value={values.gender}
      />
      <Input
       type="date"
       label="Date of Birth"
       placeholder="dd/mm/yyyy"
       onChange={onChange}
       name="dob"
       value={values.dob}
      />
      <Input
       type="tel"
       label="Phone Number"
       placeholder="Phone number"
       onChange={onChange}
       name="phone"
       value={values.phone}
      />
      <Input
       type="text"
       label="Address"
       placeholder="Home Address"
       onChange={onChange}
       name="address"
       value={values.address}
      />
      <Input
       type="password"
       label="Enter Password"
       placeholder="Password"
       error={error.password1}
       onChange={onChange}
       name="password1"
       value={values.password1}
      />
      <Input
       type="password"
       label="Confirm Password"
       placeholder="Confirm password"
       error={error.password2}
       onChange={onChange}
       name="password2"
       value={values.password2}
      />
     </form>
     <div className={style.button_div}>
      <Link to="../../signin/patient">
       <Button text="Sign in instead" btnType={1} />
      </Link>
      <Button text="Create new account" btnType={2} onClick={handleSubmit} />
     </div>
    </div>
    <div className={showStatus ? style.display : style.noDisplay}>
     <StatusModal text={status} status={statusState} back={onBack} />
    </div>
    <div className={isSubmitting ? style.display : style.noDisplay}>
     <Loading />
    </div>
   </div>
  </div>
 )
 return html
}

export default PatientCreateAccount
