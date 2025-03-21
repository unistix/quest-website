// eslint-disable-next-line no-unused-vars
import React from "react";
import poster from "../../assets/poster1705.jpg"
import poster1 from "../../assets/poster.jpg"
import poster2 from "../../assets/poster2.jpg"
import './Albums.css'

const Albums = () => {
  return (
    <div className="main-gallery">
      
      
        <h1>Gallery</h1>
      <div className="poster-container">
        
      <div className="poster">
      <a href="https://www.instagram.com/join_the_quest/" target="_blank">
        <img src={poster} alt="Album 1" width="250px" height="250px"/>
      </a>
        17/05/2025
      </div>

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
  );
};

export default Albums;