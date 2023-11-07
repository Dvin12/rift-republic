export default function Sort({ sortValue, setSortValue }) {
  return (
    <section>
      <select
        className="px-3 py-1 bg-darkBlack text-lightGrey"
        name="sort"
        id="sort"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="highLow">high to low</option>
        <option value="lowHigh">low to high</option>
      </select>
    </section>
  );
}
