import BrandCard from "./BrandCard";
import Subscribe from "./Subscribe";

const brands = [
  {
    name: "Fender",
    image: "./images/fender.png",
    link: "https://www.fender.com/",
  },

  {
    name: "Gibson",
    image: "./images/gibson.png",
    link: "https://www.gibson.com/",
  },

  {
    name: "Ibanez",
    image: "./images/ibanez.png",
    link: "https://www.ibanez.com/",
  },

  {
    name: "Jackson",
    image: "./images/jackson.png",
    link: "https://www.jacksonguitars.com/",
  },

  {
    name: "Yamaha",
    image: "./images/yamaha.png",
    link: "https://usa.yamaha.com/",
  },
];

export default function Newsletter() {
  return (
    <section>
      <div className="relative ">
        <img src="./images/parker-coffman-GgsG8aNLgjQ-unsplash.jpg" alt="" />
        <div className="absolute top-0 grid items-center w-full h-full grid-cols-2 gap-4 px-20 bg-opacity-50 place-content-center bg-darkBlack">
          {brands.map((brand, i) => (
            <BrandCard brand={brand} key={i} num={i} />
          ))}
        </div>
      </div>
      <Subscribe />
    </section>
  );
}
