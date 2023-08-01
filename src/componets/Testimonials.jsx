import { quotes , people01 , people02 , people03 } from "../assets"
function Testimonials() {
  return (
    <section className='flex flex-col max-md:flex-col justify-between items-center space-y-6 my-32'>
      <div className="flex justify-between items-center max-md:flex-col max-xs:space-y-3 max-md:mt-8 max-md:text-center">
        <h1 className='text-white font-poppins text-[48px] max-ss:text-[30px] font-[600] leading-[81px] w-2/3 max-xs:text-sm'>What people are<br className='sm:block hidden'/>saying about us</h1>
        <p className='text-gray-400 text-[15px] max-xs:text-xs font-[400] font-poppins leading-[32px] tracking-[0.18px] md:p-24 p-0'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex items-center space-x-4 max-lg:space-x-2 max-md:space-y-6 max-md:flex-col">
        <div className="flex flex-col justify-between items-start w-[370px] h-[395px] bg-gray-700 p-8 rounded-lg ">
          <img src={quotes} alt='"' />
          <p className="text-white font-poppins text-[18px] font-[400] leading-[32px] tracking-[.36px]">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
          <div className="flex justify-between items-center">
            <img src={people03} alt="clinet and leader" className="h-[50px] mr-4" />
            <div className="">
              <h4 className="text-white text-[20px]">Kene Gellagher</h4>
              <p className="text-slate-400">Founder & leader</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start w-[370px] h-[395px] bg-gray-800 p-8 rounded-lg ">
          <img src={quotes} alt='"' />
          <p className="text-white font-poppins text-[18px] font-[400] leading-[32px] tracking-[.36px]">Money makes your life easier. If you're lucky to have it, you're lucky.</p>
          <div className="flex justify-between items-center">
            <img src={people02} alt="clinet and leader" className="h-[50px] mr-4" />
            <div>
              <h4 className="text-white text-[20px]">Steve Mark</h4>
              <p className="text-slate-400">Founder & leader</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start w-[370px] h-[395px] bg-gray-700 p-8 rounded-lg ">
          <img src={quotes} alt='"' />
          <p className="text-white font-poppins text-[18px] font-[400] leading-[32px] tracking-[.36px]">It is usually people in the money business, finance, and international trade that are really rich.</p>
          <div className="flex justify-between items-center">
            <img src={people01} alt="clinet and leader" className="h-[50px] mr-4" />
            <div>
              <h4 className="text-white text-[20px]">Herman Jensen</h4>
              <p className="text-slate-400">Founder & leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials