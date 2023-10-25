import NewArrivals from "./NewArrivals";

export default function Header() {
  return (
    <header className=" bg-[url('../public/images/home-phone.png')] h-screen bg-cover relative ">
      <section className="px-6 py-40 text-3xl font-Koulen">
        <h1 className=" text-lightYellow">RIFT REPUBLIC</h1>
        <p className="leading-[0.9] text-[#fff] text-5xl ">
          YOUR MELODY, <br />
          YOUR STAGE.
        </p>
      </section>
      <section className="absolute px-6 bottom-56">
        <NewArrivals />
      </section>
    </header>
  );
}
