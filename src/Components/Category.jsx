import Image1 from "../assets/category/earphone1-removebg-preview.png";
import Image2 from "../assets/category/Apple-logo-Gold-Duel-Strap-2nd-removebg-preview.png";
import Image3 from "../assets/category/Mac2-removebg-preview.png";
import Button from "./Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{/* First column */}
<div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
  <div>
    <div className="mb-4">
      <p className="mb-[2px] text-gray-400"> Enjoy </p>
      <p className="text-2xl font-semibold mb-[2px]"> With</p>
      <p className="text-2xl xl:text-5xl font-semibold opacity-20
      mb-2">Earphones</p>
      <Button
      text="Browse"
      bgColor={"bg-primary"}
      textColor={"text-white"}/>
    </div>
  </div>
  <img src={Image1} alt="" className="w-[180px] absolute
  bottom-0 ml-[15px] mb-[20px]" />
</div>
{/* Second column */}
<div className="py-10 pl-5 bg-gradient-to-br from-brandyellow to to-brandyellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
  <div>
    <div className="mb-4">
      <p className="mb-[2px] text-white"> Enjoy </p>
      <p className="text-2xl font-semibold mb-[2px]"> With</p>
      <p className="text-4xl xl:text-5xl font-semibold opacity-50
      mb-2 mr-[10px]"> Wrist <br /> watches </p>
      <Button
      text="Browse"
      bgColor={"bg-white"}
      textColor={"text-brandyellow"}/>
    </div>
  </div>
  <img src={Image2} alt="" className="w-[230px] absolute
  -right-4 lg:top-[20px] ml-[80px]"/>
</div>
{/* third column */}
<div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
  <div>
    <div className="mb-4">
      <p className="mb-[2px] text-white"> Enjoy </p>
      <p className="text-2xl font-semibold mb-[2px]"> With</p>
      <p className="text-4xl xl:text-5xl font-bold opacity-40
      mb-2"> Laptops </p>
      <Button
      text="Browse"
      bgColor={"bg-white"}
      textColor={"text-primary"}/>
    </div>
  </div>
  <img src={Image3} alt="" className="w-[250px] absolute top-1/2 lg:top-[] -translate-y-1/2 -right-0"/>
</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
