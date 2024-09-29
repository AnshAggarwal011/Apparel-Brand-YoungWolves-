/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium inventore voluptates architecto. Modi impedit mollitia error ea fugit quisquam ut dolores atque, eaque sint repudiandae placeat voluptates obcaecati corporis!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9791745670</li>
                    <li>hpcreations@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 texxt-sm text-center'>Copyright 2024@hpcreations - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer