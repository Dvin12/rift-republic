import { Link } from "react-router-dom";

export default function NewArrivalCard({ item }) {
  const { thumbnail, model, id } = item;

  return (
    <Link to={`/product/${id}`}>
      <div className="flex flex-col items-center justify-center h-[300px] gap-1 text-lightGrey w-full xl:w-[160px] xl:gap-2   ">
        <div className="flex items-center justify-center h-full bg-white rounded-3xl xl:h-full ">
          <img
            src={thumbnail}
            alt=""
            className=" w-[140px] h-[220px] object-contain  "
          />
        </div>
        <span className="text-sm font-semibold text-center text-white ">
          {model}
        </span>
      </div>
    </Link>
  );
}
