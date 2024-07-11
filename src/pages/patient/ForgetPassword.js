import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import BASE_URL from '../../context/baseUrl';
import axiosInstance from '../../context/axiosInstance'
import AuthContext from '../../context/AuthProvider';
import StatusModal from '../../components/statusModal/StatusModal'
import style from './SignIn.module.css'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import image from '../../assets/typing.png'
import Loading from '../../components/loading/Loading'

const ForgetPassword = function () {
 const { checkAuth } = useContext(AuthContext);
 const [status, setStatus] = useState('Something went wrong. Action failed')
 const [statusState, setStatusState] = useState(false)
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [showStatus, setShowStatus] = useState(false)
 const [values, setValues] = useState({
  email: '',
 })

 const [error, setError] = useState({
    email: '',
   })

 const navigate = useNavigate();

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
 }

 const handleSubmit = async (event) => {
  event.preventDefault() // prevent page refresh
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const { email } = values
  console.log('Email', email)

  if (!emailRegex.test(email)) {
   setStatus('Give a valid email address')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  setIsSubmitting(true)

  try {
   const endPoint = `${BASE_URL}/auth/forgot_password?`

   const response = await axiosInstance.post(endPoint, {email}, { withCredentials: true })
   console.log(response)

   setIsSubmitting(false)
   setStatus('Recovery Email sent successfully!')
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

 const onBack = () => {
  setShowStatus(false)
  setStatus('Something went wrong. Action failed')
  setStatusState(false)
 }

 const html = (
  <div className={style.main_cont}>
   <div className={style.left_cont}>
    <div className={style.left_cont_content}>
     <p className={style.intro}>Sign in and access your health records.</p>
    </div>
    <img src={image} alt="Doctor typing" className={style.img} />
   </div>
   <div className={style.right_cont}>
    <div className={style.form_cont}>
     <h1 className={style.heading}>Reset Your Password</h1>
     <form className={style.form}>
        <Input
        type="email"
        label="Email address"
        placeholder="Email address"
        onChange={onChange}
        value={values.email}
        name="email"
        />
     </form>
     <div className={style.button_div}>
        <Link to="../../signin">
            <Button text="Back to Sign In" btnType={1} />
        </Link>

        <Button text="Reset Password" btnType={2} onClick={ handleSubmit} />
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

export default ForgetPassword;
