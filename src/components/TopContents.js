import React from 'react'
import { FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import Img from '../assets/Images/author.png'
const TopContents = () => {
    
  return (
    <div className='w-full static md-x:h-[717px] h-[717px] md-x::relative bg-mainColor md:h-[400px] flex flex-col justify-center items-center'>
    <div className='flex flex-col md:mt-0 mt-[15rem] md:flex md:flex-col lg:flex lg:flex-col  lg:items-start gap-y-4 lg:gap-y-6 lg:ml-32'>
        <h2 className='text-[25px] md:text-[35px] lg:text-[45px] text-yellow-100'>Jessica Henery</h2>
        <p className='tex-[16px] lg:text-[25px] text-textYello self-center lg:self-start'>Senior SEO Writer</p>
        <div className='flex gap-x-5 text-white opacity-50 lg:mt-9 md:self-start'>
            <FaFacebookF/>
            <FaTwitter/>
            <FaPinterestP/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
    </div>
    <div className=' lg:absolute md:static lg:top-28 lg:left-24 flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center'>
           <img  className='lg:static absolute top-11 w-[299px] h-[300px] lg:w-[414px] lg:h-[518px]' src={Img} alt="Author" /> 
          <button className='bg-buttonColor w-[335px] h-[50px] lg:w-[414px] lg:h-[65px] rounded-lg mt-4'> Contact </button>
        </div> 
    </div>
  )
}

export default TopContents