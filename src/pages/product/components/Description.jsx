export default function Description({ item }) {
  console.log(item);
  return (
    <article className="flex flex-col items-start justify-center gap-4 my-10 text-lightGrey">
      <h3 className="text-lg font-medium ">{item.name}</h3>
      <span className="text-3xl font-bold">£ {item.price}</span>
      <p className="leading-relaxed ">{item.description}</p>
      <div className="flex items-center justify-between w-full my-2">
        <button className=" border-[1px] px-6 py-2 text-lg">Add to cart</button>
        <button className="text-sm ">&larr; Go back</button>
      </div>
    </article>
  );
}
