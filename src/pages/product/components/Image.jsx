export default function Image({ image }) {
  return (
    <div className="flex items-center justify-center mt-6">
      <img
        src={image.image}
        alt=""
        className=" object-cover w-[240px]  h-[85px]"
      />
    </div>
  );
}
