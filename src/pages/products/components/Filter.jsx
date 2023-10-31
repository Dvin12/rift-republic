export default function Filter({ setFilterValue, filterValue }) {
  return (
    <section className="flex items-center justify-center gap-2">
      <label htmlFor="filter">Filter</label>
      <select
        name="filter"
        id="filter"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      >
        <option value="fender">Fender</option>
        <option value="gibson">Gibson</option>
        <option value="jackson">Jackson</option>
        <option value="ibanez">Ibanez</option>
        <option value="yamaha">Yamaha</option>
      </select>
    </section>
  );
}
