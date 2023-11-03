import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" bg-[url('../images/error.jpg')] h-screen bg-cover relative z-10 font-Koulen  ">
      <div className="absolute top-0 z-10 w-full h-screen bg-darkBlack bg-opacity-80" />
      <div className="flex flex-col items-center justify-center h-screen gap-2 text-lightGrey">
        <h1 className="z-30 text-4xl">OOOPS!</h1>
        <p className="z-30 text-2xl">Something went wrong 🤔</p>
        <p className="z-30 ">
          <i className="text-lg not-italic">
            {error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
}
