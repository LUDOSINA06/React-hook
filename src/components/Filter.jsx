import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
      />
    </div>
  );
};

export default Filter;