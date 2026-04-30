import { useState } from "react";

const SearchUsers = () => {
  const [search, setSearch] = useState("");
  const users = ["Priya", "Kumar", "John", "Devi", "Ramesh", "Kohli"];

  const filtered = users.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {filtered.length > 0 ? (
        //  filtered.map((u) =>  <p key={u}>{u}</p>)
        // ): (<p> No Data found</p>)
        filtered.map((u) => <p key={u}>{u}</p>)
      ) : (
        <p>No data found</p>
      )} */}

      {filtered.length > 0 ? (
        filtered.map((u) => <p key={u}>{u}</p>)
      ) : (
        <p> No Data found</p>
      )}
    </div>
  );
};

export default SearchUsers;
