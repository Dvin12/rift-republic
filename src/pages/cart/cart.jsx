import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.attributes.price;
  }, 0);

  console.log(totalPrice);

  return (
    <section className="px-6 pt-24 text-lightGrey">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Cart</h4>
        <span className="px-3 py-1 font-medium bg-darkGrey">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>
      <section>
        <CartItems cart={cart} />
        <Checkout totalPrice={totalPrice} />
      </section>
    </section>
  );
}
