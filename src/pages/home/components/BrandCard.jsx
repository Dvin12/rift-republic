export default function BrandCard({ brand, num }) {
  return (
    <div
      className={`${
        num === 4 ? "   col-span-2  w-[50%] translate-x-1/2" : ""
      } xl:items-center xl:flex xl:justify-center`}
    >
      <img src={brand.image} alt={brand.name} className="xl:w-[24%] " />
    </div>
  );
}
