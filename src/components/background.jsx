import React from "react";
import Backgroundimg from "../assets/car3.jpeg";
import carimg from "../assets/img-Photoroom.png";
import { Link } from "react-router-dom";

function Background() {
  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(${Backgroundimg})`,
      }}
    >
      <div className="background-content">

        {/* Brand Name */} <p className="background-brand"> TOMAR TOUR & TRAVELS </p>
        
        <p className="background-top-text">
          NAYE ANDAAZ MEIN <span>•</span> DRIVE-FUTURE
        </p>

        <h1 className="background-title">
          APKI <span>DREAM</span>
          <br />
          CAR YAHAAN HAI
        </h1>

        <p className="background-description">
          Best deals, trusted service aur poori honesty ke
          <br />
          saath — black ho ya white, aapki pasand ki car hum
          <br />
          tak pahuchate hain.
        </p>

        <div className="background-actions">
          <a href="tel:+918802532503" className="background-call">
              Abhi Call Karein
            </a>

        <Link to="/contact">

          <button className="background-contact">
            Contact Details <span>↓</span>
          </button>
          </Link>
        </div>

      </div>

      <img
        src={carimg}
        alt="Tata Punch"
        className="hero-car"
      />
    </section>
  );
}

export default Background;