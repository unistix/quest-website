// eslint-disable-next-line no-unused-vars
import React from "react";
import background from '../../assets/poster.jpg'
import './Home.css'


const Home = () => {
  const countdownText = "00:00:00"

  return (
    <div className="main" style={styles.main}>
       
      {/*<h1>Welcome to the Home Page!</h1>*/}
      
      <div className="countdown">{countdownText}</div>
    </div>
  );
};

export default Home;

//TODO: set styling to fit the whole window
const styles = {
  main:{
    backgroundImage:`url(${background})`,
    backgroundSize: 'contain', // Cover the whole area
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    backgroundPosition: 'center', // Center the background image
    
    //marginLeft:'-100px',
    
   
  
  }
}