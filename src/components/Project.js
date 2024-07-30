import React from 'react';
import '../styles/pro.css'

const Project = () => {
  return (
    <div className='w-full h-full md:h-screen p-2'>
        <h2 className='text-4xl font-bold font-["Playwrite_AR"] text-start bg-gray-300 px-5 py-4'>My Project's</h2>
    <div className='wrapper bg-gray-300 px-[20%]'>
      <div className='container'>
        <input type='radio' name='slide' id='c1'/>
        <label for='c1' className='card'>
            <div className='row'>
                <div className='icon'>1</div>
                <div className='description'>
                    <h4>My Hero Academia Fan Web</h4>
                    <p>Created with: React and Tailwind CSS</p>
                </div>
            </div>
        </label>
        <input type='radio' name='slide' id='c2'/>
        <label for='c2' className='card'>
            <div className='row'>
                <div className='icon'>2</div>
                <div className='description'>
                    <h4>My Hero Academia Fan Web</h4>
                    <p>Created with: React and Tailwind CSS</p>
                </div>
            </div>
        </label>
        <input type='radio' name='slide' id='c3'/>
        <label for='c3' className='card'>
            <div className='row'>
                <div className='icon'>3</div>
                <div className='description'>
                    <h4>My Hero Academia Fan Web</h4>
                    <p>Created with: React and Tailwind CSS</p>
                </div>
            </div>
        </label>
        <input type='radio' name='slide' id='c4'/>
        <label for='c4' className='card'>
            <div className='row'>
                <div className='icon'>4</div>
                <div className='description'>
                    <h4>My Hero Academia Fan Web</h4>
                    <p>Created with: React and Tailwind CSS</p>
                </div>
            </div>
        </label>
      </div>
    </div>
    </div>
  )
}

export default Project
