import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-darkGrey">
      <section className="flex flex-col items-center justify-center pt-6 text-center text-lightGrey">
        <span className="text-3xl font-medium font-Koulen">RIFT REPUBLIC</span>
        <span>Los Santos, San Adreas USA</span>
        <ul className="flex items-center justify-center gap-4 text-3xl mt-7">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
        <span className="mb-1 text-3xl font-medium">Goods</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>Acoustic</li>
          <li>Electric</li>
          <li>Bass</li>
          <li>Amps & FX</li>
          <li>Accessories</li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
        <span className="mb-1 text-3xl font-medium">Brands</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>Fender</li>
          <li>Gibson</li>
          <li>Jackson</li>
          <li>Ibanez</li>
          <li>Yamaha</li>
        </ul>
      </section>

      <section className="flex flex-col items-center justify-center text-center text-lightGrey">
        <span className="mb-1 text-3xl font-medium">Information</span>
        <div className="w-[15%] h-[1px] bg-lightGrey "></div>
        <ul className="flex flex-col gap-2 my-2 text-lg">
          <li>Contacts</li>
          <li>Delivery</li>
        </ul>
      </section>
    </footer>
  );
}
