import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function NavMobile() {
  const cart = useSelector((state) => state.cart.cart);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <section className="fixed z-30 flex items-center justify-between w-full px-6 py-4 text-4xl bg-opacity-95 bg-darkBlack text-lightGrey">
        <button onClick={handleClick}>
          {isActive ? <AiOutlineClose /> : <HiOutlineMenu />}
        </button>
        <button className="relative">
          <Link to={`/cart`}>
            <PiShoppingCartSimpleLight />
            <div className="absolute -top-1 right-0 w-[22px] h-[22px] bg-black rounded-full text-sm flex items-center justify-center">
              {cart.length}
            </div>
          </Link>
        </button>
      </section>
      <section
        className={`fixed w-full h-screen px-6 py-6  ${
          isActive ? "translate-x-0" : "-translate-x-full "
        }  bg-darkBlack bg-opacity-95 top-[4.2rem]  transition-all z-30`}
      >
        <Search />
        <ul className="flex flex-col justify-center gap-10 my-10 text-3xl tracking-tight text-lightGrey">
          <li className="border-b-[1px]" onClick={handleClick}>
            <Link to={`products/acoustic`}>Acoustic</Link>
          </li>
          <li className="border-b-[1px] " onClick={handleClick}>
            <Link to={`products/electric`}>Electric</Link>
          </li>
          <li className="border-b-[1px] " onClick={handleClick}>
            <Link to={`products/bass`}>Bass</Link>
          </li>
          <li className="border-b-[1px] " onClick={handleClick}>
            <Link to={`products/amps-fx`}>Amps & FX</Link>
          </li>
          <li className="border-b-[1px] " onClick={handleClick}>
            <Link to={`products/accessories`}>Accessories</Link>
          </li>
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
