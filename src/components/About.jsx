import React from 'react';
import '../styles/About.css';

const skills = [
  { name: 'HTML5 & CSS3',       pct: 90, delay: '0.1s' },
  { name: 'JavaScript',  pct: 80, delay: '0.2s' },
  { name: 'MySQL & PostgreSQL', pct: 80, delay: '0.2s' },
  { name: 'React.js',           pct: 75, delay: '0.3s' },
  { name: 'NestJS / Node',      pct: 65, delay: '0.4s' },
];

const stats = [
  { num: '4+', label: 'Projects Built' },
  { num: '6mo', label: 'Industry Exp.' },
  { num: '5',  label: 'Tech Skills' },
  { num: '∞',  label: 'Remote-Ready' },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">

        <div>
          <div className="section-header">
            <div className="section-eyebrow">About Me</div>
            <h2 className="section-title">
              Code with<br /><em>purpose</em>
            </h2>
          </div>
          <div className="about-text">
            <p>
              I'm a mid-level frontend developer from Uyo, Nigeria, currently
              completing my B.Sc. at Babcock University. I started writing HTML
              at 17 and haven't stopped since.
            </p>
            <p>
              My experience spans building pixel-perfect landing pages,
              interactive e-commerce platforms, and supporting IT infrastructure
              at one of Nigeria's leading banks — United Bank for Africa.
            </p>
            <p>
              I write clean, semantic code and care deeply about the user
              experience behind every interface I ship.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="skills-section-header section-header">
            <div className="section-eyebrow">Technical Skills</div>
            <h2 className="section-title">
              What I work <em>with</em>
            </h2>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.pct}%`,
                      animationDelay: skill.delay,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
