import { IoMdCloseCircle} from "react-icons/io"
import Button from "../Shared/Button";


// eslint-disable-next-line react/prop-types
const Popup = ({orderPopup, handleOrderPopup}) => {
  return (
    <>
{
  orderPopup && (
    <div>
      <div className="h-screen w-screen fixed top-0 
      left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900
        dark:text-white duration-200 rounded-md">
  {/* Header section */}
  <div className="flex justify-between items-center">
<h1 className="text-2xl"> Order Now </h1>
<div>
  <IoMdCloseCircle
  onClick={handleOrderPopup}
  className="text-2xl cursor-pointer"/>
</div>
  </div>
{/* Form section */}
<form action="submit">
<div className="py-3">
  <input type="text" 
  placeholder="Name"
  className="form-input"/>

  <input type="Email"
  placeholder="Email Address"
  className="form-input" />

  <input type="text" 
  placeholder="Address"
  className="form-input"/>
</div>
<div className="flex justify-center">
  <Button
  text={"Order Now"}
  bgColor={"bg-primary"}
  textColor={"text-white dark:text-gray-300"}/>
</div>
</form>
        </div>
      </div>
    </div>
  )
}
</>
  );
};

export default Popup
