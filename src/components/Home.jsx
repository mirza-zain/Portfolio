import React from 'react';
import Lottie from "lottie-react";
import blobright from '../animations/blobbottom.json';
import blobleft from '../animations/blobtop.json';

const Home = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 relative top-0'>
      <Lottie animationData={blobright} className='absolute bottom-0 right-0 w-1/2 h-1/2' />
      <div className='flex justify-center items-center '>
        <h1 className=' absolute top-[40%] text-6xl font-bold'>Mirza Zain</h1>
        <p className=' absolute top-1/2 font-semibold text-xl '>Web Developer/Web Designer</p>
      </div> 
      <Lottie animationData={blobleft} className='absolute top-0 left-0 w-1/2 h-1/2' />
    </div>
  );
}

export default Home;