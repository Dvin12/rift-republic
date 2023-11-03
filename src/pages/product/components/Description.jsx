import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slice";

export default function Description({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { model, company, price, description } = item.attributes;

  return (
    <article className="flex flex-col items-start justify-center gap-4 my-14 text-lightGrey">
      <span>{company}</span>
      <h3 className="text-2xl font-medium ">{model}</h3>
      <span className="text-3xl font-bold">£ {price}</span>
      <p className="leading-relaxed ">{description}</p>
      <div className="flex items-center justify-between w-full my-2">
        <button
          className=" border-[1px] px-6 py-2 text-lg"
          onClick={() =>
            dispatch(
              addToCart({
                item: { ...item },
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
