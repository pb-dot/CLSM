import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'FREE FIRE WINNER',
    text: 'ANINDYA-SINHA',
  },
  {
    title: 'FREE FIRE RUNNER-UP',
    text: 'SUBHOJIT-MONDOL ',
  },
  {
    title: 'MLBB-S1 WINNER',
    text: 'Team-OPTIC Esp',
  },
  {
    title: 'MLBB-S1 RUNNER UP',
    text: 'Team-HOPE ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding shadow-drop-2-center" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">WINNER's Podium featuring Champions from our past events</h1>
      <p>#Wizard's Arena</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
