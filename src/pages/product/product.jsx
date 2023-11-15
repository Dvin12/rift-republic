import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Description from "./components/Description";
import Images from "./components/Images";
import { getSupaItemById } from "../../services/apiItems";
import { Toaster } from "react-hot-toast";

export default function Product() {
  const { productId } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getInfo() {
    const item = await getSupaItemById(productId);

    setItem(item);
    setIsLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <section className="grid items-center justify-center px-6 pt-24 xl:h-screen xl:grid-cols-2 xl:px-44 xl:gap-20 ">
        {isLoading ? (
          <p className=" animate-spin">loading...</p>
        ) : (
          <>
            <Images item={item} />
            <Description item={item} />
          </>
        )}
        <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
      </section>
    </>
  );
}
