// eslint-disable-next-line no-unused-vars
import React from "react";
import poster1 from "../../assets/poster.jpg"
import poster2 from "../../assets/poster2.jpg"
import './Albums.css'

const Albums = () => {
  return (
    <div>
      <h1>Welcome to the Gallery Page!</h1>
      <p>This is a simple Gallery component in your React app.</p>
      <div>
      <div className="poster-container">
      <div className="poster">
      <a href="https://www.instagram.com/join_the_quest/" target="_blank">
        <img src={poster1} alt="Album 1" width="250px"/>
      </a>
        23/11/2024
      </div>
      
        
        <div className="poster">
          <a href="https://www.instagram.com/join_the_quest/" target="_blank">
            <img className="poster" src={poster2} alt="Album 2"  width="250px"/>
          
          </a>
          11/06/2024
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default Albums;