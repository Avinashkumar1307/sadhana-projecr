import React, { useState } from 'react';
import logo from '../assets/Vector.png';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiNurseMale } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        country: '',
        age: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/create`, formData);
            console.log('Response:', response.data);
            // Handle successful response
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    return (<>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col w-[600px]'>
                <img src={logo} alt='logo' width="200px" className='mt-3' />
                <p className=" text-5xl  leading-6 tracking-tight mt-3">"Begin your journey"</p>
                <p className=" text-2xl  tracking-tight mt-10 text-center">Open your heart to the divine presence. Sign up today and experience the transformative power of bhakti yoga.</p>
                <div className='mt-5'>
                    <form onSubmit={handleSubmit}>

                        <div className="relative mb-2 mt-2 flex items-center">
                            <FaRegUser className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="name" value={formData.name} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of devotee"></input>
                        </div>
                        <div className="relative mb-2 mt-2 flex items-center">
                            <MdOutlineMail className=" absolute left-4 mb-0 mt-auto" />
                            <input type="email" id="email-address-icon" name="email" value={formData.email} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"></input>
                        </div>
                        <div className="relative mb-2 mt-2 flex items-center">
                            <FaMobileAlt className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="mobile" value={formData.mobile} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number"></input>
                        </div>
                        <div className="relative mb-2 mt-2 flex items-center">
                            <ImProfile className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="country" value={formData.country} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Country name"></input>
                        </div>
                        <div className="relative mb-2 mt-2 flex items-center">
                            <MdOutlineRealEstateAgent className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="age" value={formData.age} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3" placeholder="Age"></input>
                            <GiNurseMale className=" absolute right-40 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="gender" value={formData.gender} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender"></input>
                        </div>

                        <div className="relative mb-2 mt-2 flex items-center">
                            <RiLockPasswordLine className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="password" value={formData.password} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"></input>
                        </div>
                        <div className="relative mb-2 mt-2 flex items-center">
                            <RiLockPasswordLine className=" absolute left-4 mb-0 mt-auto" />
                            <input type="text" id="email-address-icon" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm password"></input>
                        </div><br />
                        <div className='flex flex-row'>
                            <div><input type="checkbox" /></div>
                            <div>
                                <p className='text-xl tracking-tight pl-2 text-center'>
                                    I agree to the <span className='text-[#008080]'>Terms of Service</span> and <span className='text-[#008080]'>Privacy Policy</span>
                                </p>
                            </div>
                        </div>

                        <br /><br />
                        <button class="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" type="submit">
                            Create your account
                        </button>
                        <button type="submit"></button>
                    </form>
                    <button class="w-full group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                        <div class="relative flex items-center space-x-4 justify-center">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                            <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                        </div>
                    </button>
                    <div className='mt-3'>
                        <p className='text-xl tracking-tight pl-2 text-center'>
                            Already have an account? <Link to="/login"><span className='text-[#008080]'>Sign In</span></Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
    );
}

export default Registration;
