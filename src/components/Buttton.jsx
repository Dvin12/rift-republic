export default function Buttton({ children }) {
  return (
    <button className="border-[1px] border-lightGrey px-6 py-2 text-lightGrey text-lg font-medium">
      {children}
    </button>
  );
}
