// eslint-disable-next-line no-unused-vars
import React from "react";
import background from '../../assets/poster.jpg'


const Home = () => {
  
  return (
    <div className="main" style={styles.main}>
       
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple Home component in your React app.</p>
      <p>Count Down Goes here</p>
    </div>
  );
};

export default Home;

//TODO: set styling to fit the whole window
const styles = {
  main:{
    backgroundImage:`url(${background})`,
    backgroundSize: 'cover', // Cover the whole area
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    backgroundPosition: 'center center', // Center the background image
    height:'1500px',
    width:'1500px',
    marginLeft:'-100px',
   
  
  }
}