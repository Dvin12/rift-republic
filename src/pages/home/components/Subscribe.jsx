export default function Subscribe() {
  return (
    <form className="flex flex-col items-center justify-center gap-6 px-10 text-center xl:px-36 my-14">
      <h2 className="px-10 text-2xl font-medium leading-none xl:px-0 text-lightGrey">
        JOIN OUR MAILING LIST
      </h2>
      <input
        type="text"
        className="w-full px-4 py-2 rounded xl:w-1/2 xl:py-4"
        placeholder="Email address"
      />
      <button className="border-[1px] border-lightGrey px-6 py-2 text-lightGrey text-lg font-medium">
        SUBSCRIBE
      </button>
    </form>
  );
}
