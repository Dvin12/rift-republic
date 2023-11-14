import { useState } from "react";
import Image from "./Image";

export default function Images({ item }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = Object.keys(item)
    .filter((key) => key.startsWith("image") && item[key] !== null)
    .map((key) => item[key]);

  return (
    <div>
      <div className=" bg-[#FFF]">
        <img
          src={images[selectedImage]}
          alt=""
          className="w-[400px] h-[300px] object-contain xl:w-full "
        />
      </div>
      <div className="flex items-center justify-between gap-4 overflow-hidden ">
        {images.map((image, i) => (
          <Image
            setSelectedImage={setSelectedImage}
            key={i}
            number={i}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
