import NewArrivals from "./NewArrivals";

export default function Header() {
  return (
    <header className=" bg-[url('../public/images/home-phone.jpg')] xl:bg-[url('../public/images/home-desktop.jpg')] h-screen bg-cover  ">
      <div className="absolute w-full h-full bg-opacity-30 bg-darkBlack"></div>
      <section className="sticky z-20 px-6 py-32 md:py-60 xl:py-44 2xl:py-60 font-Koulen 2xl:px-44 xl:px-24 ">
        <h1 className="static text-3xl text-lightYellow md:text-4xl">
          RIFT REPUBLIC
        </h1>
        <p className="leading-[2.5rem] text-white text-5xl  tracking-wide md:text-6xl xl:text-7xl md:tracking-tight xl:leading-[3.8rem]">
          YOUR MELODY, <br />
          YOUR STAGE.
        </p>
      </section>
      <section className="absolute px-6 bottom-5 2xl:px-44 xl:px-24 2xl:bottom-12 ">
        <NewArrivals />
      </section>
    </header>
  );
}
