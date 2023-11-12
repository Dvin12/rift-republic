export default function NewArrivalCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-lightGrey xl:gap-2">
      <div className="flex items-center justify-center bg-lightGrey rounded-3xl ">
        <img
          src={item.image}
          alt=""
          className=" w-[140px] h-[240px] object-contain xl:w-[120px] xl:h-[230px] "
        />
      </div>
      <span>{item.name}</span>
    </div>
  );
}
