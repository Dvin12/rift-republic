import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-3 text-lg rounded-sm"
        placeholder="Search for a product"
      />
      <button className="absolute text-3xl right-4 top-1/4">
        <HiOutlineMagnifyingGlass />
      </button>
    </div>
  );
}
