import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../../redux/slice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { company, model, price, thumbnail } = item;

  return (
    <div className="flex gap-6 border-b-[1px] py-8 relative xl:py-14">
      <button
        className="absolute top-0 right-0 text-2xl"
        onClick={() => dispatch(removeFromCart({ id: item.id }))}
      >
        <AiOutlineClose />
      </button>
      <div className="flex">
        <img
          src={thumbnail}
          alt=""
          className="w-[100px] bg-[#fff] xl:w-[200px]"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <span className="text-sm xl:text-base">{company}</span>
        <h5 className=" xl:text-xl">{model}</h5>

        <span className="relative border-[1px] px-3 py-1 my-3 h-auto flex items-center justify-between w-1/3 xl:w-1/6">
          <button
            className=" bottom-0.5 right-3"
            onClick={() => dispatch(decreaseCount({ id: item.id }))}
          >
            -
          </button>
          <div className="top-0 left-3">{item.count}</div>
          <button
            className=" bottom-0.5 right-3"
            onClick={() => dispatch(increaseCount({ id: item.id }))}
          >
            +
          </button>
        </span>
      </div>
      <span className="absolute text-xl font-medium right-2 bottom-2 xl:bottom-4 xl:text-2xl">
        ${price}
      </span>
    </div>
  );
}
