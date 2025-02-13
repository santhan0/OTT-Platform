import React, { useState, useEffect } from "react";
import axios from "axios";
import './Mylist.css';
const Mylist = () => {
  const [data, setData] = useState(null); // Only store a single movie object
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies?limit=1") // Ensure to fetch only one movie
      .then((res) => {
        console.log(res.data);
        setData(res.data[0]); // Set only the first movie object
      })
      .catch((err) => {
        console.error("Error in getting data:", err);
        setError("Failed to fetch data. Please try again later.");
      });
  }, []);

  return (
    <div className="lbody">
      <div className="listb">
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        {data && (
          <div className="list">
            <div className="limg"><img src={data.imgVertical} alt={data.title}/></div>
            <div className="ltext">
              <h1>{data.title}</h1>
              <h6>Description: {data.description}</h6>
              <h5>Language: {data.language}</h5>
              <h5>Genre: {data.genre}</h5>
              <button className="lbtn">Play</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mylist;
