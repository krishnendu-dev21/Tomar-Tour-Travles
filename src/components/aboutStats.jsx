import React from "react";

import {
  Car,
  MapPin,
  ShieldCheck,
  Headphones,
} from "lucide-react";


function AboutStats() {
  return (
    <section className="stats-section">


      {/* CARS */}

      <div className="stat-box">

        <Car size={34} />

        <strong>
          500+
        </strong>

        <span>
          Cars Available
        </span>

      </div>


      {/* LOCATIONS */}

      <div className="stat-box">

        <MapPin size={34} />

        <strong>
          50+
        </strong>

        <span>
          Locations
        </span>

      </div>


      {/* CUSTOMERS */}

      <div className="stat-box">

        <ShieldCheck size={34} />

        <strong>
          10K+
        </strong>

        <span>
          Happy Customers
        </span>

      </div>


      {/* SUPPORT */}

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
  );
}

export default AboutStats;