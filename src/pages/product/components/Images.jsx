import Image from "./Image";

export default function Images({ item, num }) {
  return (
    <div>
      <div className=" bg-lightGrey">
        <img src={item.images[0].image} alt="" className="" />
      </div>
      <div className="flex items-center justify-center gap-4">
        {item.images.map((image, i) => (
          <Image image={image} key={i} />
        ))}
      </div>
    </div>
  );
}
