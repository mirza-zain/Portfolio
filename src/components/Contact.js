import React from 'react';
import Lottie from 'lottie-react';
import connect from '../animations/connect.json';
import service from '../animations/service.json';

const Contact = () => {
  return (
    <div className='w-full h-full md:h-screen flex flex-col md:flex-row p-2'>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center' >
        <h2 className='text-3xl md:text-4xl text-cyan-600 font-bold font-["Playwrite_AR"] mt-4'>Contact Form</h2>
        <Lottie animationData={connect} className='w-full md:w-[40%] h-[20%]'/>
        <Lottie animationData={service} className='w-full md:w-[60%] h-1/2'/>
      </div>
      <div className='w-full md:w-1/2 p-6'>
      <form className='flex flex-col translate-y-2 md:translate-y-[50%]' action="https://formsubmit.co/mirzazain269@gmail.com" method="POST">
        <ul className='flex text-4xl gap-4 text-cyan-800'>
          <li className='hover:text-yellow-400 duration-500 ease-in-out'><a href='https://www.instagram.com/mirza_zain43/' target='_blank' rel='noreferrer'><i className="ri-instagram-fill"></i></a></li>
          <li className='hover:text-yellow-400 duration-500 ease-in-out'><a href='https://www.linkedin.com/in/mirza-zain269/' target='_blank' rel='noreferrer'><i className="ri-linkedin-fill"></i></a></li>
          <li className='hover:text-yellow-400 duration-500 ease-in-out'><a href='https://github.com/mirza-zain' target='_blank' rel='noreferrer'><i className="ri-github-fill"></i></a></li>
        </ul>
        <input name='name' type='text' placeholder='Name' className='w-full h-10 bg-gray-200 p-2 my-2'/>
        <input name='email' type='email' placeholder='Email' className='w-full h-10 bg-gray-200 p-2 my-2'/>
        <input name='subject' type='text' placeholder='Subject' className='w-full h-10 bg-gray-200 p-2 my-2'/>
        <textarea name='message' placeholder='Message' className='w-full h-1/2 bg-gray-200 p-2 my-2'/>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://mirzazain.vercel.app/thankyou/" />
        <button className='w-full h-14 bg-red-400 text-white font-bold'>Send</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
