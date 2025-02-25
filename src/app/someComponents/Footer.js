import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-full bg-[#e3e4e4]  p-4'>
        <div className='flex flex-col items-center'>
            <h2 className='font-["Oswald"] font-bold text-2xl text-cyan-600'>Follow Me</h2>
            <ul className='flex text-2xl gap-4 text-[#244855]'>
                <li className='hover:text-[#E64833] duration-500 ease-in-out'><a href='https://www.instagram.com/mirza_zain43/' target='_blank' rel='noreferrer'><i className="ri-instagram-fill"></i></a></li>
                <li className='hover:text-[#E64833] duration-500 ease-in-out'><a href='https://www.linkedin.com/in/mirza-zain269/' target='_blank' rel='noreferrer'><i className="ri-linkedin-fill"></i></a></li>
                <li className='hover:text-[#E64833] duration-500 ease-in-out'><a href='https://github.com/mirza-zain' target='_blank' rel='noreferrer'><i className="ri-github-fill"></i></a></li>
            </ul>
            <h4 className='text-sm md:text-lg font-medium font-sans text-[#244855]'>Desgined by "Mirza Zain"  ©copyright-2024</h4>
        </div>
    </footer>
  )
}

export default Footer
