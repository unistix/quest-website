// eslint-disable-next-line no-unused-vars
import React from "react";

const Albums = () => {
  return (
    <div>
      <h1>Welcome to the Gallery Page!</h1>
      <p>This is a simple Gallery component in your React app.</p>
      <div>
      <a href="https://example.com" target="_blank">
        <img src="https://example.com/image.jpg" alt="Album 1"/>
      </a>
      <a href="https://example.com" target="_blank">
        <img src="https://example.com/image.jpg" alt="Album 2"/>
      </a>

      </div>
    </div>
  );
};

export default Albums;