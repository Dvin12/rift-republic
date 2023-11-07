export default function Image({ image, number, setSelectedImage }) {
  const {
    attributes: { url },
  } = image;

  function handleSelectedImage(number) {
    setSelectedImage(number);
  }

  return (
    <div
      className="flex items-center justify-center mt-6 bg-[#FFF]"
      onClick={() => handleSelectedImage(number)}
    >
      <img
        src={`http://localhost:1337${url}`}
        alt=""
        className=" object-cover w-[280px]  h-[85px]"
      />
    </div>
  );
}
