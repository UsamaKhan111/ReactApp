import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/29886912/pexels-photo-29886912.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/contact" className='text-orange-300 text-4xl font-bold mt-2'>Contact</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/922046/pexels-photo-922046.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/" className='text-orange-300 text-4xl font-bold mt-2'>Home</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/11175749/pexels-photo-11175749.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <p className='text-orange-300 text-4xl font-bold mt-2'>300</p>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/19863218/pexels-photo-19863218.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/contact" className='text-orange-300 text-4xl font-bold mt-2'>Contact</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/29886912/pexels-photo-29886912.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/" className='text-orange-300 text-4xl font-bold mt-2'>Home</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/922046/pexels-photo-922046.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/contact" className='text-orange-300 text-4xl font-bold mt-2'>Contact</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/11175749/pexels-photo-11175749.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/" className='text-orange-300 text-4xl font-bold mt-2'>Home</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
        <div className='w-60 h-80 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <img src="https://images.pexels.com/photos/19863218/pexels-photo-19863218.jpeg" alt="Sunset" className='w-44 h-44 rounded-full  border-2' />
          <Link to="/contact" className='text-orange-300 text-4xl font-bold mt-2'>Contact</Link>
          <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit</p>
        </div>
      </div>
    </>
  )
}

export default About