import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
  const targetDate = new Date("2025-05-17T17:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Helper function to pad numbers with leading zeros
  const pad = (num) => {
    return String(num).padStart(2, '0');
  };

  function getTimeRemaining() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <div className="countdown">
        {timeLeft.total > 0 ? (
          <>
            <table>
              <tr className="top-row">
                <td> {pad(timeLeft.days)} :&nbsp;</td>
                <td>{pad(timeLeft.hours)} :&nbsp;</td>
                <td>{pad(timeLeft.minutes)} :&nbsp;</td>
                <td>{pad(timeLeft.seconds)} &nbsp;</td>
              </tr>
              <tr>
                <th>DAYS</th>
                <th>HOURS</th>
                <th>MINUTES</th>
                <th>SECONDS</th>
              </tr>
              
            </table>
            {/*<span>{pad(timeLeft.days)}d</span> :
            <span>{pad(timeLeft.hours)}h</span> :
            <span>{pad(timeLeft.minutes)}m</span> :
            <span>{pad(timeLeft.seconds)}s</span>*/}
          </>
        ) : (
          <span>🎉 Countdown Complete!</span>
        )}
      </div>
    </div>
  );
};

export default Home;
