import { useState } from "react";
import Image from "./Image";

export default function Images({ item }) {
  const { images } = item.attributes;
  const [selectedImage, setSelectedImage] = useState(0);
  const url = images.data[selectedImage].attributes.url;

  return (
    <div>
      <div className=" bg-[#FFF]">
        <img
          src={`http://localhost:1337${url}`}
          alt=""
          className="w-[400px] h-[300px] object-contain xl:w-full "
        />
      </div>
      <div className="flex items-center justify-between gap-4 overflow-hidden ">
        {images.data.map((image, i) => (
          <Image
            key={i}
            image={image}
            number={i}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </div>
  );
}
