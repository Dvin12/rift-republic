import NewArrivals from "./NewArrivals";

export default function Header() {
  return (
    <header className=" bg-[url('../public/images/home-phone.png')] h-screen bg-cover  ">
      <section className="px-6 text-3xl py-36 font-Koulen">
        <h1 className=" text-lightYellow">RIFT REPUBLIC</h1>
        <p className="leading-[0.9] text-[#fff] text-5xl  tracking-wide">
          YOUR MELODY, <br />
          YOUR STAGE.
        </p>
      </section>
      <section className="absolute bottom-0 px-6">
        <NewArrivals />
      </section>
    </header>
  );
}
