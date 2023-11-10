import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 pb-4 xl:flex-row bg-darkGrey xl:py-10 xl:items-start xl:px-36 xl:w-full">
      <section className="flex flex-col items-center justify-center pt-6 text-center text-lightGrey xl:order-last xl:pt-0 xl:text-left xl:w-1/3 ">
        <Link to={"/"}>
          <span className="text-3xl font-medium font-Koulen">
            RIFT REPUBLIC
          </span>
        </Link>

        <ul className="flex items-center justify-center gap-4 mt-4 text-3xl">
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
        <span className="mb-1 text-3xl font-medium">Goods</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <Link to={`/products/acoustic`}>
            <li>Acoustic</li>
          </Link>
          <Link to={`/products/electric`}>
            <li>Electric</li>
          </Link>
          <Link to={`/products/bass`}>
            <li>Bass</li>
          </Link>
          <Link to={`/products/amps-fx`}>
            <li>Amps & FX</li>
          </Link>
          <Link to={`/products/accessories`}>
            <li>Accessories</li>
          </Link>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left text-lightGrey xl:w-full">
        <span className="mb-1 text-3xl font-medium">Brands</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>
            <a href="https://www.fender.com/" target="_blank" rel="noreferrer">
              Fender
            </a>
          </li>
          <li>
            <a href="https://www.gibson.com/" target="_blank" rel="noreferrer">
              Gibson
            </a>
          </li>
          <li>
            <a
              href="https://www.jacksonguitars.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jackson
            </a>
          </li>
          <li>
            <a href="https://www.ibanez.com/" target="_blank" rel="noreferrer">
              Ibanez
            </a>
          </li>
          <li>
            <a href="https://usa.yamaha.com/" target="_blank" rel="noreferrer">
              Yamaha
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center xl:text-left xl:items-start text-lightGrey xl:w-full">
        <span className="mb-1 text-3xl font-medium">Information</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
