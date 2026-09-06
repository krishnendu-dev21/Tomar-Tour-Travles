import React from "react";

import {
  Car,
  WalletCards,
  ShieldCheck,
  Headphones,
} from "lucide-react";


function AboutFeatures() {
  return (
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


        {/* CARD 1 */}

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


        {/* CARD 2 */}

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


        {/* CARD 3 */}

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


        {/* CARD 4 */}

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
  );
}

export default AboutFeatures;