import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Item from "./components/Item";

const placeholder = [
  {
    id: 1,
    name: "Gibson Les Paul Classic",
    strings: 6,
    price: 2800,
    image: "../images/placeholder1.png",
  },

  {
    id: 2,
    name: "Fender Telecaster",
    strings: 6,
    price: 1400,
    image: "../images/placeholder2.png",
  },

  {
    id: 3,
    name: "Fender Telecaster",
    strings: 5,
    price: 800,
    image: "../images/placeholder3.png",
  },

  {
    id: 4,
    name: "Fender Telecaster",
    strings: 5,
    price: 800,
    image: "../images/placeholder3.png",
  },
];

export default function Products() {
  const navigate = useNavigate();
  const { type } = useParams();

  useEffect(() => {
    if (!type) {
      navigate("/products/acoustic");
    }
  }, [type, navigate]);

  return (
    <section className="pt-16">
      <h2 className="py-6 text-2xl font-medium text-center capitalize text-lightGrey">
        {type === "amps-fx" ? "Amps & FX" : type}
      </h2>
      <div className="flex items-center justify-between px-6 ">
        <Filter />
        <Sort />
      </div>
      <div className="grid grid-cols-2 gap-5 px-4 my-8 ">
        {placeholder.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
