import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import axiosInstance from '../../context/axiosInstance'
import BASE_URL from '../../context/baseUrl';
import AuthContext from '../../context/AuthProvider';
import StatusModal from '../../components/statusModal/StatusModal'
import style from './SignIn.module.css'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import image from '../../assets/typing.png'
import Loading from '../../components/loading/Loading'

const PatientSignIn = function () {
 const { auth, setAuth } = useContext(AuthContext);
 const [status, setStatus] = useState('Something went wrong. Action failed')
 const [statusState, setStatusState] = useState(false)
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [showStatus, setShowStatus] = useState(false)
 const [values, setValues] = useState({
  username: '',
  password: ''
 })

 const navigate = useNavigate();

 const onChange = (e) => {
  const { name, value } = e.target
  setValues({ ...values, [name]: value })
 }

 const signIn = async (event) => {
  event.preventDefault() // prevent page refresh
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const { username, password } = values

  if (!emailRegex.test(username)) {
   setStatus('Give a valid email address')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  if (password === '') {
   setStatus('No password given')
   setStatusState(false)
   setShowStatus(true)
   return
  }
  setIsSubmitting(true)

  try {
   const endPoint = `${BASE_URL}/auth/login?email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`

   const response = await axiosInstance.post(endPoint, {},)
   console.log(response)

   setIsSubmitting(false)
   setStatus('Signed in successfully!')
   setStatusState(true)
   setShowStatus(true)
   const role = response.data.data.role
   const email = response.data.email
   const nin = response.data.data.nin 
   console.log(role)

   setAuth({
    user: { email: email !== '' ? email : null, nin: nin !== '' ? nin: null },
    isAuthenticated: true,
    role: role,
  });

  console.log(auth)

  // // Assuming the role is included in the response
   if (role === 'hospital') {
     navigate('/hospital-dashboard');
   } else if (role === 'patient') {
     navigate('/dashboard');
    } else if (role === 'insurance') {
      navigate('/insurance-dashboard');
   } else {
     navigate('/dashboard');
   }

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
     <h1 className={style.heading}>Sign in</h1>
     <form className={style.form}>
      <Input
       type="email"
       label="Email address"
       placeholder="Email address"
       onChange={onChange}
       value={values.username}
       name="username"
      />
      <Input
       type="password"
       label="Password"
       placeholder="Password"
       onChange={onChange}
       value={values.password}
       name="password"
       required
      />
      <span onClick={() =>navigate('/forget-password')} style={{ color: '#c86f16', width: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>Forget password ?</span>
     </form>
     <div className={style.button_div}>
      <Link to="../../signup/patient">
       <Button text="Create account" btnType={1} />
      </Link>
      <Button text="Sign in" btnType={2} onClick={signIn} />
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

export default PatientSignIn
