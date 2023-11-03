import Image from "./Image";

export default function Images({ item }) {
  const { images } = item.attributes;

  return (
    <div>
      <div className=" bg-lightGrey">
        <img src={""} alt="" className="" />
      </div>
      <div className="flex items-center justify-center gap-4"></div>
    </div>
  );
}
