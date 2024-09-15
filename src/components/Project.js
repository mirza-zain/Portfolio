import React from 'react';
import pro1 from '../images/pro1.png';
import pro2 from '../images/pro2.png';
import pro3 from '../images/pro3.png';
import pro4 from '../images/pro4.png';
import pro5 from '../images/pro5.png';

const Project = () => {
  return (
    <div className='w-full h-full p-2 md:p-5'>
      <h2 className='text-[#E64833] text-3xl md:text-4xl font-bold font-["Playwrite_AR"] text-center md:text-start bg-[#FBE9D0] py-6 rounded-md'>My Project's</h2>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center'>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
          <a href='https://myheroacademiaa.vercel.app/' target='_blank' rel='noreferrer'><img className='w-full hover:opacity-80' src={pro1} alt='project' /></a>
          <div className='w-full h-full p-2'>
            <h4 className='text-[#E64833] bg-[#FBE9D0] rounded-md w-full md:w-1/2 text-2xl font-semibold'>My Hero Academia</h4>
            <p className='text-gray-800 text-lg font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
        <a href='https://freeeresumebuilder.vercel.app/' target='_blank' rel='noreferrer'><img className='w-full hover:opacity-80' src={pro2} alt='project' /></a>
          <div className='w-full h-full p-2'>
            <h4 className='text-[#E64833] bg-[#FBE9D0] rounded-md w-full md:w-1/2 text-2xl font-semibold'>Resume Builder Web</h4>
            <p className='text-gray-800 text-lg font-sans font-medium'>Created using HTML-5, CSS and TypeScript</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
        <a href='https://onepiecefan.vercel.app/' target='_blank' rel='noreferrer'><img className='w-full hover:opacity-80' src={pro3} alt='project' /></a>
          <div className='w-full h-full p-2'>
            <h4 className='text-[#E64833] bg-[#FBE9D0] rounded-md w-full md:w-1/2 text-2xl font-semibold'>One Piece Web</h4>
            <p className='text-gray-800 text-lg font-sans font-medium'>Created using HTML-5 and CSS</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
        <a href='https://modrianart.netlify.app/' target='_blank' rel='noreferrer'><img className='w-full hover:opacity-80' src={pro4} alt='project' /></a>
          <div className='w-full h-full p-2'>
            <h4 className='text-[#E64833] bg-[#FBE9D0] rounded-md w-full md:w-1/2 text-2xl font-semibold'>Mondrian Art</h4>
            <p className='text-gray-800 text-lg font-sans font-medium'>Created using HTML-5 and CSS</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 justify-center bg-[#90AEAD]'>
        <a href='https://cursorchanger.netlify.app/' target='_blank' rel='noreferrer'><img className='w-full hover:opacity-80' src={pro5} alt='project' /></a>
          <div className='w-full h-full p-2'>
            <h4 className='text-[#E64833] bg-[#FBE9D0] rounded-md w-full md:w-1/2 text-2xl font-semibold'>Cursor Change</h4>
            <p className='text-gray-800 text-lg font-sans font-medium'>Created using HTML-5, CSS and JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;