import { Link } from "react-router-dom";

export default function CategoryCard({ categoryCard }) {
  const { name, image } = categoryCard;

  return (
    <Link
      to={`/products/${name}`}
      className={`${name === "accessories" && "col-span-2"}`}
    >
      <article
        className={`relative flex flex-col items-center justify-center h-[300px] xl:h-[400px]`}
      >
        <img src={image} alt={name} className="object-cover w-full h-full " />
        <div className="absolute flex items-center justify-center w-full h-full text-3xl font-bold text-white capitalize duration-200 bg-darkBlack bg-opacity-70 hover:bg-opacity-90 ">
          {name === "ampFX" ? "Amps & FX" : name}
        </div>
      </article>
    </Link>
  );
}
