import Heading from "../Shared/Heading";

// import images
import Img1 from "../../assets/blogs/checking smart watch.jpg";
import Img2 from "../../assets/blogs/laptop_on_table2-transformed.webp";
import Img3 from "../../assets/blogs/man using VR.jpg";

const BlogData = [
  {
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Discover the latest Beats Solo 3 headphones with exclusive features and benefits.",
    published: "Jan 20, 2025 by Williams",
    image: Img1,
  },

  {
    title: "How to choose your desired gadget",
    subtitle:
      "Discover the latest Beats Solo 3 headphones with exclusive features and benefits.",
    published: "Jan 20, 2025 by Taresy",
    image: Img2,
  },

  {
    title: "How to choose the perfect Vr headset",
    subtitle:
      "Discover the latest Beats Solo 3 headphones with exclusive features and benefits.",
    published: "Jan 20, 2025 by Eloghosa",
    image: Img3,
  },
];

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
         gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Blog card */}
          {BlogData.map((data) => (
            <div key={data.index} className="bg-white dark:bg-gray-900">
              {/* Image section */}
              <div className="overflow-hidden rounded-2xl
              mb-2">
                <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
              </div>
              {/* Content section */}
              <div className="space-y-2">
<p className="text-xs text-gray-500"> {data.published} </p>
<p className="font-bold line-clamp-1"> {data.title} </p>
<p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400"> {data.subtitle} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
