import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";

const placeholder = [
  {
    name: "Gibson Les Paul Classic",
    strings: 6,
    price: 2800,
    quantity: 1,
    image: "../images/placeholder1.png",
  },

  {
    name: "Fender Guitar",
    strings: 6,
    price: 1400,
    quantity: 1,
    image: "../images/placeholder2.png",
  },
];

export default function Cart() {
  return (
    <section className="px-6 pt-24 text-lightGrey">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Cart</h4>
        <span className="px-3 py-1 font-medium bg-darkGrey">2 items</span>
      </div>
      <section>
        <CartItems placeholder={placeholder} />
        <Checkout />
      </section>
    </section>
  );
}
