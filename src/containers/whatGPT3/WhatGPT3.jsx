import React  from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';




const WhatGPT3 = () => {

  return(
  <div  id="wgpt3" className=  'gpt3__whatgpt3 section__margin rotate-center'>
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is CLSM" text="CLSM aka COLOSSEUM an esport's tournament organisation with the aim to shape up a gamer's dream to  reality #gear up for more exiting events # support us." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <a href='#blog'><p className='heartbeat'>Explore our ongoing Events </p></a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Privacy" text="Your privacy is important to COLOSSEUM and we take our responsibility regarding our user's contact info seriously. " />
      <Feature title="Knowledgebase" text="CLSM provides a variety of events based on both PC and Mobile games and veterans will be your judge in the events" />
      <Feature title="OBJECTIVE" text="A new built E-Sports company created by a small group of gamers with the vision of promoting e-sports culture among the youth" />
    </div>
  </div>
);//end of return
}//end of f(x)

export default WhatGPT3;