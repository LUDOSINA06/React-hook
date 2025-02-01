import React, { useState } from "react";

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleFilter = () => {
        onFilter({ title, note: parseFloat(note) });
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filter;