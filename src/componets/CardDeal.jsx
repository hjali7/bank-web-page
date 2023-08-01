import {card} from '../assets'

function CardDeal() {
  return (
    <section className='my-24 flex justify-between items-center max-md:flex-col max-md:space-y-6 max-sm:space-y-8'>
      <div className="flex flex-col space-y-6 items-start max-md:items-center max-md:text-center">
        <h2 className='text-white font-poppins font-[600] leading-[77px] tracking-[0.48px] text-[48px] max-sm:text-[33px]'>Find a better card deal <br className='hidden sm:block'/> in fex essy steps.</h2>
        <p className='text-gray-400 font-[400]  leading-[31px] tracking-[0.18px]'>Arcu tortor, purus in mattis at sed integer faucibus.Aliquet<br/> quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button type="button" className='text-black rounded-xl bg-blue-gradient w-[110px] h-[50px]'>Get Started</button>
      </div>
      <div className="flex justify-center items-center  flex-1">
        <img src={card} alt="card deal" className='w-[500px] h-[400px] object-contain cursor-pointer' />
      </div>
    </section>
  )
}

export default CardDeal