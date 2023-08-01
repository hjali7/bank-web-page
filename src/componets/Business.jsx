import { star , shield , send } from '../assets/index'
function Business() {
  return (
    <section className='flex w-full items-center justify-between my-22 max-md:flex-col'>
      <div className="flex flex-col justify-between items-start max-md:items-center max-ss:text-center max-md:mb-4 max-md:space-y-4">
        <h1 className='text-white font-poppins font-[600] leading-[77px] tracking-[.5px] text-[48px] max-ss:text-[38px]'>You do the business,<br/> we'll handle the money.</h1>
        <p className='text-gray-400  font-[400] leading-[30.6px] tracking-[0.18px] text-[18px] max-w-[570px]'>With the right credit card, you can improve your financial life by <br/> building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button type='button' className='text-black bg-blue-gradient p-2 rounded-xl mt-6 text-[18px] font-[500]leading-[27px]'>Get Started</button>
      </div>
      <div className="flex justify-start items-start flex-col space-y-4">
        <div className='flex justify-between items-start space-x-2 p-3'>
          <img src={star} alt="Start" className='bg-gray-800 rounded-full p-2' />
          <div className="flex flex-col items-start justify-start">
            <h3 className='text-white font-poppins font-[600]leading-[24px] tracking-[.18px]'>Reward</h3>
            <p className='text-gray-400 font-poppins text-[16px] font-[400] max-w-[366px]'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
        </div>
        <div className='flex justify-between items-start space-x-2 bg-slate-800 rounded-lg p-3'>
          <img src={shield} alt="Start" className='bg-gray-600 rounded-full p-2' />
          <div className="flex flex-col items-start justify-start">
            <h3 className='text-white font-poppins font-[600]leading-[24px] tracking-[.18px]'>100% Secured</h3>
            <p className='text-gray-400 font-poppins text-[16px] font-[400] max-w-[366px]'>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>
        <div className='flex justify-between items-start space-x-2 p-3'>
          <img src={send} alt="Start" className='bg-gray-800 rounded-full p-2' />
          <div className="flex flex-col items-start justify-start">
            <h3 className='text-white font-poppins font-[600]leading-[24px] tracking-[.18px]'>Balance Transfer</h3>
            <p className='text-gray-400 font-poppins text-[16px] font-[400] max-w-[366px]'>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Business