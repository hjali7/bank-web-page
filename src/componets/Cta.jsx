import React from 'react'

function Cta() {
  return (
    <section className='mt-24 flex justify-between items-center max-sm:flex-col max-sm:space-y-12 bg-gray-800 p-14 mx-12 rounded-2xl'>
      <div className="flex flex-col justify-between">
        <h3 className='text-white text-[45px] max-sm:text-[40px] max-ss:text-[28px] font-poppins font-[600]'>Let’s try our service now!</h3>
        <p className='text-gray-400 max-sm:text-sm '>Everything you need to accept card payments<br className='max-sm:hidden' block/> and grow your business anywhere on the planet.</p>
      </div>
      <button type="button" className='bg-blue-gradient p-3 rounded-xl max-sm:text-[15px] max-sm:w-full'>Get Started</button>
    </section>
  )
}

export default Cta