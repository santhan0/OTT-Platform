import React, { useState, useEffect } from "react";
import axios from "axios";
import './Delete.css';

const DeleteContent = () => {
  const [contentType, setContentType] = useState("movies"); // Default to "movies"
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch items (movies or webseries) from the JSON server
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${contentType}`)
      .then((res) => {
        setItems(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error(`Error fetching ${contentType}:`, err);
        setError(`Failed to fetch ${contentType}.`);
      });
  }, [contentType]);

  // Function to delete an item by ID
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/${contentType}/${id}`)
      .then(() => {
        setItems(items.filter((item) => item.id !== id)); // Update UI after deletion
        setError(null);
      })
      .catch((err) => {
        console.error(`Error deleting ${contentType}:`, err);
        setError(`Failed to delete ${contentType}. Please try again.`);
      });
  };

  return (
    <div className="mainp">
      <div className="cont">
        <h2>Delete {contentType === "movies" ? "Movies" : "Web Series"}</h2>

        {/* Switch between Movies and Web Series */}
        <div className="togg">
          <button
            className={contentType === "movies" ? "active" : ""}
            onClick={() => setContentType("movies")}
          >
            Movies
          </button>
          <button
            className={contentType === "webseries" ? "active" : ""}
            onClick={() => setContentType("webseries")}
          >
            Web Series
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <ul className="cont-list">
          {items.map((item) => (
            <li key={item.id} className="cont-item">
              <div className="cont-info">
                <img
                  src={item.imgVertical}
                  alt={item.title}
                  className="cont-image"
                />
                <div>
                  <h4 style={{color:"white"}}>{item.title}</h4>
                  <p>{item.language}</p>
                </div>
              </div>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        {items.length === 0 && <p>No {contentType} found!</p>}
      </div>
    </div>
  );
};

export default DeleteContent;
