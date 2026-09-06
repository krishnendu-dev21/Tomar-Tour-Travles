import React from "react";

import car1Img from "../assets/img-Photoroom.png";
import luxuryCarImg from "../assets/images.jpg";
import FAMILYCAR from '../assets/car4-removebg-preview.png';
import comfrotCarImg from '../assets/car1-removebg-preview.png';


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
            HATCHBACK
        ================================================= */}

        <div className="category-card category-hatchback">

          <img
            src={car1Img}
            alt="Hatchback car"
            className="category-car-image"
          />


          <div className="category-content">

            <span className="category-small-label">
              CITY CAR
            </span>


            <h3>
              Suzuki Ertiga
            </h3>


            <p>
              Perfect for city driving
            </p>

          </div>

        </div>


        {/* =================================================
            SEDAN
        ================================================= */}

        <div className="category-card category-sedan">

          <img
            src={comfrotCarImg}
            alt="Sedan car"
            className="category-car-image"
          />


          <div className="category-content">

            <span className="category-small-label">
              COMFORT
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
            SUV
        ================================================= */}

        <div className="category-card category-suv">

          <img
            src={FAMILYCAR}
            alt="SUV car"
            className="category-car-image"
          />


          <div className="category-content">

            <span className="category-small-label">
              FAMILY CAR
            </span>


            <h3>
              Suzuki Ertiga
            </h3>


            <p>
              Perfect for family trips
            </p>

          </div>

        </div>


        {/* =================================================
            LUXURY
        ================================================= */}

        <div className="category-card category-luxury">

          <img
            src={luxuryCarImg}
            alt="Luxury sports car"
            className="category-car-image"
          />


          <div className="category-content">

            <span className="category-small-label">
              PREMIUM
            </span>


            <h3>
              Luxury
            </h3>


            <p>
              Premium driving experience
            </p>

          </div>

        </div>


      </div>

    </section>
  );
}

export default AboutCategories;