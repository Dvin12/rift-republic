import Buttton from "../../../components/Buttton";

export default function Subscribe() {
  return (
    <form className="flex flex-col items-center justify-center gap-6 px-10 text-center xl:px-0 my-14 xl:flex-row xl:my-20 ">
      <h2 className="px-10 text-xl font-medium leading-none xl:px-0 text-lightGrey">
        JOIN OUR MAILING LIST
      </h2>
      <input
        type="text"
        className="w-full px-4 py-2 rounded xl:w-1/3 xl:py-3"
        placeholder="Email address"
      />
      <Buttton>SUBSCRIBE</Buttton>
    </form>
  );
}
