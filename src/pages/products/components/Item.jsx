export default function Item({ item }) {
  console.log(item);
  return (
    <div className="w-full h-[250px]  bg-darkBlack flex flex-col items-center justify-end   relative overflow-hidden text-lightGrey font-medium">
      <img
        src={item.image}
        alt=""
        className="absolute object-cover h-full -top-16"
      />
      <div className="relative flex flex-col w-full h-auto p-2 text-xs bg-darkGrey">
        <p>{item.name}</p>
        <span className="pt-1">{item.strings} String</span>
        <span className="absolute right-1 bottom-1 ">${item.price}</span>
      </div>
    </div>
  );
}
