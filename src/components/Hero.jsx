import React from 'react';
import '../styles/Hero.css';
import MyPhoto from '../images/pict.jpg';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="hero-eyebrow">Available for remote roles</div>
        <h1 className="hero-heading">
          Frontend<br />
          Developer<br />
          <em>&amp; Builder</em>
        </h1>
        <p className="hero-sub">
          I craft responsive, user-centred web interfaces with HTML, CSS,
          JavaScript, and React. Based in Nigeria — building for the world.
        </p>
        <div className="hero-cta-row">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-frame">
          <div className="avatar-bg" />
          <div className="avatar-initials">
            {/* <div className="initials-text">IR</div> */}
            <img src={MyPhoto} alt="Isaiah Robson" className="avatar-img" />

          </div>
          <div className="avatar-tag">Frontend Dev</div>
          <div className="avatar-badge">
            <strong>3+</strong>
            Years Building
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
