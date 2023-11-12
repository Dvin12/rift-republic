import CategoryCard from "./CategoryCard";

const category = [
  {
    name: "acoustic",
    image: "./images/categories/acoustic.jpg",
  },

  {
    name: "electric",
    image: "./images/categories/electric.jpg",
  },

  {
    name: "bass",
    image: "./images/categories/bass.jpg",
  },

  {
    name: "ampFX",
    image: "./images/categories/ampsFX.jpg",
  },

  {
    name: "accessories",
    image: "./images/categories/accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section className="flex flex-col gap-5 px-4 py-6 xl:grid xl:grid-cols-2 xl:px-44 xl:py-16 xl:gap-8 ">
      {category.map((categoryCard, i) => (
        <CategoryCard categoryCard={categoryCard} key={i} />
      ))}
    </section>
  );
}
