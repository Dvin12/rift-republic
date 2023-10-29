import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Item from "./components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slice";

// WHAT I NEED TO DO HERE?

// I need to fetch data from my strapi server, then map with Item component and pass the data there as a prop.

// HOW TO DO THAT?

// 1. I need to make an async function and then fetch the data.

// 2. Then I need to use useEffect hook so that it would trigger the async function.

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useParams();
  const items = useSelector((state) => state.cart.items);

  const filteredItems = items.filter(
    (item) => item.attributes.category === type
  );
  console.log(items);

  useEffect(() => {
    if (!type) {
      navigate("/products/acoustic");
    }
  }, [type, navigate]);

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=thumbnail",
      { method: "GET" }
    );
    const data = await items.json();
    dispatch(setItems(data.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section className="pt-16">
      <h2 className="py-6 text-2xl font-medium text-center capitalize text-lightGrey">
        {type === "amps-fx" ? "Amps & FX" : type}
      </h2>
      <div className="flex items-center justify-between px-6 ">
        <Filter />
        <Sort />
      </div>
      <div className="grid grid-cols-2 gap-5 px-4 my-5 ">
        {filteredItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
