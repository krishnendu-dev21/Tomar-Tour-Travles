import React from "react";

import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function AboutCTA() {
  return (
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
          Choose your car, select your date and start your journey
          with <br/> 
          <strong>TOMAR TOUR & TRAVELS</strong> today.
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
  );
}

export default AboutCTA;
