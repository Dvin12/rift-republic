import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const subTotal = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  const totalPrice = subTotal + 20;

  return (
    <section className="px-6 pt-24 text-lightGrey xl:px-36 ">
      <div className="flex items-center justify-between xl:py-10 xl:justify-start xl:gap-10">
        <h4 className="text-lg font-medium xl:text-xl">Cart</h4>
        <span className="px-3 py-1 font-medium bg-darkGrey">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>
      <section className="gap-20 xl:grid xl:grid-cols-2 xl:h-full">
        {cart.length === 0 ? (
          <p className="flex items-center justify-center w-full col-span-2 text-center my-28 ">
            There are no products in the cart.
          </p>
        ) : (
          <>
            <CartItems cart={cart} />
            <Checkout totalPrice={totalPrice} subTotal={subTotal} />
          </>
        )}
      </section>
    </section>
  );
}
