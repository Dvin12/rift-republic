import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { model, price, thumbnail } = item.attributes;

  const {
    data: {
      attributes: { url },
    },
  } = thumbnail;

  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-full h-[320px]  bg-[#fff]   flex flex-col items-center justify-end   relative overflow-hidden text-lightGrey font-medium rounded-sm shadow-lg ">
        <img
          src={`http://localhost:1337${url}`}
          alt=""
          className="absolute object-cover h-[210px] w-fit top-1"
        />
        <div className="relative flex flex-col justify-start items-start w-full h-[32%] px-3 py-2 text-sm bg-darkBlack  ">
          <p>{model}</p>

          <span className="absolute font-bold right-3 bottom-2 ">${price}</span>
        </div>
      </div>
    </Link>
  );
}
