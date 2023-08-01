import style from './style'
import {NavBar , Hero ,Testimonials ,Cta , Stats , Footer ,Clinets ,CardDeal , Business , Billing } from './componets/index'

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navigation Bar */}
      <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
      </div>
      {/* Hero section */}
      <div className="flex justify-center items-start sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      {/* Main sections */}
      <div className="bg-primary px-6 sm:px-16 flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clinets />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
