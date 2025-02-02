/* eslint-disable react/prop-types */
import Button from "../Shared/Button"



const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-4 gap-5 place-items-center overflow-hidden">
        {/* card section */}
        {data.map((data) => (
          // eslint-disable-next-line react/jsx-key, react/prop-types
          <div
          data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          className="group" key={data.id}>
            <div className="relative bg-gradient-to-r from-gray-200/50 to-gray-300">
              <img src={data.img} alt="" 
              className="h-[180px] w-[260px] object-contain rounded-md"/>
              {/* Hover button */}
              <div className=" hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2
              -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm
              justify-center items-center duration-200">
                <Button 
                text={"Add to Cart"}
                bgColor={"bg-primary"}
                textColor={"text-white"}/>
              </div>
            </div>
            <div className="leading-7 mt-1">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">{data.price}</h2>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductCard;

