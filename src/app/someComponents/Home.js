import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import blobright from '../animations/blobbottom.json';
import blobleft from '../animations/blobtop.json';
import cat from '../animations/cat.json';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);

  useEffect(() => {
      const mouseMove = e => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }

      window.addEventListener("mousemove", mouseMove);

      return () => {
        window.removeEventListener("mousemove", mouseMove);
      }

  }, [])

  const textEnter = () => {
    setCursorVariant("text");
  }

  const textLeave = () => {
    setCursorVariant("default");
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#E64833",
      height: 100,
      width: 100
    }
  }

  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80
  });


  return (
    <div className='overflow-hidden cursor-none'>
      <div className='w-full h-screen bg-[#90AEAD] relative rounded-md'>
        <Lottie animationData={blobright} className='absolute bottom-0 right-0 w-1/2 h-1/2 ' />
        <div className='flex justify-center items-center h-full'>
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='absolute text-[#FBE9D0] top-[35%] text-4xl md:text-6xl font-extrabold font-["Playwrite_AR"]'>Mirza Zain</h1>
          <motion.div className='bg-[#FBE9D0] h-8 w-8 rounded-full fixed top-0 left-0 z-10 pointer-events-none' variants={variants} animate={cursorVariant} />
          <p className='absolute top-1/2 font-semibold text-xl font-["Oswald"]'>
            I'm a <span className='text-[#E64833]'>{text}</span>
            <Cursor cursorColor='gray' cursorStyle='|' />
            <span></span>
          </p>
          <Lottie animationData={cat} className='absolute top-[35%] md:top-[45%] w-1/2 h-1/2' />
        </div> 
        <Lottie animationData={blobleft} className='absolute top-0 left-0 w-1/2 h-1/2' />
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;