import React from "react";

import {
  Car,
  ShieldCheck,
  Clock3,
  WalletCards,
  MapPin,
  Headphones,
  Search,
  CalendarCheck,
  KeyRound,
  ArrowRight,
  UserRoundCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import car1Img from "../assets/img-Photoroom.png";
import luxuryCarImg from "../assets/images.jpg";
import driverImg from "../assets/business-man-illustration-ai-generative-png.webp";

// import "./About.css";


function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <span className="about-tag">
            ABOUT OUR CAR BOOKING
          </span>

          <h1>
            Your Journey,
            <span> Our Priority.</span>
          </h1>

          <p>
            Book your perfect car with ease and enjoy a smooth,
            comfortable and reliable journey wherever you go.
          </p>

          <Link
            to="/cars"
            className="about-btn"
          >
            Explore Cars
            <ArrowRight size={19} />
          </Link>

        </div>


        {/* =================================================
            ROAD
        ================================================= */}

        <div className="about-road-animation">

          <div className="about-road-surface"></div>

          <div className="about-road-dashes"></div>

        </div>


        {/* =================================================
            MOVING CAR
        ================================================= */}

        <div className="about-moving-car">

          <div className="about-car-shadow"></div>

          <div className="about-car-wrapper">

            {/* Roof */}

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


            {/* Body */}

            <div className="about-car-main">

              <div className="about-car-back-light"></div>

              <div className="about-car-front-light"></div>

              <div className="about-car-door"></div>

              <div className="about-car-handle"></div>

              <div className="about-car-mirror"></div>

              <div className="about-car-bumper"></div>

              <div className="about-car-body-line"></div>

            </div>


            {/* Wheels */}

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


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-intro">

        <div className="intro-image">

          <img
            src={driverImg}
            alt="Professional car driver"
            className="driver-image"
          />

          <div className="driver-overlay">

            <UserRoundCheck size={21} />

            <span>
              Professional Driver
            </span>

          </div>

          <div className="floating-card">

            <strong>
              10K+
            </strong>

            <span>
              Happy Customers
            </span>

          </div>

        </div>


        <div className="intro-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Making Car Booking
            <span> Simple & Smart</span>
          </h2>

          <p>
            We provide a simple and convenient platform for
            booking cars. Whether you need a car for a weekend
            trip, business travel, family vacation or daily
            transportation, we help you find the right car at
            the right price.
          </p>

          <p>
            Our goal is to make every step of your journey easy —
            from choosing your car to completing your booking.
          </p>


          <div className="intro-points">

            <div>
              <ShieldCheck size={22} />
              <span>
                Trusted & Secure
              </span>
            </div>

            <div>
              <Clock3 size={22} />
              <span>
                Quick Booking
              </span>
            </div>

            <div>
              <WalletCards size={22} />
              <span>
                Affordable Pricing
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="why-section">

        <div className="section-heading">

          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Everything You Need
            <span> For Your Journey</span>
          </h2>

          <p>
            We make car rental and booking convenient,
            transparent and stress-free.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <Car />
            </div>

            <h3>
              Wide Car Collection
            </h3>

            <p>
              Choose from hatchbacks, sedans,
              SUVs and premium cars.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <WalletCards />
            </div>

            <h3>
              Best Pricing
            </h3>

            <p>
              Get affordable and transparent prices
              without hidden charges.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <ShieldCheck />
            </div>

            <h3>
              Safe & Secure
            </h3>

            <p>
              Your booking and personal information
              are kept secure.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Headphones />
            </div>

            <h3>
              24/7 Support
            </h3>

            <p>
              Our support team is always ready
              to help you.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-section">

        <div className="stat-box">

          <Car size={34} />

          <strong>
            500+
          </strong>

          <span>
            Cars Available
          </span>

        </div>


        <div className="stat-box">

          <MapPin size={34} />

          <strong>
            50+
          </strong>

          <span>
            Locations
          </span>

        </div>


        <div className="stat-box">

          <ShieldCheck size={34} />

          <strong>
            10K+
          </strong>

          <span>
            Happy Customers
          </span>

        </div>


        <div className="stat-box">

          <Headphones size={34} />

          <strong>
            24/7
          </strong>

          <span>
            Customer Support
          </span>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="how-section">

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Book Your Car In
            <span> 3 Easy Steps</span>
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              <Search />
            </div>

            <h3>
              Choose Your Car
            </h3>

            <p>
              Browse our collection and select
              the car that fits your needs.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              <CalendarCheck />
            </div>

            <h3>
              Select Date
            </h3>

            <p>
              Select your pickup date, time
              and preferred location.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              <KeyRound />
            </div>

            <h3>
              Confirm Booking
            </h3>

            <p>
              Complete your booking and get
              ready to hit the road.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAR COLLECTION
      ===================================================== */}

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
                Hatchback
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
              src={luxuryCarImg}
              alt="Sedan car"
              className="category-car-image"
            />

            <div className="category-content">

              <span className="category-small-label">
                COMFORT
              </span>

              <h3>
                Sedan
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
              src={car1Img}
              alt="SUV car"
              className="category-car-image"
            />

            <div className="category-content">

              <span className="category-small-label">
                FAMILY CAR
              </span>

              <h3>
                SUV
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


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="cta-content">

          <span className="section-label">
            READY TO DRIVE?
          </span>

          <h2>
            Your Next Adventure
            <span> Starts Here.</span>
          </h2>

          <p>
            Choose your car, select your date
            and start your journey today.
          </p>

          <Link
            to="/contact"
            className="about-btn"
          >
            Book Your Car
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}


export default About;