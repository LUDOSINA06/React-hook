import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [note, setNote] = useState("");

    const handleAddMovie = () => {
        const newMovie = {
            title,
            description, 
            posterUrl, 
            note: parseFloat(note) 
        };
        onAddMovie(newMovie);
        setTitle("");
        setDescription("");
        setPosterUrl("");
        setNote("");
    };

    return (
        <div className="add-movie">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Poster URL"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={handleAddMovie}>Add</button>
        </div>
    );
}

export default AddMovie;