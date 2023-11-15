import BrandCard from "./BrandCard";
import Subscribe from "./Subscribe";

const brands = [
  {
    name: "Fender",
    image: "./images/brands/fender.png",
    link: "https://www.fender.com/",
  },

  {
    name: "Gibson",
    image: "./images/brands/gibson.png",
    link: "https://www.gibson.com/",
  },

  {
    name: "Ibanez",
    image: "./images/brands/ibanez.png",
    link: "https://www.ibanez.com/",
  },

  {
    name: "Jackson",
    image: "./images/brands/jackson.png",
    link: "https://www.jacksonguitars.com/",
  },

  {
    name: "Yamaha",
    image: "./images/brands/yamaha.png",
    link: "https://usa.yamaha.com/",
  },
];

export default function Newsletter() {
  return (
    <section>
      <article className="relative ">
        <img
          src="./images/brands/background.jpg"
          className=" xl:h-[420px] xl:w-full object-cover"
          alt="guitar"
        />
        <div className="absolute top-0 grid items-center w-full h-full grid-cols-2 gap-4 px-20 bg-opacity-75 place-content-center bg-darkBlack ">
          {brands.map((brand, i) => (
            <BrandCard brand={brand} key={i} num={i} />
          ))}
        </div>
      </article>
      <Subscribe />
    </section>
  );
}
