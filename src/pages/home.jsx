import React from 'react'
import Background from '../components/background';
import Animation from '../components/animation';
import AboutIntro from "../components/aboutIntro";
import AboutFeatures from "../components/aboutFeatures";
import AboutStats from "../components/aboutStats";
import AboutSteps from "../components/aboutSteps";
import AboutCategories from "../components/aboutCategories";
import AboutCTA from "../components/aboutCTA";
// import Rating from '../components/rating';
function Home() {
  return (
    <>
      <Background />

      <Animation />

      <AboutIntro />

      <AboutFeatures />

      <AboutStats />

      <AboutSteps />

      <AboutCategories />

      <AboutCTA />

      {/* <Rating /> */}
    </>
  )
}

export default Home
