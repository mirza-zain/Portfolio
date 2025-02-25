import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Thankyou = () => {
    const [word] = useTypewriter({
        words: ['hankyou For Contacting Me 😇'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 90
    })
  return (
    <div className='w-full h-screen overflow-hidden overflow-x-hidden bg-[#FBE9D0]'>
      <h1 className='text-[#E64833] text-2xl px-4 py-[80%] md:px-0 md:py-0 md:text-6xl  md:absolute md:left-[20%] md:top-[50%] font-extrabold font-["Oswald"] '>T{word}<Cursor /></h1>
    </div>
  )
}

export default Thankyou
