import NewArrivals from "./NewArrivals";

export default function Header() {
  return (
    <header className=" bg-[url('../public/images/home-phone.png')] xl:bg-[url('../public/images/home-desktop.jpg')] h-screen bg-cover  ">
      <div className="absolute w-full h-full bg-opacity-30 bg-darkBlack"></div>
      <section className="sticky z-20 px-6 py-32 xl:py-60 font-Koulen xl:px-44 ">
        <h1 className="static text-3xl text-lightYellow xl:text-4xl">
          RIFT REPUBLIC
        </h1>
        <p className="leading-[2.5rem] text-white text-5xl  tracking-wide xl:text-7xl xl:tracking-tight xl:leading-[3.8rem]">
          YOUR MELODY, <br />
          YOUR STAGE.
        </p>
      </section>
      <section className="absolute px-6 bottom-5 xl:px-44 xl:bottom-12 ">
        <NewArrivals />
      </section>
    </header>
  );
}
