import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slice";

export default function Description({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { model, company, price, description } = item;

  return (
    <article className="flex flex-col items-start justify-center gap-4 my-14 text-lightGrey">
      <span>{company}</span>
      <h3 className="text-2xl font-medium ">{model}</h3>
      <span className="text-3xl font-bold xl:text-4xl">$ {price}</span>
      <p className="leading-relaxed xl:text-lg xl:tracking-wide ">
        {description}
      </p>
      <div className="flex items-center justify-between w-full my-2 xl:justify-start xl:gap-10 xl:my-4 ">
        <button
          className=" border-[1px] px-6 py-2 text-lg"
          onClick={() =>
            dispatch(
              addToCart({
                item: { ...item, count: 1 },
              })
            )
          }
        >
          Add to cart
        </button>
        <button className="text-sm " onClick={() => navigate(-1)}>
          &larr; Go back
        </button>
      </div>
    </article>
  );
}
