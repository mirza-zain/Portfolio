import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-full bg-gray-800'>
      <h2 className='p-2 text-xl text-white text-center font-["Oswald"] font-semibold'>Follow My Journey</h2>
      <ul className='flex justify-center'>
          <a className='text-2xl text-cyan-400 hover:text-white ease-in-out duration-700 font-bold p-3 rounded-full' href=''><i className='ri-instagram-line'></i></a>
          <a className='text-2xl text-cyan-400 hover:text-white ease-in-out duration-700 font-bold p-3 rounded-full' href=''><i className='ri-facebook-line'></i></a>
          <a className='text-2xl text-cyan-400 hover:text-white ease-in-out duration-700 font-bold p-3 rounded-full' href=''><i className='ri-github-line'></i></a>
      </ul>
      <h3 className='text-center text-white text-lg'>Copyright  2024 - Mirza Zain</h3>
    </footer>
  )
}

export default Footer
