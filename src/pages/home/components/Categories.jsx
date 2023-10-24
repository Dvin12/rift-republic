import CategoryCard from "./CategoryCard";

const category = [
  {
    name: "Acoustic",
    image: "./images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
  },

  {
    name: "Electric",
    image: "./images/simon-weisser-phS37wg8cQg-unsplash.jpg",
  },

  {
    name: "Bass",
    image: "./images/oleg-ivanov-G_3NA_UoVyo-unsplash.jpg",
  },

  {
    name: "Amps & FX",
    image: "./images/yeh-che-wei-IK9RX8nFSWE-unsplash.jpg",
  },

  {
    name: "Accessories",
    image: "./images/rombo-OujU8QemtQM-unsplash.jpg",
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
