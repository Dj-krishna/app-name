import { useState } from "react";

function Table() {
  const [search, setSearch] = useState("");
  const data = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Mumbai",
    "Kolkata",
    "Kerala",
    "-",
    "-",
    "-",
  ];
  return (
    <>
      <h2>Data Table</h2>
      <select value={search} onChange={(e) => setSearch(e.target.value)}>
        <option value={""}>select</option>
        <option value={"Hyderabad"}>Hyderabad</option>
        <option value={"Bangalore"}>Bangalore</option>
        <option value={"Chennai"}>Chennai</option>
        <option value={"Mumbai"}>Mumbai</option>
        <option value={"Kolkata"}>Kolkata</option>
        <option value={"Kerala"}>Kerala</option>
        {/* <option value={''}>-</option>
                <option value={''}>-</option>
                <option value={''}>-</option> */}
      </select>
      {data
        .filter((c) => c.includes(search))
        .map((city) => (
          <div key={city}>{city}</div>
        ))}
    </>
  );
}
export default Table;
