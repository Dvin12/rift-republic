import NewArrivals from "./NewArrivals";

export default function Header() {
  return (
    <header className=" bg-[url('../public/images/home-phone.png')] xl:bg-[url('../public/images/home-desktop.png')] h-screen bg-cover  ">
      <section className="px-6 text-3xl xl:w-full xl:h-full py-36 xl:py-56 font-Koulen xl:px-36 xl:flex xl:flex-col">
        <h1 className=" text-lightYellow xl:text-6xl">RIFT REPUBLIC</h1>
        <p className="leading-[0.9] text-[#fff] text-5xl  tracking-wide xl:text-8xl xl:tracking-tight xl:leading-[5.4rem]">
          YOUR MELODY, <br />
          YOUR STAGE.
        </p>
      </section>
      <section className="absolute bottom-0 px-6 xl:px-36 xl:bottom-14 ">
        <NewArrivals />
      </section>
    </header>
  );
}
