export default function BrandCard({ brand, num }) {
  return (
    <div
      className={`${
        num === 4 ? "   col-span-2  w-[50%] translate-x-1/2" : ""
      } md:items-center md:flex md:justify-center`}
    >
      <img
        src={brand.image}
        alt={brand.name}
        className="xl:w-[24%] md:w-1/2 "
      />
    </div>
  );
}
