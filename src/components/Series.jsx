import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Films.css';

const Films = () => {
    const [moviesByLanguage, setMoviesByLanguage] = useState({});
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movie data
        axios.get('http://localhost:3000/webseries') // Ensure your API supports this
            .then(res => {
                console.log(res.data); // Check the response data

                // Set the data for individual movies and for grouping them by language.
                setMovies(res.data.slice(0, 10)); // Set data with the response
                
                // Grouping logic
                const groupedMovies = res.data.reduce((acc, movie) => {
                    if (!acc[movie.language]) {
                        acc[movie.language] = []; // Create an array for a new language
                    }
                    acc[movie.language].push(movie); // Add the movie to the corresponding language
                    return acc;
                }, {});

                setMoviesByLanguage(groupedMovies); // Set grouped movies in state
            })
            .catch(error => {
                console.error("Error in getting data:", error);
                setError("Failed to load movies."); // Set error message
            });
    }, []); // Empty dependency array ensures this runs only once after initial render

    // Handle error display if there's an error
    if (error) {
        return <div>Error: {error}</div>; // Show an error message if there's an error
    }

    return (
        <div className='fullpa'>
            <h1>Top 10 Series</h1>
            <div className='moc'>
                {movies.map((item,index) => (
                    <div key={item.id} className='moid'>
                        <h1>{index+1}</h1> {/* Display index for each movie */}
                        <img src={item.imgVertical} alt={item.title} />
                    </div>
                ))}
            </div>
            
            <h1 className='tit'>Series by Language</h1>
            {Object.keys(moviesByLanguage).map(language => (
                <div key={language} className='language-section'>
                    <h2>{language}</h2> {/* Display the language */}
                    <div className='ml'>
                        {moviesByLanguage[language].map((item, index) => (
                            <div key={item.id || index} className='mli'>
                                <img src={item.imgHorizontal} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Films;
