import React from 'react';
import '../styles/Contact.css'

const contactInfo = [
  {
    label: 'Email',
    value: <a href="mailto:robsonisaiah265@gmail.com">robsonisaiah265@gmail.com</a>,
  },
  {
    label: 'Phone',
    value: '+234-707-226-0209',
  },
  {
    label: 'Location',
    value: 'Uyo, Nigeria · Remote OK',
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-eyebrow">Get In Touch</div>
      <h2 className="section-title">
        Let's build something <em>great</em>
      </h2>
      <p className="contact-sub">
        I'm currently open to remote frontend roles. If you have a project or
        opportunity in mind, I'd love to hear from you.
      </p>

      <div className="contact-cards">
        {contactInfo.map((item) => (
          <div className="contact-card" key={item.label}>
            <div className="contact-card-label">{item.label}</div>
            <div className="contact-card-value">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="contact-btn-row">
        <a href="mailto:robsonisaiah265@gmail.com" className="btn btn-light">
          Send Me an Email
        </a>
        <a href="/ISAIAH_CV.pdf" download="ISAIAH_CV.pdf" className="btn btn-ghost">
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Contact;
