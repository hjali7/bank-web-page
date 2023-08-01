import React from 'react'

function Stats() {
  return (
    <section className='flex items-center my-32 justify-evenly'>
      <div className='flex-1 flex items-center justify-around  text-white font-poppins font-[600] max-md:font-[400] text-[40px] max-md:text-[37px] leading-[54px]'>
        <div className='flex max-sm:text-[15px]'>3800+ <span className='text-gradient font-[400] text-[20px] max-ss:text-[14px]'>USERACTIVE</span></div>
      <div className='bg-gray-400 w-.5 h-6 border max-xs:h-4 max-xs:mx-0.5'/>
      </div>
      <div className='flex-1 flex max-sm:text-[15px] text-white font-poppins text-[40px] max-md:text-[37px]  leading-[54px] font-[600] max-md:font-[400]'>
        230+<span className='text-gradient font-[400] text-[20px] max-ss:text-[14px]'>TRUSTEDBYCOMPANY</span>
      </div>
      <div className='flex-1 flex items-center justify-evenly text-white font-poppins leading-[54px] text-[40px] max-md:text-[37px] font-[600] max-md:font-[400]'>
      <div className='bg-gray-400 w-.5 h-6 border max-xs:h-4 max-xs:mx-0.5'/>
        <div className="flex max-sm:text-[15px]">$230+ <span className='text-gradient font-[400] text-[20px] max-ss:text-[14px]'>TRANSACTION</span></div>
      </div>
    </section>
  )
}

export default Stats