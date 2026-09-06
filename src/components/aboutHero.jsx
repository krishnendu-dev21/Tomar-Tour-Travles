import React from "react";

import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";


function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-overlay"></div>


      {/* HERO CONTENT */}

      <div className="about-hero-content">


         

        <span className="about-tag">
          ABOUT OUR CAR BOOKING
        </span>


        <h1>
          Your Journey,
          <span> Our Priority.</span>
        </h1>


        <p>
        Car booking, tour packages, travel services aur reliable
        transportation solutions ke liye — TOMAR TOUR & TRAVELS
        aapki har journey ko comfortable aur memorable banane ke liye
        hamesha ready hai. Aaj hi humse contact karein.
        </p>


        <Link
          to="/cars"
          className="about-btn"
        >
          Explore Cars

          <ArrowRight size={19} />
        </Link>

      </div>


      {/* ROAD */}

      <div className="about-road-animation">

        <div className="about-road-surface"></div>

        <div className="about-road-dashes"></div>

      </div>


      {/* MOVING CAR */}

      <div className="about-moving-car">

        <div className="about-car-shadow"></div>


        <div className="about-car-wrapper">

          {/* ROOF */}

          <div className="about-car-roof">

            <div
              className="
                about-car-window
                about-window-back
              "
            ></div>


            <div
              className="
                about-car-window
                about-window-front
              "
            ></div>

          </div>


          {/* BODY */}

          <div className="about-car-main">

            <div className="about-car-back-light"></div>

            <div className="about-car-front-light"></div>

            <div className="about-car-door"></div>

            <div className="about-car-handle"></div>

            <div className="about-car-mirror"></div>

            <div className="about-car-bumper"></div>

            <div className="about-car-body-line"></div>

          </div>


          {/* WHEELS */}

          <div
            className="
              about-car-wheel
              about-wheel-back
            "
          >
            <div className="about-wheel-center"></div>
          </div>


          <div
            className="
              about-car-wheel
              about-wheel-front
            "
          >
            <div className="about-wheel-center"></div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;