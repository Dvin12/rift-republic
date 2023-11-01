export default function Filter({ setFilterValue, filterValue, companies }) {
  return (
    <section className="flex items-center justify-center gap-2">
      <label htmlFor="filter">Filter</label>
      <select
        name="filter"
        id="filter"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      >
        <option value="all">All</option>
        {companies.map((company, i) => (
          <option value={company} key={i}>
            {company}
          </option>
        ))}
      </select>
    </section>
  );
}
