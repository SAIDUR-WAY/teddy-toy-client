import { Link, useNavigate } from 'react-router-dom';
import teddy from '../../assets/teddy.png'
import { useContext, useState } from 'react';
import { authContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../hooks/useTitle';


const Register = () => {
     const [error, setError]= useState('')
     const navigate = useNavigate();
     useTitle('Register')

     const {createUser, profileUpdate} = useContext(authContext);
     // console.log(createUser)

     const handleSubmit = event =>{
          event.preventDefault()

          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const confirm = form.confirm.value;
          const url = form.url.value;
          // console.log(name, email, password, confirm, url)
          
          //input field condition
          if(password !== confirm){
            setError(' Not match in password')
            return
       }else if(password.length < 8){
            setError('Please minimum 8 character long')
            return
       }else if(!/(?=.*[A-Z])/.test(password)){
            setError('ADD one UpperCase latter add in password')
            return
       }
          createUser(email, password)
          .then(result =>{
               const userloged = result.user;
              //  console.log(userloged)
               profileUpdate(userloged, name, url)
               toast.success('Successful Register')
               navigate('/')
          })
          .catch(error =>{
              //  console.log(error.message)
               setError(error.message)
          })
     }

     return (
          <div className='my-10'>
                    <h2 className='text-center text-4xl py-2 font-bold'>Please Register</h2>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-full flex-col md:flex-row justify-evenly ">
    <div className="text-center  ">
      <img src={teddy} alt="" />
      <h2 className="text-2xl ">TeddyWorld</h2>
        <p>Your Destination for Teddy Bear Delight</p>
    </div>
    <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
          <div className='md:flex gap-4'>
          <div className="form-control">
          <label className="label">
            <span className="label-text text-base">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control basis-full">
          <label className="label">
            <span className="label-text text-base">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" required className="input input-bordered" />
        </div>
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base">Confirm Password</span>
          </label>
          <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base">Photo URL</span>
          </label>
          <input type="url" name='url' placeholder="URL" className="input input-bordered" />
        </div>
        <p className='text-red-600 font-semibold'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn border-none bg-sky-500 hover:bg-sky-700 ">Register</button>
          <div className="divider py-4">OR</div>
                <div className="text-center  ">
                  <FcGoogle className="text-3xl text-center mx-auto rounded-full hover:outline outline-info transition-all" />
                </div>
        </div>
        
        <p className="pt-4">
                Have an Account:  <Link to='/login' className="underline decoration-sky-500 text-blue-600 hover:text-blue-900 font-bold">
                  Login
                </Link>
              </p>
      </form>
    </div>
  </div>
</div>
          </div>
     );
};

export default Register;