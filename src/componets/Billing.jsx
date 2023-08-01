import { bill , google , apple } from "../assets"
function Billing() {
  return (
    <section className='flex justify-between items-center my-28 max-md:flex-col'>
      <div className="w-full max-md:w-2/3 max-xs:w-2/4">
        <img src={bill} alt="billing" />
      </div>
      <div className="flex flex-col justify-between items-start p-28 ml-10 space-y-8 max-md:items-center max-xs:text-center max-xs:w-full max-sm:space-y-4">
        <h2 className="text-white text-[48px] lg:text-[44px] max-sm:text-[20px] max-ss:text-sm  font-poppins font-[600] leading-[77px] tracking-[0.48px] max-xs:text-start">Easily control your <br className="block max-sm:hidden max-xs:hidden"/> billing & invoicing</h2>
        <p className="text-gray-400 font-poppins text-[18px] max-sm:text-[14px] max-ss:text-xs font-[400] leading-[28px] tracking-[0.18px] max-md:text-center max-xs:text-start">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex justify-start items-center space-x-3 max-xs:flex-col max-xs:space-y-2">
          <img src={google} alt="Google Store"/>
          <img src={apple} alt="Apple Store"/>
        </div>
      </div>
    </section>
  )
}

export default Billing