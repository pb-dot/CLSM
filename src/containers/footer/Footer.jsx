import React from 'react';
import './footer.css';
//for icons
import { FaFacebook ,FaFacebookMessenger,FaViber,FaEnvelope ,FaTwitter} from "react-icons/fa";

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
        <p style={{marginRight:"30rem",fontSize:"2em"}}>GZarD</p>       
      </div>
      <div className="gpt3__footer-links_logo">        
        <p >Kolkata,WB-INDIA <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div shadow-drop-2-center" id='contact'>
        <h4 style={{marginLeft:"4rem"}}>Contact-LInks</h4> 

        <a href='https://twitter.com/SealRayan/'><p style={{marginLeft:"4rem"}}><FaTwitter size="1.5em" style={{marginRight:"9px"}}/>Twitter</p></a>        
           
         <a href='https://www.facebook.com/103163725681282/posts/108905091773812/?sfnsn=wiwspmo'><p style={{marginLeft:"4rem"}}><FaFacebook size="1.5em" style={{marginRight:"9px"}}/>Facebook-Page</p></a>

         <a href='https://www.facebook.com/groups/684733276008475/?ref=share'><p style={{marginLeft:"4rem"}}><FaFacebookMessenger size="1.5em" style={{marginRight:"9px"}}/>Facebook-Group</p></a>

         </div> 
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>G-ZarD : the ultimate E-sports Arena</p>
        <p><FaViber size="1.5em" style={{marginRight:"9px"}}/> 7044035228</p>
        <p><FaEnvelope size="1.5em" style={{marginRight:"9px"}} />clsmghub@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022  G-ZarD . MADE BY P.BANERJEE.</p>
    </div>
  </div>
);

export default Footer;
