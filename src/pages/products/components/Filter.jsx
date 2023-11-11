import { useState } from "react";
import { BiFilter } from "react-icons/bi";

export default function Filter({ setFilterValue, companies }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleFilterMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleFilterSelect(value) {
    setFilterValue(value);
    setIsOpen(false);
  }

  return (
    <section className="relative text-lightGrey">
      <button
        className="flex items-center justify-center gap-1 text-3xl"
        onClick={handleFilterMenu}
      >
        <span className="text-lg xl:text-xl">Filter</span>

        <BiFilter />
      </button>
      {isOpen && (
        <ul className="absolute z-40 flex flex-col w-auto gap-2 px-4 py-3 text-lg -left-1 top-8 bg-darkBlack xl:text-xl xl:px-6 xl:py-5">
          <li
            className="cursor-pointer"
            onClick={() => handleFilterSelect("all")}
          >
            All
          </li>
          {companies.map((company, i) => (
            <li
              className="cursor-pointer"
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
