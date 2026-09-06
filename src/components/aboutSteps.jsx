import React from "react";

import {
  Search,
  CalendarCheck,
  KeyRound,
} from "lucide-react";


function AboutSteps() {
  return (
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


        {/* STEP 1 */}

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


        {/* STEP 2 */}

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


        {/* STEP 3 */}

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
  );
}

export default AboutSteps;