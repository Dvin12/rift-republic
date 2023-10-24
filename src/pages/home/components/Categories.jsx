import CategoryCard from "./CategoryCard";

const category = [
  {
    name: "Acoustic",
    image: "./images/categories/acoustic.jpg",
  },

  {
    name: "Electric",
    image: "./images/categories/electric.jpg",
  },

  {
    name: "Bass",
    image: "./images/categories/bass.jpg",
  },

  {
    name: "Amps & FX",
    image: "./images/categories/ampsFX.jpg",
  },

  {
    name: "Accessories",
    image: "./images/categories/accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section className="flex flex-col gap-5 p-4">
      {category.map((categoryCard, i) => (
        <CategoryCard categoryCard={categoryCard} key={i} />
      ))}
    </section>
  );
}
