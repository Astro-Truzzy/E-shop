import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

//Images
import Img1 from "../../assets/product/Boat_headphone-removebg-preview.png";
import Img2 from "../../assets/product/360_F_660683718_qo0q1V2RuLO56S7cu4VMb078m10U6WW8-removebg-preview.png";
import Img3 from "../../assets/product/Goggles-removebg-preview.png";
import Img4 from "../../assets/product/printed1.png";
import Img5 from "../../assets/product/Boat2-removebg-preview.png";
import Img6 from "../../assets/product/Boat main.png";
import Img7 from "../../assets/product/Goggles2-removebg-preview.png";
import Img8 from "../../assets/product/Printed 2.png";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },

  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "$420",
    aosDelay: "200",
  },

  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "$320",
    aosDelay: "400",
  },

  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "$220",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "$150",
    aosDelay: "700",
  },

  {
    id: 2,
    img: Img6,
    title: "Rocky Mountain",
    price: "$340",
    aosDelay: "800",
  },

  {
    id: 3,
    img: Img7,
    title: "Goggles",
    price: "$250",
    aosDelay: "900",
  },

  {
    ig: 4,
    img: Img8,
    title: "Printed",
    price: "$360",
    aosDelay: "1000",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Best Seller Products" subtitle={"Explore Our Products"} />

        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
