import { arrowUp , robot , discount } from "../assets"

const Hero = () => {
  return (
    <section className='flex justify-between items-center w-full mt-24 p-0 '>
      <div className="flex flex-col justify-between items-start">
        <div className="flex justify-center gap-2 items-center bg-slate-900 rounded-xl">
          <img src={discount} alt="%" />
          <p className='text-gray-400'><span className='text-white'>20%</span>DISCOUNT FRO<span className='text-white'>1MONTH</span>ACCOUNT</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-white font-poppins lg:text-[72px] md:text-[60px] max-sm:text-[40px] font-bold leading-[100px] tracking-[.72px]">The Next <br /> <span className="bg-clip-text text-gradient">Generation</span> <br /> Payment Method.</h2>
          <div className="text-gradient p-8 border-2 rounded-full border-blue-400 cursor-pointer max-ss:hidden"><div className="flex">Get <img src={arrowUp} alt="/>" /></div>Started</div>
        </div>
        <div className="w-[480px]">
          <p className="text-gray-400 font-poppins text-[18px] font-[400] leading-[30.6px]">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
        </div>
      </div>
      <div className="ml-6 w-1/3 absolute right-0 top-40 max-sm:top-64">
        <img src={robot} alt="robot!" />
      </div>
    </section>
  )
}

export default Hero