import React from 'react'
import logo from '../assets/Vector.png';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='flex justify-center items-center mb-3'>
        <div className='flex justify-center items-center flex-col w-[600px]'>
          <img src={logo} alt='logo' width="200px" className='mt-3' />
          <p className=" text-5xl  leading-6 tracking-tight mt-3">"Welcome back devoted soul"</p>
          <p className=" text-2xl  tracking-tight mt-10 text-center">Return to the path of divine love. Sign in and walk hand-in-hand with lord Krishna</p>
          <div className='mt-5'>
            <form>


              <div className="relative mb-2 mt-2 flex items-center">
                <MdOutlineMail className=" absolute left-4 mb-0 mt-auto" />
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"></input>
              </div>


              <div className="relative mb-2 mt-2 flex items-center">
                <RiLockPasswordLine className=" absolute left-4 mb-0 mt-auto" />
                <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"></input>
              </div><br />
              <div className='text-right'>
                <Link to="/login"><span className='text-[#008080]'>Forget Password ?</span></Link>
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
              <button class="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" type="submit">
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
                Already have an account? <Link to="/register"><span className='text-[#008080]'>Sign In</span></Link>
              </p>
            </div>
            <div className='h-[200px]'></div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Login
