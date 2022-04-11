import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Register in our events now.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA shadow-drop-2-center">
     <a href='https://forms.gle/MQDPKtTjHCoSZ6xm8'> <Article imgUrl={blog02} date="PRESENT-ONGOING" text="BGMI: Royal RumBle .Last One Standing" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
       <a href='#features'>  <Article imgUrl={blog01} date="Previous Tournament" text="FreeFire:The Carnage-Bring 'em Guns." /></a>
        <Article imgUrl={blog03} date="UPCOMING-Comming Soon" text="MLBB:Epic Tournament Season 2"/>
      </div>
    </div>
  </div>
);

export default Blog;
