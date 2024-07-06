/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import style from './Contact.module.css'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import TextArea from '../../components/input/textArea'
import StatusModal from '../../components/statusModal/StatusModal'

const Contact = () => {
 const [status, setStatus] = useState('Something went wrong. Action failed')
 const [statusState, setStatusState] = useState(false)
 const [showStatus, setShowStatus] = useState(false)
 const [values, setValues] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
 })

 const [error, setError] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
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

  let pass1Error = ''
  let pass2Error = ''
  let emailError = ''

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

   default:
    break
  }
  setError({
   ...error,
   password2: pass2Error,
   password1: pass1Error,
   email: emailError
  })
  setValues({ ...values, [name]: value })
 }

 const handleSubmit = (event) => {
  event.preventDefault()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const { name, email, phone, message } = values

  if (name === '' || email === '' || phone === '' || message === '') {
   setStatus('All fields are required')
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

  // Handle successful response and Show popup
  setStatus('Form submitted successfully!')
  setStatusState(true)
  setShowStatus(true)
  setValues({
   name: '',
   email: '',
   phone: '',
   message: ''
  })
 }

 const onBack = () => {
  setShowStatus(false)
  setStatus('Something went wrong. Action failed')
  setStatusState(false)
 }
 const html = (
  <div className={style.main_cont}>
   <h1 className={style.heading}>Contact us</h1>
   <p className={style.paragraph}>
    Please indicate the nature of your inquiry and fill in the form below
   </p>
   <form className={style.form}>
    <Input
     type="text"
     label="Full Name"
     placeholder="Full Name"
     name="name"
     onChange={onChange}
     value={values.name}
    />
    <Input
     type="email"
     label="Email Address"
     placeholder="Email Address"
     name="email"
     error={error.email}
     onChange={onChange}
     value={values.email}
    />
    <Input
     type="tel"
     label="Phone Number"
     placeholder="Phone number"
     name="phone"
     onChange={onChange}
     value={values.phone}
    />
    <TextArea
     label="Message"
     placeholder="Type your message here"
     name="message"
     onChange={onChange}
     value={values.message}
    />
    <div className={style.button_div}>
     <Button text="Submit" btnType={3} onClick={handleSubmit} />
    </div>
   </form>
   <div className={showStatus ? style.display : style.noDisplay}>
    <StatusModal text={status} status={statusState} back={onBack} />
   </div>
  </div>
 )
 return html
}

export default Contact
