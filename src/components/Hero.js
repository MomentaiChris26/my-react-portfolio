import React from "react";

const Hero = () => {
  return (
    <div className="heroBg" id="home">
      <div>
        <h1>My Name is Chris Tri</h1>
        <h2>I'm a Junior Developer</h2>
        <h3>Check out my work! </h3>
        <a href="#projects">
          <p className="downarrow"><i class="fas fa-angle-double-down"></i></p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
