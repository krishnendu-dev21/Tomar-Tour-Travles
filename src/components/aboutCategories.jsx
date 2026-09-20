import React from "react";

import suvImg from "../assets/SUVs (Sport Utility Vehicles).jpeg";
import sedanImg from "../assets/Sedans.jpeg";
import tempoTravellerImg from "../assets/Tempo TravellersMinivans.webp";
import Suzuki from "../assets/car1-removebg-preview.png";


function AboutCategories() {
  return (
    <section className="categories-section">

      <div className="section-heading">

        <span className="section-label">
          OUR COLLECTION
        </span>

        <h2>
          Find The Right Car
          <span> For Every Journey</span>
        </h2>

        <p>
          Explore our collection and choose
          the perfect car for your journey.
        </p>

      </div>


      <div className="category-grid">


        {/* =================================================
            SUV
        ================================================= */}

        <div className="category-card category-suv">

          <img
            src={suvImg}
            alt="SUV car"
            className="category-car-image"
          />

          <div className="category-content">

            <span className="category-small-label">
              POWER & SPACE
            </span>

            <h3>
              SUVs
            </h3>

            <p>
              Spacious and perfect for long journeys
            </p>

          </div>

        </div>


        {/* =================================================
            SEDAN / FAMILY CAR
        ================================================= */}

        <div className="category-card category-sedan">

          <img
            src={sedanImg}
            alt="Sedan family car"
            className="category-car-image"
          />

          <div className="category-content">

            <span className="category-small-label">
              FAMILY CAR
            </span>

            <h3>
              Sedans
            </h3>

            <p>
              Comfortable and perfect for family trips
            </p>

          </div>

        </div>
       
         {/* =================================================
            Suzuki Ertiga / COMFORTABLE TRAVEL
        ================================================= */}

        <div className="category-card category-luxury">

          <img
            src={Suzuki}
            alt="Suzuki Ertiga"
            className="category-car-image"
          />

          <div className="category-content">

            <span className="category-small-label">
              COMFORTABLE TRAVEL
            </span>

            <h3>
              Suzuki Ertiga
            </h3>

            <p>
              Comfortable everyday driving
            </p>

          </div>

        </div>

        {/* =================================================
            TEMPO TRAVELLER / MINIVAN
        ================================================= */}

        <div className="category-card category-hatchback">

          <img
            src={tempoTravellerImg}
            alt="Tempo Traveller and Minivan"
            className="category-car-image"
          />

          <div className="category-content">

            <span className="category-small-label">
              GROUP TRAVEL
            </span>

            <h3>
              Tempo Traveller
            </h3>

            <p>
              Ideal for group trips and family tours
            </p>

          </div>

        </div>


        


      </div>

    </section>
  );
}


export default AboutCategories;