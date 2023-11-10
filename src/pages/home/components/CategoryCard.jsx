import { Link } from "react-router-dom";

export default function CategoryCard({ categoryCard }) {
  return (
    <Link
      to={`/products/${categoryCard.name}`}
      className={`${categoryCard.name === "accessories" && "col-span-2"}`}
    >
      <article
        className={`relative flex flex-col items-center justify-center h-[300px] xl:h-[400px]`}
      >
        <img
          src={categoryCard.image}
          alt=""
          className="object-cover w-full h-full "
        />
        <div className="absolute flex items-center justify-center w-full h-full text-3xl font-bold capitalize bg-darkBlack bg-opacity-70 text-lightGrey ">
          {categoryCard.name === "ampFX" ? "Amps & FX" : categoryCard.name}
        </div>
      </article>
    </Link>
  );
}
