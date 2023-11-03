import CartItem from "./CartItem";

export default function CartItems({ cart }) {
  return (
    <div className="flex flex-col gap-8 my-10">
      {cart.map((item, i) => (
        <CartItem item={item} key={i} />
      ))}
    </div>
  );
}
