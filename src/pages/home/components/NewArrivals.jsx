import NewArrivalCard from "./NewArrivalCard";
import { IoIosArrowForward } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

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
  const splideRef = useRef(null);

  const nextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  return (
    <section className="relative">
      <div>
        <span className="text-xl font-semibold text-lightGrey">
          New arrivals
        </span>
        <div className=" bg-lightGrey w-[240px] h-[2px]"></div>
      </div>
      <Splide
        ref={splideRef}
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
      <button
        className="absolute text-4xl top-1/2 -right-[17%] text-lightGrey"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </section>
  );
}
