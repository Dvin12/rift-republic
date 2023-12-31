import NewArrivalCard from "./NewArrivalCard";
import { IoIosArrowForward } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../../redux/slice";
import { getSupaItems } from "../../../services/apiItems";

export default function NewArrivals() {
  const splideRef = useRef(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const filteredByNewArrivals = items.filter((item) => {
    return item.newArrival === true;
  });

  console.log(filteredByNewArrivals);

  async function getItems() {
    const items = await getSupaItems();

    dispatch(setItems(items));
  }

  useEffect(() => {
    getItems();
  }, []);

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
        className="py-4 xl:hidden "
        options={{
          autoplay: true,
          speed: 600,
          perPage: 1,
          type: "loop",
          fixedWidth: "10rem",
          snap: true,
          breakpoints: {
            1279: {
              width: 900,
            },
            1095: {
              width: 780,
            },
            965: {
              width: 680,
            },
            840: {
              width: 480,
            },
            605: {
              width: 380,
            },
            485: {
              width: 300,
            },
            390: {
              width: 270,
            },
            320: {
              width: 240,
            },
          },
          gap: "1rem",
          arrows: false,
          pagination: false,
        }}
      >
        {filteredByNewArrivals.map((item) => (
          <SplideSlide key={item.id}>
            <NewArrivalCard item={item} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="hidden my-5 xl:flex">
        {filteredByNewArrivals.map((item) => (
          <NewArrivalCard item={item} key={item.id} />
        ))}
      </div>
      <button
        className="absolute xl:hidden text-4xl top-1/2 -right-[17%] text-lightGrey"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </section>
  );
}
