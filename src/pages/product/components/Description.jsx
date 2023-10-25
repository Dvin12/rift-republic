import { useNavigate } from "react-router-dom";

export default function Description({ item }) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <article className="flex flex-col items-start justify-center gap-4 my-14 text-lightGrey">
      <h3 className="text-lg font-medium ">{item.name}</h3>
      <span className="text-3xl font-bold">£ {item.price}</span>
      <p className="leading-relaxed ">{item.description}</p>
      <div className="flex items-center justify-between w-full my-2">
        <button className=" border-[1px] px-6 py-2 text-lg">Add to cart</button>
        <button className="text-sm " onClick={() => navigate(-1)}>
          &larr; Go back
        </button>
      </div>
    </article>
  );
}
