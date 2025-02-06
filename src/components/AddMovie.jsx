import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [note, setNote] = useState("");
    const [trailer, setTrailer] = useState("");

    const handleAddMovie = () => {
        const newMovie = {
            id,
            title,
            description, 
            posterUrl, 
            note: parseFloat(note), 
            trailer,
        };
        onAddMovie(newMovie);
        setId("");
        setTitle("");
        setDescription("");
        setPosterUrl("");
        setNote("");
        settrailer("");
    };

    return (
        <div className="add-movie">
            <input
                type="number"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
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
            <input
                type="text"
                placeholder="Trailer URL"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
            />    
            <button onClick={handleAddMovie}>Add</button>
        </div>
    );
}

export default AddMovie;