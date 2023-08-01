import { logo , twitter ,instagram ,linkedin ,facebook} from "../assets"
function Footer() {
  return (
    <section className='mt-32 flex flex-col space-y-16 px-14'>
      <div className="flex justify-between items-start max-ss:flex-col-reverse max-ss:space-y-4">
        <div className="flex flex-col space-y-6 max-ss:flex-row max-ss:space-x-4">
          <img src={logo} alt="hoobank" className="w-[200px]" />
          <p className="text-gray-400 hover:text-gray-600 max-xs:text-xs">A new way to make the payments<br/> easy,realiabic and source</p>
        </div>
        <div className="flex flex-col justify-between items-start">
          <h4 className="text-white text-[15px] mb-3">Usefull Links</h4>
          <div className="flex flex-col max-ss:flex-row max-ss:space-x-4 max-xs:text-xs">
            <a href="#content" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">content</a>
            <a href="HIs" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">how use it</a>
            <a href="create" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Create</a>
            <a href="explore" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Explore</a>
            <a href="TS" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Terms&Services</a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <h4 className="text-white text-[15px] mb-3">Community</h4>
          <div className="flex flex-col max-ss:flex-row max-ss:space-x-4 max-xs:text-xs">
            <a href="#hc" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Help Center</a>
            <a href="partners" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Partners</a>
            <a href="suggestion" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Suggestions</a>
            <a href="blog" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Blog</a>
            <a href="news" className="text-gray-300 hover:text-gray-500 hover:translate-x-1 ease-linear">Newsletters</a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <h4 className="text-white text-[15px] mb-3">Community</h4>
          <div className="flex flex-col max-ss:flex-row max-ss:space-x-4 max-xs:text-xs">
            <a href="#hc" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Help Center</a>
            <a href="partners" className="text-gray-300 hover:text-gray-500 hover:translate-x-1">Partners</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-full bg-gray-400 h-0.5"/>
        <div className="flex justify-between items-start max-sm:items-center  my-4 max-sm:flex-col-reverse">
            <p className="text-gray-300 max-sm:mt-3 max-xs:text-sm">!Copyright 2023 Hoobank,All Rights Reserved.</p>
          <div className="flex md:space-x-6 max-sm:justify-around max-sm:w-full max-sm:mb-4">
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer