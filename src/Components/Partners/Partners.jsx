import brand1 from "../../assets/brand/large_candycounty.png"
import brand2 from "../../assets/brand/2000px-verizon_logo-svg.png"
import brand3 from "../../assets/brand/large_fluxery.png"
import brand4 from "../../assets/brand/large_primarycontract.png"
import brand5 from "../../assets/brand/large_tagvia1.png"



const Partners = () => {
  return (
    <div
    data-aos="zoom-out"
    className="py-8 mt-24 hidden md:block bg-gray-200
    dark:bg-white/10">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center
        opacity-50">
            <img src={brand1} alt="brand" className="w-[80px] dark:invert"/>
            <img src={brand2} alt="brand" className="w-[80px] dark:invert" />
            <img src={brand3} alt="brand" className="w-[80px] dark:invert" />
            <img src={brand4} alt="brand" className="w-[80px] dark:invert" />
            <img src={brand5} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  )
}

export default Partners
