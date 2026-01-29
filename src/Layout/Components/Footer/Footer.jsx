import React from 'react'

function Footer() {
  return (
    <div className='w-full h-64 bg-slate-800 flex flex-wrap md:flex-row flex-col justify-between '>
      <div className=' flex flex-col p-6 justify-evenly'>
        <p className='text-white ml-4'>&copy; 2024 Ghost. All rights reserved.</p>
        <p className='text-white ml-4'>Designed by Usama Khan</p>
        <p className='text-white ml-4'>usamakhan111se@gmail.com</p>
        <a href="https://github.com/UsamaKhan111" className='text-white ml-4'>
        GitHub</a>
      </div>
      <div className=' flex flex-col p-6 justify-evenly'>
        <p className='text-white ml-4'>Ghost COD</p>
        <p className='text-white ml-4'>Privacy Policy</p>
        <p className='text-white ml-4'>Terms of Service</p>
        <p className='text-white ml-4'>Contact Us</p>
      </div>
    </div>
  )
}

export default Footer