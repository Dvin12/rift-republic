import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Success() {
  return (
    <section className="py-40 text-lightGrey">
      <div className="flex items-center justify-center gap-2 my-4 text-3xl">
        <IoCheckmarkCircleOutline />
        <span>Success!</span>
      </div>
      <p className="text-center">The order has been placed succesfully.</p>
    </section>
  );
}
