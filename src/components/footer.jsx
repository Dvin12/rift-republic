import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 pb-4 bg-opacity-30 xl:flex-row bg-darkGrey xl:py-10 xl:items-start xl:px-44 xl:w-full">
      <section className="flex flex-col items-center justify-center pt-6 text-2xl text-center text-lightGrey xl:order-last xl:pt-0 xl:text-left xl:w-1/3 ">
        <Link to={"/"}>
          <span className="font-medium font-Koulen text-lightYellow">
            RIFT REPUBLIC
          </span>
        </Link>

        <ul className="flex items-center justify-center gap-4 mt-4 ">
          <li>
            <a href="#">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left text-lightGrey xl:w-full">
        <span className="mb-1 text-xl font-medium">Goods</span>
        <div className="w-[15%] h-[1px] bg-lightGrey xl:w-[10%] "></div>
        <ul className="flex flex-col gap-3 my-2 ">
          <Link to={`/products/acoustic`}>
            <li className="duration-200 hover:text-opacity-60 text-lightGrey">
              Acoustic
            </li>
          </Link>
          <Link to={`/products/electric`}>
            <li className="duration-200 hover:text-opacity-60 text-lightGrey">
              Electric
            </li>
          </Link>
          <Link to={`/products/bass`}>
            <li className="duration-200 hover:text-opacity-60 text-lightGrey">
              Bass
            </li>
          </Link>
          <Link to={`/products/amps-fx`}>
            <li className="duration-200 hover:text-opacity-60 text-lightGrey">
              Amps & FX
            </li>
          </Link>
          <Link to={`/products/accessories`}>
            <li className="duration-200 hover:text-opacity-60 text-lightGrey">
              Accessories
            </li>
          </Link>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left text-lightGrey xl:w-full">
        <span className="mb-1 text-xl font-medium">Brands</span>
        <div className="w-[15%] h-[1px] bg-lightGrey xl:w-[10%] "></div>
        <ul className="flex flex-col gap-3 my-2 ">
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="https://www.fender.com/" target="_blank" rel="noreferrer">
              Fender
            </a>
          </li>
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="https://www.gibson.com/" target="_blank" rel="noreferrer">
              Gibson
            </a>
          </li>
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a
              href="https://www.jacksonguitars.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jackson
            </a>
          </li>
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="https://www.ibanez.com/" target="_blank" rel="noreferrer">
              Ibanez
            </a>
          </li>
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="https://usa.yamaha.com/" target="_blank" rel="noreferrer">
              Yamaha
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center xl:text-left xl:items-start text-lightGrey xl:w-full">
        <span className="mb-1 text-xl font-medium">Information</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-3 my-2 ">
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="#">Contacts</a>
          </li>
          <li className="duration-200 hover:text-opacity-60 text-lightGrey">
            <a href="#">Delivery</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
