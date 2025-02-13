import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaPlay } from "react-icons/fa";
import axios from 'axios'; // Import axios
import ReactPlayer from 'react-player';
// Uncomment these lines and ensure path is correct
// import rednote from './img/red note poster.jpg'; // Correct path to your images
// import anotherImage from './img/another_image.jpg';
// import thirdImage from './img/third_image.jpg';

const Home = () => {  
  const [data, setData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
    const [playingVideo, setPlayingVideo] = useState(null); // State to manage video playback

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(() => {
                console.log("Error in getting data");
            });
        axios.get('http://localhost:3000/webseries')
            .then(res => {
                console.log(res.data);
                setSeriesData(res.data);
            })
            .catch(() => {
                console.log("Error in getting series data");
            });
    }, []);

    const playVideo = (videoSrc) => {
        setPlayingVideo(videoSrc); // Set the video to play
    };

    const closeVideo = () => {
        setPlayingVideo(null); // Close the video
    };


  return (
   <div className='homeimg'>
      <div className='imgtitle'>
        <h1>STRANGER THINGS</h1>
        <h6>IMDB 8.7 <div>U/A Rated</div></h6>
        <div className='discription'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus illum dolore inventore ipsum.
        </div>
        <button className='playbtn'><span><FaPlay /> Play</span></button>
      </div>
      <div className='mainc'>
        <h4>Movies</h4>
        <div className="mo">
          {data.map((item, index) => (
            <div key={index} className="image-container">
              <img src={item.imgHorizontal} height="130px" width="220px" alt={item.title} />
              <div className="card" style={{ width: '20rem', color: 'black' }}>
                <img src={item.imgHorizontal} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <span className="card-text">{item.description}</span>
                  <div className='card-gl'>
                    <span>Language: {item.language}</span>
                    <span>Genre: {item.genre}</span>
                  </div>
                </div>
                <button onClick={() => playVideo(item.video)}>Play</button>
                <button>Add to Watchlist</button>
              </div>
            </div>
          ))}
        </div>

        <h4 className='na-s'>Series</h4>
        <div className="web-container">
          {seriesData.map((item, index) => (
            <div key={index} className="image-container">
              <img src={item.imgHorizontal} height="130px" width="220px" alt={item.title} />
              <div className="card" style={{ width: '20rem', color: 'black' }}>
                <img src={item.imgHorizontal} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <span className="card-text">{item.description}</span>
                  <div className='card-gl'>
                    <span>Language: {item.language}</span>
                    <span>Genre: {item.genre}</span>
                  </div>
                </div>
                <button onClick={() => playVideo(item.video)}>Play</button>
                <button>Add to Watchlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {playingVideo && (
                <div className="video-modal">
                    <div className="video-overlay">
                        <ReactPlayer
                            url={playingVideo}
                            className='react-player'
                            playing
                            controls
                            width='100%'
                            height='100%'
                        />
                        <button onClick={closeVideo} className="close-button">Close</button>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Home;