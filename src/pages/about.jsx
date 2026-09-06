import React from "react";


import AboutHero from "../components/aboutHero";
import AboutIntro from "../components/aboutIntro";
import AboutFeatures from "../components/aboutFeatures";
import AboutStats from "../components/aboutStats";
import AboutSteps from "../components/aboutSteps";
import AboutCategories from "../components/aboutCategories";
import AboutCTA from "../components/aboutCTA";
import Rating from '../components/rating';

function About() {
  return (
    <main className="about-page">

      <AboutHero />

      <AboutIntro />

      <AboutFeatures />

      <AboutStats />

      <AboutSteps />

      <AboutCategories />
   
      <Rating />

      <AboutCTA />

    </main>
  );
}


export default About;