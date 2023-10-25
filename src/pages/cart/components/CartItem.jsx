import { AiOutlineClose } from "react-icons/ai";

export default function CartItem({ item }) {
  return (
    <div className="flex gap-6 border-b-[1px] py-8 relative ">
      <button className="absolute top-0 right-0 text-2xl">
        <AiOutlineClose />
      </button>
      <div className="flex">
        <img src={item.image} alt="" className="w-[120px]" />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <h5>{item.name}</h5>
        <span>{item.strings} String</span>
        <span className="relative border-[1px] px-7 py-3 my-3 h-auto flex items-center justify-center">
          <div className="absolute top-0 left-3">1</div>
          <div className="absolute bottom-0.5 right-3">+</div>
        </span>
      </div>
      <span className="absolute text-xl font-medium right-2 bottom-2">
        ${item.price}
      </span>
    </div>
  );
}
