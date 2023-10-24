import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Header from "./components/header";

export default function Home() {
  return (
    <section>
      <Header />
      <Categories />
      <Newsletter />
    </section>
  );
}
