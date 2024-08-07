import React from 'react';
import Lottie from 'lottie-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import face from '../animations/face.json';
import arrow from '../animations/arrow.json';
import resume from '../files/MirzaZain.pdf'; 

const About = () => {
    const [heading] = useTypewriter({
        words: ["bout Me"],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 60
    })
    return (
        <div className='overflow-hidden'>
        <div className='w-full h-full md:h-screen flex flex-col md:flex-row p-3'>
            <div className='w-full md:w-1/2 bg-[#FBE9D0]'>
                <div className='flex p-3'>
                <div className='bg-yellow-400 w-8 md:w-10 h-8 md:h-10 rounded-full'></div>
                <div className='bg-cyan-400 w-8 md:w-10 h-8 md:h-10 rounded-full'></div>
                </div>
                <h2 className='text-4xl p-4 font-["Playwrite_AR"] font-bold text-[#E64833]'>A{heading}<Cursor /></h2>
                <p className='text-xl font-medium font-sans w-[90%] p-4 text-start md:text-justify text-[244855]'>I'm Mirza Zain, a Full Stack Developer passionate about crafting exceptional web experiences. 
                    Currently pursuing a Bachelor's degree in Software Engineering at Sindh Madressatul Islam University, 
                    <br />I specialize in<span className='font-bold '> "MERN (MongoDB, Express, React, Node)"</span>. 
                    <br />With a keen eye for design and a strong foundation in development, 
                    I'm committed to creating functional and visually appealing websites. 
                    I'm always eager to learn and collaborate on exciting projects.
                    Let's build something amazing together!
                </p>
            </div>
            <div className='w-full md:w-1/2 flex flex-col bg-cyan-400 h-[80%] md:h-full'>
                <Lottie animationData={face} className='w-full h-[60%] md:h-1/2 pt-3 md:pt-2'/>
                <a href={resume} className='px-8 py-3 font-bold text-lg rounded-md bg-yellow-400 mt-4 text-center' download>Resume</a>
                <Lottie animationData={arrow} className='w-1/2 md:w-full h-[15%] md:h-[25%] -rotate-45 pt-0' />
            </div>
        </div>
    </div>
    );
}

export default About;