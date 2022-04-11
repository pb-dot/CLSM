import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future of gaming before others</h1>
    </div>

    <div className="gpt3__footer-btn">
     <a href='#cta'> <p>ClicK here Now</p> </a>
    </div>

    <div className="gpt3__footer-links">
    <div className="gpt3__footer-links_logo">
        <p style={{marginRight:"30rem",fontSize:"2em"}}>CLSM  </p>       
      </div>
      <div className="gpt3__footer-links_logo">        
        <p >Kolkata,WB-INDIA <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div shadow-drop-2-center">
        <h4 style={{marginLeft:"5rem"}}>Contact-LInks</h4>       
         <a href='https://www.facebook.com/103163725681282/posts/108905091773812/?sfnsn=wiwspmo'><p style={{marginLeft:"5rem"}}>Facebook-Page</p></a>
         <a href='https://www.facebook.com/groups/684733276008475/?ref=share'><p style={{marginLeft:"5rem"}}>Facebook-Group</p></a>
        <a href='https://twitter.com/SealRayan/'><p style={{marginLeft:"6.5rem"}}>Twitter</p></a>        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>COLOSSEUM-gHub : the hub of e-sports</p>
        <p>7044035228</p>
        <p>clsmghub@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022  COLOSSEUM. MADE BY P.BANERJEE.</p>
    </div>
  </div>
);

export default Footer;
