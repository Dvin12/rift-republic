import CartItem from "./CartItem";

export default function CartItems({ placeholder }) {
  return (
    <div className="flex flex-col gap-8 my-10">
      {placeholder.map((item, i) => (
        <CartItem item={item} key={i} />
      ))}
    </div>
  );
}
