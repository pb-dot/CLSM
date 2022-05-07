import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta" id='cta'>
    <div className="gpt3__cta-content">
      <h3>Register Today & take part in our ongoing event.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" className='heartbeat'><a target={"_blank"} href='https://forms.gle/axpzY3KEAp7xiLt79'>Get Started</a></button>
    </div>
  </div>
);

export default CTA;
