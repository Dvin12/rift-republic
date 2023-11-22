import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slice";

import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Item from "./components/Item";
import { getSupaItems } from "../../services/apiItems";

export default function Products() {
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("highLow");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useParams();

  const allowedTypes = ["acoustic", "electric", "bass", "ampFX", "accessories"];
  const isValidType = allowedTypes.includes(type);

  const items = useSelector((state) => state.cart.items);

  // if the type is not specified navigate to /acoustic
  useEffect(() => {
    if (!type) {
      navigate("/products/acoustic");
    }
  }, [type, navigate]);

  // fetch data
  async function getItems() {
    const items = await getSupaItems();

    dispatch(setItems(items));
  }

  useEffect(() => {
    getItems();
  }, []);

  // Filter by type and company name

  const filteredItems = items.filter((item) => {
    return (
      item.category === type &&
      (filterValue === "all" || item.company === filterValue)
    );
  });

  // Sort by price

  if (sortValue === "highLow") {
    filteredItems.sort((a, b) => b.price - a.price);
  } else if (sortValue === "lowHigh") {
    filteredItems.sort((a, b) => a.price - b.price);
  }

  // Get all the company names into an array that are from the type

  const companies = [...new Set(filteredItems.map((item) => item.company))];

  if (!isValidType) {
    return navigate("/error");
  }

  return (
    <section className="pt-28 xl:pt-36 ">
      <div className="px-6 text-lightGrey 2xl:px-44 xl:px-24 xl:text-lg xl:py-10">
        <Link to={"/"}>Home</Link> /{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <h2 className="py-10 text-2xl font-medium text-center capitalize text-lightGrey xl:py-4 xl:text-4xl">
        {type === "ampFX" ? "Amps & FX" : type}
      </h2>
      <div className="flex items-center justify-between px-6 2xl:px-44 xl:px-24 xl:py-8 ">
        <Filter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          companies={companies}
        />
        <Sort sortValue={sortValue} setSortValue={setSortValue} />
      </div>
      <div className="grid grid-cols-2 gap-6 px-6 my-14 2xl:px-44 xl:px-24 xl:grid-cols-4 xl:gap-8 xl:mb-16 ">
        {filteredItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
