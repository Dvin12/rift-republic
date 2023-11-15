import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { model, price, thumbnail, company, id } = item;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-full h-[340px] xl:h-[600px]  bg-[#fff]   flex flex-col items-center justify-end   relative overflow-hidden text-lightGrey font-medium rounded-sm shadow-lg ">
        <img
          src={thumbnail}
          alt=""
          className="absolute object-cover h-[210px] w-fit  xl:h-[460px] top-1"
        />
        <div className="relative flex flex-col justify-start items-start w-full h-[34%] xl:p-4 p-3 text-sm bg-darkBlack xl:h-[20%] xl:text-lg  xl:gap-1 ">
          <span className="text-xs xl:text-sm">{company}</span>
          <p>{model}</p>

          <span className="absolute font-bold right-4 bottom-2 xl:text-xl ">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
}
