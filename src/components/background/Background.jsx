// eslint-disable-next-line no-unused-vars
import React from "react";
import './Background.css'
import poster from '../../assets/poster_23_11_24.jpg'
const Background = () => {
  //TODO: when Make background responsive
    return (
      
        <div className="background">
         <img src={poster} width="1440" height="1440"></img>
        </div>
        
        
     
    );
  };
  
  export default Background;