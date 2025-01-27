import Category from "./Components/Category";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Category2 from "./Components/Category2";
import Services from "./Components/Services";
import Banner from "./Components/Banner/Banner";
import Headphones from "./assets/Hero/red_headphones-removebg-preview.png";
import Products from "./Components/Products/Products";
import Smartwatch from "../src/assets/brand/GoWristGreen2-removebg-preview.png";


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date:"10 Jan to 28 jan",
image: Headphones,
title2: "Air Solo Bass",
title3: "Winter Sale",
title4: "Don’t miss out on our exclusive, time-limited discount! Shop now and save big before the offer ends. Act fast today!",
bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date:"14 Jan to 28 jan",
image: Smartwatch,
title2: "Smart Solo",
title3: "Winter Sale",
title4: "Don’t miss out on our exclusive, time-limited discount! Shop now and save big before the offer ends. Act fast today!",
bgColor: "#2dcc6f",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data= {BannerData}/>
    <Products/>
    <Banner data= {BannerData2}/>
    </div>
  )
}

export default App
