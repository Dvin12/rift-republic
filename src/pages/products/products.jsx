import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slice";

import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Item from "./components/Item";

export default function Products() {
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("highLow");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useParams();

  const items = useSelector((state) => state.cart.items);

  // if the type is not specified navigate to /acoustic
  useEffect(() => {
    if (!type) {
      navigate("/products/acoustic");
    }
  }, [type, navigate]);

  // fetch data
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

  // Filter by type and company name

  const filteredItems = items.filter((item) => {
    return (
      item.attributes.category === type &&
      (filterValue === "all" || item.attributes.company === filterValue)
    );
  });

  // Sort by price

  if (sortValue === "highLow") {
    filteredItems.sort((a, b) => b.attributes.price - a.attributes.price);
  } else if (sortValue === "lowHigh") {
    filteredItems.sort((a, b) => a.attributes.price - b.attributes.price);
  }

  // Get all the company names into an array that are from the type

  const companies = [
    ...new Set(filteredItems.map((item) => item.attributes.company)),
  ];

  return (
    <section className="pt-20">
      <div className="px-6 text-lightGrey">
        <Link to={"/"}>Home</Link> /{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <h2 className="py-6 text-2xl font-medium text-center capitalize text-lightGrey">
        {type === "ampFX" ? "Amps & FX" : type}
      </h2>
      <div className="flex items-center justify-between px-6 ">
        <Filter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          companies={companies}
        />
        <Sort sortValue={sortValue} setSortValue={setSortValue} />
      </div>
      <div className="grid grid-cols-2 gap-5 px-6 my-10 ">
        {filteredItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
