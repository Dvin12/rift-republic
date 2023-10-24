export default function BrandCard({ brand, num }) {
  return (
    <div className={num === 4 ? "   col-span-2  w-[50%] translate-x-1/2" : ""}>
      <img src={brand.image} alt="" className="" />
    </div>
  );
}
