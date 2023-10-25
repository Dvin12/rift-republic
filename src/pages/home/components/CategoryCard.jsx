import { Link } from "react-router-dom";

export default function CategoryCard({ categoryCard }) {
  return (
    <Link to={`/products/${categoryCard.name}`}>
      <article className="relative flex flex-col items-center justify-center h-[300px] ">
        <img
          src={categoryCard.image}
          alt=""
          className="object-cover w-full h-full "
        />
        <div className="absolute flex items-center justify-center w-full h-full text-3xl font-bold capitalize bg-darkBlack bg-opacity-70 text-lightGrey ">
          {categoryCard.name === "amps-fx" ? "Amps & FX" : categoryCard.name}
        </div>
      </article>
    </Link>
  );
}
