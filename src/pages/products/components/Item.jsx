export default function Item({ item }) {
  const { model, price, thumbnail } = item.attributes;

  const {
    data: {
      attributes: { url },
    },
  } = thumbnail;

  console.log(thumbnail);

  console.log(item);
  return (
    <div className="w-full h-[230px]  bg-darkBlack flex flex-col items-center justify-end   relative overflow-hidden text-lightGrey font-medium">
      <img
        src={`http://localhost:1337${url}`}
        alt=""
        className="absolute object-cover h-[220px] w-fit -top-10"
      />
      <div className="relative flex flex-col w-full h-[22%] p-2 text-xs bg-darkGrey">
        <p>{model}</p>

        <span className="absolute right-1 bottom-1 ">${price}</span>
      </div>
    </div>
  );
}
