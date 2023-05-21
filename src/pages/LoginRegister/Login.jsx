import { Link, useLocation, useNavigate } from 'react-router-dom'
import teddy from '../../assets/teddy.png'
import { FcGoogle } from 'react-icons/fc'
import { useContext, useState } from 'react'
import { authContext } from '../../provider/AuthProvider'
import { toast } from 'react-hot-toast'
import useTitle from '../../hooks/useTitle'

const Login = () => {
     const [error, setError] = useState('')
     const navigate = useNavigate();
     const location = useLocation();
     const from = location?.state?.from?.pathname || '/';
    //  console.log(location);
    useTitle('Login')

     const { loginIn, googleSignIn} = useContext(authContext)
     
  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const form = event.target
    const email = form.email.value
    const password = form.password.value
    // console.log(email, password)

    //fireBase login system 
    loginIn(email, password)
    .then(result=>{
     const logedUser = result.user;
    //  console.log(logedUser)
     toast.success('LogIn Successful')
     navigate(from , {replace: true})
    })
    .catch(error=>{
     setError(error.message)
    })
    
  }

  //
  const handleGoogleSignIn = ()=>{
     googleSignIn()
     .then(result=>{
          const loggedUser = result.user;
          toast.success('Google signIn Success')
          navigate(from, {replace: true})
     })
     .catch(error=>{
          setError(error.message)
     })
  }

  return (
    <div className="min-h-screen my-5">
      <div className="md:w-1/2 mx-auto text-center">
        <img className="w-32 mx-auto" src={teddy} alt="" />
        <h2 className="text-2xl ">Please Login</h2>
        <p>Your Destination for Teddy Bear Delight</p>
      </div>

      <div className="hero">
        <div className="hero-content w-full md:w-1/2">
          <div className="card w-full shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label text-base">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className='text-red-600 font-semibold'>{error}</p>
              <div className="form-control mt-6">
                <button className="btn border-none bg-sky-500 hover:bg-sky-700 ">Login</button>
                <div className="divider py-4">OR</div>
                <div onClick={handleGoogleSignIn} className="text-center  ">
                  <FcGoogle className="text-3xl text-center mx-auto rounded-full hover:outline outline-info transition-all" />
                </div>
              </div>
              <p className="pt-4">
                Have an Account:  <Link to='/register' className="underline decoration-sky-500 text-blue-600 hover:text-blue-900 font-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
