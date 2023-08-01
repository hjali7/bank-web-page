import {airbnb , binance , coinbase , dropbox} from '../assets'
function Clients() {
  return (
    <section className='flex items-center my-20 px-12 justify-between'>
      <img src={airbnb} alt="airbnb" className='w-[200px] max-sm:w-[100px] max-xs:w-[50px]' />
      <img src={binance} alt="binance" className='w-[200px] max-sm:w-[100px] max-xs:w-[50px]' />
      <img src={coinbase} alt="coinbase" className='w-[200px] max-sm:w-[100px] max-xs:w-[50px]' />
      <img src={dropbox} alt="dropbox" className='w-[200px] max-sm:w-[100px] max-xs:w-[50px]' />
    </section>
  )
}

export default Clients