import { useState } from "react";
import { HiOutlineMenu, HiUserCircle } from "react-icons/hi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Search from "./Search";

export default function NavMobile() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <section className="z-30 flex items-center justify-between w-full px-6 py-4 text-4xl bg-darkGrey bg-opacity-90 text-lightGrey">
        <button onClick={handleClick}>
          {isActive ? <AiOutlineClose /> : <HiOutlineMenu />}
        </button>
        <div className="relative">
          <PiShoppingCartSimpleLight />
          <div className="absolute -top-1 right-0 w-[22px] h-[22px] bg-black rounded-full text-sm flex items-center justify-center">
            0
          </div>
        </div>
      </section>
      <section
        className={`fixed w-full h-screen px-6 py-6  ${
          isActive ? "translate-x-0" : "-translate-x-full "
        }  bg-darkGrey bg-opacity-90  transition-all z-30`}
      >
        <Search />
        <ul className="flex flex-col justify-center gap-10 my-10 text-3xl tracking-tight text-lightGrey">
          <li className="flex items-center gap-1 text-6xl ">
            <HiUserCircle />
            <span className="text-3xl">John Doe</span>
          </li>
          <li className="border-b-[1px]">Acoustic</li>
          <li className="border-b-[1px] ">Electric</li>
          <li className="border-b-[1px] ">Bass</li>
          <li className="border-b-[1px] ">Amps & FX</li>
          <li className="border-b-[1px] ">Accessories</li>
        </ul>
        <section className="flex items-center justify-center gap-4 text-4xl pt-14 text-lightGrey">
          <button>
            <a href="#">
              <FaXTwitter />
            </a>
          </button>
          <button>
            <a href="#">
              <FaInstagram />
            </a>
          </button>
          <button>
            <a href="#">
              <FaWhatsapp />
            </a>
          </button>
        </section>
      </section>
    </>
  );
}
