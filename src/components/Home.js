import React from 'react';
import Lottie from 'lottie-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import blobright from '../animations/blobbottom.json';
import blobleft from '../animations/blobtop.json';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80
  });

  return (
    <>
      <div className='w-full h-screen bg-zinc-200 relative'>
        <Lottie animationData={blobright} className='absolute bottom-0 right-0 w-1/2 h-1/2' />
        <div className='flex justify-center items-center h-full'>
          <h1 className='absolute top-[35%] text-4xl md:text-6xl font-bold font-["Playwrite_AR"]'>Mirza Zain</h1>
          <p className='absolute top-1/2 font-semibold text-xl font-["Oswald"]'>
            I'm a <span>{text}</span>
            <Cursor cursorColor='gray' cursorStyle='|' />
            <span></span>
          </p>
        </div> 
        <Lottie animationData={blobleft} className='absolute top-0 left-0 w-1/2 h-1/2' />
      </div>
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default Home;