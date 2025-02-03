import Category from "./Components/Category";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Category2 from "./Components/Category2";
import Services from "./Components/Services";
import Banner from "./Components/Banner/Banner";
import Headphones from "./assets/Hero/red_headphones-removebg-preview.png";
import Products from "./Components/Products/Products";
import Smartwatch from "../src/assets/brand/GoWristGreen2-removebg-preview2.png";
import Blog from "./Components/Blog/Blog";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Components/Movetotop/ScrollToTop";



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

const [orderPopup, setOrderPopup] = React.useState(false);

const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
};

React.useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
    offset: 100,
  });
  AOS.refresh();
}, []);


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data= {BannerData}/>
    <Products/>
    <Banner data= {BannerData2}/>
    <Blog/>
    <Partners/>
    <Footer/>
    <Popup orderPopup={orderPopup}
    handleOrderPopup={handleOrderPopup}/>
    <ScrollToTop/>
    </div>
  )
}

export default App;
