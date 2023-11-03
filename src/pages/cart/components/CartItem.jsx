import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/slice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { company, model, price, thumbnail } = item.attributes;

  const {
    data: {
      attributes: { url },
    },
  } = thumbnail;

  return (
    <div className="flex gap-6 border-b-[1px] py-8 relative ">
      <button
        className="absolute top-0 right-0 text-2xl"
        onClick={() => dispatch(removeFromCart({ id: item.id }))}
      >
        <AiOutlineClose />
      </button>
      <div className="flex">
        <img
          src={`http://localhost:1337${url}`}
          alt=""
          className="w-[100px] bg-[#fff]"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <span className="text-sm">{company}</span>
        <h5>{model}</h5>

        <span className="relative border-[1px] px-7 py-3 my-3 h-auto flex items-center justify-center">
          <div className="absolute top-0 left-3">1</div>
          <div className="absolute bottom-0.5 right-3">+</div>
        </span>
      </div>
      <span className="absolute text-xl font-medium right-2 bottom-2">
        ${price}
      </span>
    </div>
  );
}
