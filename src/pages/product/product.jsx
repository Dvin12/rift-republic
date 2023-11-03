import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Description from "./components/Description";
import Images from "./components/Images";

export default function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getInfo() {
    const item = await fetch(
      `http://localhost:1337/api/items/${productId}?populate=images`,
      {
        method: "GET",
      }
    );
    const data = await item.json();
    setItem(data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <section className="px-6 pt-24">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <Images item={item} />
            <Description item={item} />
          </>
        )}
      </section>
    </>
  );
}
