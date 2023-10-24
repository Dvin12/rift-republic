import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-3 py-3 text-lg rounded-sm"
        placeholder="Search for a product"
      />
      <button className="absolute text-2xl right-3 top-1/4">
        <HiOutlineMagnifyingGlass />
      </button>
    </div>
  );
}
