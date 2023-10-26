import NewArrivalCard from "./NewArrivalCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const placeholder = [
  {
    name: "Gibson Les Paul",
    image: "./images/placeholder1.png",
  },

  {
    name: "Fender",
    image: "./images/placeholder2.png",
  },

  {
    name: "Bass",
    image: "./images/placeholder3.png",
  },

  {
    name: "Bass",
    image: "./images/placeholder3.png",
  },

  {
    name: "Gibson Les Paul",
    image: "./images/placeholder1.png",
  },
];

export default function NewArrivals() {
  return (
    <section className="">
      <div>
        <span className="text-xl font-semibold text-lightGrey">
          New arrivals
        </span>
        <div className=" bg-lightGrey w-[240px] h-[2px]"></div>
      </div>
      <Splide
        className="py-4 "
        options={{
          autoplay: true,
          speed: 600,
          perPage: 1,
          type: "loop",
          fixedWidth: "10rem",
          snap: true,
          width: 290,
          gap: "1rem",
          arrows: false,
          pagination: false,
        }}
      >
        {placeholder.map((item, i) => (
          <SplideSlide key={i}>
            <NewArrivalCard item={item} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
