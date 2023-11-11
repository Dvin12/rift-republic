import { Link } from "react-router-dom";

export default function Checkout({ totalPrice, subTotal }) {
  return (
    <form className=" border-[1px] p-4 my-12 xl:h-fit xl:p-7">
      <section className="text-sm xl:text-lg ">
        <span className="font-semibold tracking-wide ">TOTAL BREAKDOWN</span>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <span>SUBTOTAL</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>DELIVERY</span>
            <span>$20</span>
          </div>
          <div className="w-[50%] translate-x-1/2 bg-lightGrey h-[1px] mt-3"></div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between font-semibold tracking-wide ">
          <span>TOTAL</span>
          <span>${subTotal === 0 ? "0" : totalPrice}</span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full gap-3 mt-2 font-semibold tracking-wide">
        <Link className="w-full" to={`/checkout`}>
          <button className="w-full py-2 bg-lightGrey text-darkGrey">
            Checkout
          </button>
        </Link>
        <Link className="w-full" to={`/`}>
          <button className=" border-[1px] w-full py-2">
            Continue shopping
          </button>
        </Link>
      </section>
    </form>
  );
}
