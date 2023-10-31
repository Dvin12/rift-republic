export default function Sort({ sortValue, setSortValue }) {
  return (
    <section>
      <label htmlFor="sort">Sort</label>
      <select
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
