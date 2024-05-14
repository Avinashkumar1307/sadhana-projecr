import React, { useState } from 'react'

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Herosection from '../Utils/Herosection';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/Slices/login/thunk';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [token, setToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('http://localhost:4000/api/v1/login', formData);
    //   console.log('Response:', response.data);
    //   Cookies.set('authToken', response.data.token);
    //   localStorage.setItem(
    //     "userData",
    //     JSON.stringify({
    //       token: response.data.token,
    //       name: response.data.user.name,
    //       gender: response.data.user.gender,
    //       email: response.data.user.email,
    //     })
    //   );
      navigate("/home");
    //   // Handle successful response (e.g., redirect user, show success message)
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Handle error (e.g., display error message to user)
    // }
    dispatch(loginUser(formData));
  };
  // const temp = Cookies.get('authToken');
  // console.log(temp);

  return (
    <>
      <div className='flex justify-center items-center mb-3'>
        
        <div className='flex justify-center items-center flex-col w-[600px]'>
        <Herosection heading="Welcome back devoted soul" subheading="Return to the path of divine love. Sign in and walk hand-in-hand with lord Krishna"/>
          <div className='mt-5'>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineMail className="absolute left-4 mb-0 mt-auto" />
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" name="email"
                  value={formData.email}
                  onChange={handleChange}></input>
              </div>


              <div className="relative mb-2 mt-2 flex items-center">
                <RiLockPasswordLine className=" absolute left-4 mb-0 mt-auto" />
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password"
                  value={formData.password}
                  onChange={handleChange} placeholder="Password"></input>
              </div><br />
              <div className='text-right'>
                <Link to="/verify/verifybyemail"><span className='text-[#008080]'>Forget Password ?</span></Link>
              </div>
              <br />

              <div className='flex flex-row'>
                <div><input type="checkbox" /></div>
                <div>
                  <p className='text-xl tracking-tight pl-2 text-center'>
                    I agree to the <span className='text-[#008080]'>Terms of Service</span> and <span className='text-[#008080]'>Privacy Policy</span>
                  </p>
                </div>
              </div>
              <br />
              <button class="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" onClick={handleSubmit}>
                Log In
              </button>
              <br />
            </form>
            <button class="w-full group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div class="relative flex items-center space-x-4 justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
              </div>
            </button>
            <div className='mt-3'>
              <p className='text-xl tracking-tight pl-2 text-center'>
                Already have an account? <Link to="/register"><span className='text-[#008080]'>Sign Up</span></Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
