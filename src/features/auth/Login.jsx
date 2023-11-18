import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useFormik } from "formik"
import { loginSchema } from "./schemas"
import MetaData from "../../components/Meta/MetaData"
import { auth, db } from "../../api/firebase"


const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const onSubmit = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, values.email, values.password);
      const docRef = doc(db, "users", res.user.uid)
      await updateDoc(docRef, {
        online: true,
      })
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  }

  const registerWithGoogle = async() => {
    try {
      await signInWithPopup(auth, provider)
      toast.success('Login successfull')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    } 
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit
  }
  )

  return (
    <section className='w-full h-screen  flex items-center justify-center bg-[url("/images/auth.jpg")] bg-cover lg:bg-cover bg-center bg-no-repeat'>
      <MetaData title={'Sign into your account'} />
      <div className="flex justify-start flex-col items-center border p-6 bg-white opacity-90 w-[90%] lg:w-[50%] lg:justify-center gap-2">
        <div className="title flex flex-col items-center ">
          <h4 className="text-3xl text-gray-700 text-center">Hello again!</h4>
          <span className='py-4 text-xl text-center text-gray-700'>Log in into your account</span>
        </div>
        <button 
          className="flex items-center shadow"
          onClick={registerWithGoogle}
        >
          <div className="px-2">
            <FcGoogle/>
          </div>
          <p className="text-white bg-[#be123c] p-2 font-semibold">Sign in with google</p>
        </button>
        <span className="text-gray-700 font-semibold">OR</span>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2 w-[100%]'>
                <label className="sr-only text-gray-700 text-xl">Email</label>
                <input
                  className={`p-2 border ${errors.email && touched.email ? `outline outline-1 outline-red-700` : `outline-[#be123c]`}`}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your email'
                />
                {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
              </div>
            <div className='flex flex-col gap-2 relative'>
              <label className="sr-only text-gray-700 text-xl">Password</label>
              <input
                className={`p-2 border ${errors.password && touched.password ? `outline outline-1 outline-red-700` : `outline-[#be123c]`}`}
                type={!passwordVisible ? 'password' : 'text'}
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='Enter your password'
              />
              {errors.password && touched.password && <p className='text-red-700'>{errors.password}</p>}
              {passwordVisible && <AiOutlineEyeInvisible  className={`absolute ${errors.password && touched.password && `top-[18%]`} top-[33%] right-3`} onClick={handlePassword}/>}
              {!passwordVisible && <AiOutlineEye  className={`absolute ${errors.password && touched.password && `top-[18%]`} top-[33%] right-3`} onClick={handlePassword}/>}
            </div>
            <button type='submit' disabled={isSubmitting} className='bg-[#be123c] p-3 text-white font-semibold'>Log in</button>
          </div>
        </form>
        <div className='py-4'>
          <span className='text-gray-700'>Not registered? <Link to='/register' className='text-[#be123c]'>Register</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Login