import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavDesktop() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <section className="absolute items-center justify-between hidden w-full px-20 py-12 text-xl xl:flex text-[#FFF] ">
      <ul className="flex gap-10 ">
        <li className="flex flex-col items-center justify-center transition group">
          <Link to={"/products/acoustic"}>Acoustic</Link>
          <span className="w-0 group-hover:w-[60%] transition-all duration-300 bg-[#FFF] h-[1.5px] block "></span>
        </li>
        <li className="flex flex-col items-center justify-center transition group">
          <Link to={"/products/electric"}>Electric</Link>
          <span className="w-0 group-hover:w-[60%] transition-all duration-300 bg-[#FFF] h-[1.5px] block "></span>
        </li>
        <li className="flex flex-col items-center justify-center transition group">
          <Link to={"/products/bass"}>Bass</Link>
          <span className="w-0 group-hover:w-[60%] transition-all duration-300 bg-[#FFF] h-[1.5px] block "></span>
        </li>
        <li className="flex flex-col items-center justify-center transition group">
          <Link to={"/products/ampFX"}>Amps & FX</Link>
          <span className="w-0 group-hover:w-[60%] transition-all duration-300 bg-[#FFF] h-[1.5px] block "></span>
        </li>
        <li className="flex flex-col items-center justify-center transition group">
          <Link to={"/products/accessories"}>Accessories</Link>
          <span className="w-0 group-hover:w-[60%] transition-all duration-300 bg-[#FFF] h-[1.5px] block "></span>
        </li>
      </ul>
      <div className="relative">
        <PiShoppingCartSimpleLight className="text-4xl" />
        <span className="absolute flex items-center justify-center w-6 h-6 text-sm rounded-full -right-1 -top-2 bg-darkBlack">
          {cart.length}
        </span>
      </div>
    </section>
  );
}
