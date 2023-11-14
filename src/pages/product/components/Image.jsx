export default function Image({ setSelectedImage, number, image }) {
  function handleSelectedImage(number) {
    setSelectedImage(number);
  }

  return (
    <div
      className="flex items-center justify-center mt-6 bg-[#FFF] cursor-pointer"
      onClick={() => handleSelectedImage(number)}
    >
      <img src={image} alt="" className=" object-cover w-[280px]  h-[85px]" />
    </div>
  );
}
