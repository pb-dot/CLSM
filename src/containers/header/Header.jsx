import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/a0.jpeg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding " id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text ">#G-ZarD:-Gear Up for the new Gameziness</h1>
      <p> GiZarD ,
a place where we shape the next
& test the best, 
Wizards fighting in the hub we create, 
The fierce battle to crack one's nerves till the end. 
Fighting till their bones collapse and giving up is never quite an option. 
Well here you can also become a nightmare for others hence making your dream come true ,writing a fairy-tale on the way, that people will remember for ages.</p>


      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>More than 2k players have already registered with us </p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} className="scale-in-center" />
    </div>
  </div>
);

export default Header;
