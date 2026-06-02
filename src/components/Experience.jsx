import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    date: 'Jan 2025 — Jun 2025',
    role: 'IT Support Intern',
    company: 'United Bank for Africa Plc · Lagos Island, Lagos',
    points: [
      'Provided first-line technical support across UBA\'s IT infrastructure, resolving hardware and software issues for banking staff.',
      'Used TeamViewer to deliver remote troubleshooting, reducing resolution time across distributed teams.',
      'Applied frontend knowledge to diagnose UI-related bugs in internal web-facing tools.',
      'Operated within a high-pressure financial environment, sharpening communication and stakeholder management skills.',
    ],
  },
  {
    id: 2,
    date: '2022 — Present',
    role: 'B.Sc. Student & Self-Taught Developer',
    company: 'Babcock University · Ilishan Remo, Ogun State',
    points: [
      'Pursuing a B.Sc. while independently mastering modern frontend technologies — HTML, CSS, JavaScript, and React.',
      'Completed a Web Development certification at Everest Academy alongside academic studies.',
      'Built and shipped multiple personal projects to reinforce real-world frontend skills.',
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <div className="section-eyebrow">Work History</div>
        <h2 className="section-title">
          Where I've <em>grown</em>
        </h2>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
            <div className="tl-date">{exp.date}</div>
            <div className="tl-role">{exp.role}</div>
            <div className="tl-company">{exp.company}</div>
            <ul className="tl-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
