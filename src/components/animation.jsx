import React, { useState } from "react";
// import "./Animation.css";

function Animation() {
  const [weather, setWeather] = useState("day");

  return (
    <section className={`animation-section ${weather}`}>

      {/* ================= SKY ================= */}
      <div className="animation-sky">

        {/* SUN */}
        <div className="animation-sun"></div>

        {/* MOON */}
        <div className="animation-moon"></div>

        {/* STARS */}
        <div className="stars">
          {Array.from({ length: 25 }).map((_, i) => (
            <i key={i}></i>
          ))}
        </div>

        {/* CLOUDS */}
        <div className="real-cloud cloud-one">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="real-cloud cloud-two">
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* ================= BUILDINGS ================= */}
        <div className="real-city">

          {/* BUILDING 1 */}
          <div className="real-building building-one">
            <div className="windows">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 2 */}
          <div className="real-building building-two">
            <div className="windows">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 3 */}
          <div className="real-building building-three">
            <div className="windows">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 4 */}
          <div className="real-building building-four">
            <div className="windows">
              {Array.from({ length: 28 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 5 */}
          <div className="real-building building-five">
            <div className="windows">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 6 */}
          <div className="real-building building-six">
            <div className="windows">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

          {/* BUILDING 7 */}
          <div className="real-building building-seven">
            <div className="windows">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* ================= RAIN ================= */}
      <div className="rain-container">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 31) % 100}%`,
              animationDelay: `${(i * 0.07) % 2}s`,
            }}
          ></span>
        ))}
      </div>


      {/* ================= ROAD ================= */}
      <div className="animation-road">

        {/* ROAD LIGHT */}
        <div className="road-glow"></div>

        {/* ROAD LINES */}
        <div className="road-lines">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>


        {/* ================= CAR ================= */}
        <div className="css-car">

          {/* CAR SHADOW */}
          <div className="car-shadow"></div>


          {/* ================= CAR BODY ================= */}
          <div className="car-body">

            {/* ROOF / UPPER BODY */}
            <div className="car-roof">

              {/* FRONT WINDOW */}
              <div className="front-window">
                <div className="glass-shine"></div>
              </div>

              {/* BACK WINDOW */}
              <div className="back-window">
                <div className="glass-shine"></div>
              </div>

              {/* WINDOW DIVIDER */}
              <div className="window-divider"></div>

            </div>


            {/* SIDE MIRROR */}
            <div className="side-mirror"></div>


            {/* BONNET */}
            <div className="car-bonnet"></div>


            {/* DOOR */}
            <div className="car-door">

              <div className="door-handle"></div>

              <div className="door-bottom-line"></div>

            </div>


            {/* SECOND DOOR LINE */}
            <div className="second-door-line"></div>


            {/* SIDE LINE */}
            <div className="car-side-line"></div>


            {/* SIDE SKIRT */}
            <div className="side-skirt"></div>


            {/* BACK LIGHT */}
            <div className="car-backlight">
              <span></span>
            </div>


            {/* FRONT HEADLIGHT */}
            <div className="car-headlight">

              <div className="headlight-main"></div>

              <div className="headlight-small"></div>

            </div>


            {/* FRONT GRILLE */}
            <div className="front-grille">

              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>


            {/* FRONT BUMPER */}
            <div className="front-bumper"></div>


            {/* BACK BUMPER */}
            <div className="back-bumper"></div>


            {/* NUMBER PLATE */}
            <div className="number-plate">
              WB
            </div>

          </div>


          {/* ================= BACK WHEEL ================= */}
          <div className="car-wheel wheel-back">

            <div className="wheel-rim">

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <div className="wheel-center"></div>

            </div>

          </div>


          {/* ================= FRONT WHEEL ================= */}
          <div className="car-wheel wheel-front">

            <div className="wheel-rim">

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <div className="wheel-center"></div>

            </div>

          </div>

        </div>
      </div>


      {/* ================= WEATHER CONTROLS ================= */}
      <div className="weather-controls">

        <button
          className={weather === "day" ? "active" : ""}
          onClick={() => setWeather("day")}
        >
          ☀️ Day
        </button>

        <button
          className={weather === "night" ? "active" : ""}
          onClick={() => setWeather("night")}
        >
          🌙 Night
        </button>

        <button
          className={weather === "rain" ? "active rain-active" : ""}
          onClick={() => setWeather("rain")}
        >
          🌧️ Rain
        </button>

      </div>

    </section>
  );
}

export default Animation;