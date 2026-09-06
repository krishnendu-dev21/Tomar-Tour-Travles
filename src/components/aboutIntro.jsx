import React from "react";

import {
  ShieldCheck,
  Clock3,
  WalletCards,
  UserRoundCheck,
} from "lucide-react";

import driverImg from '../assets/ChatGPT Image Sep 5, 2026, 12_25_47 PM.png';


function AboutIntro() {
  return (
    <section className="about-intro">


      {/* IMAGE */}

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


      {/* CONTENT */}

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
  );
}

export default AboutIntro;