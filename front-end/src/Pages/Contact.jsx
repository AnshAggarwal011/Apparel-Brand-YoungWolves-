/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets.js'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Shop No. 123, VC Tower,<br /> GMS Road, <br /> Dehradun <br />UttaraKhand - 248001.</p>
          <p className='text-gray-500'>Tel: (+91) 8077236230 <br/> Email : youngwolves@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at YoungWolves</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
      <NewsletterBox />

    </div>
  )
}

export default Contact