import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 pb-4 bg-darkGrey">
      <section className="flex flex-col items-center justify-center pt-6 text-center text-lightGrey">
        <span className="text-3xl font-medium font-Koulen">RIFT REPUBLIC</span>
        <span>Los Santos, San Adreas USA</span>
        <ul className="flex items-center justify-center gap-4 text-3xl mt-7">
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

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
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

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
        <span className="mb-1 text-3xl font-medium">Brands</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>
            <a href="https://www.fender.com/">Fender</a>
          </li>
          <li>
            <a href="https://www.gibson.com/">Gibson</a>
          </li>
          <li>
            <a href="https://www.jacksonguitars.com/">Jackson</a>
          </li>
          <li>
            <a href="https://www.ibanez.com/">Ibanez</a>
          </li>
          <li>
            <a href="https://usa.yamaha.com/">Yamaha</a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
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
