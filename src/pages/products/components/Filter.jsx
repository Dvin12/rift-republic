import { useEffect, useRef, useState } from "react";
import { BiFilter } from "react-icons/bi";

export default function Filter({ setFilterValue, companies }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();

  function handleFilterMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleFilterSelect(value) {
    setFilterValue(value);
    setIsOpen(false);
  }

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section className="relative text-lightGrey" ref={menuRef}>
      <button
        className="flex items-center justify-center gap-1 text-3xl group"
        onClick={handleFilterMenu}
      >
        <span className="text-lg xl:text-xl">Filter</span>

        <BiFilter
          className={`duration-200 group-hover:text-lightYellow ${
            isOpen && " text-lightYellow"
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-40 flex flex-col w-[140px] gap-3 px-4 py-3 text-lg -left-1 top-8 bg-darkBlack xl:text-xl xl:px-6 xl:py-5 xl:w-[300px]">
          <label className=" border-b-[1px] my-2">Brands</label>
          <li
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleFilterSelect("all")}
          >
            All
          </li>
          {companies.map((company, i) => (
            <li
              className="flex items-center justify-between cursor-pointer"
              key={i}
              onClick={() => handleFilterSelect(company)}
            >
              {company}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
