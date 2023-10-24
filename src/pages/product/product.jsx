import Description from "./components/Description";
import Images from "./components/Images";

const placeholder = [
  {
    name: "VINTERA® II '50S NOCASTER® ",
    price: "1.199,00",
    description:
      "Revive the timeless sound of the '50s with the Vintera® II '50s Nocaster® and experience the iconic looks, inspiring feel and incomparable tone that only a Fender can deliver.",
    images: [
      {
        image: "../images/product1.jpg",
      },
      {
        image: "../images/product2.jpg",
      },
      {
        image: "../images/product3.jpg",
      },
    ],
  },
];

export default function Product() {
  return (
    <>
      {placeholder.map((item, i) => (
        <section key={i} className="p-6">
          <Images item={item} num={i} />
          <Description item={item} />
        </section>
      ))}
    </>
  );
}
