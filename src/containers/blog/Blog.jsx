import React from 'react';
import Article from '../../components/article/Article';
import {blog03} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Register in our events now.</h1>
    </div>
    <div className="gpt3__blog-container">


    <div className="gpt3__blog-container_groupA ">

      <iframe width="100%" height="65%" src="https://www.youtube.com/embed/kuodNUcvjng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

     {/*<a href='https://forms.gle/MQDPKtTjHCoSZ6xm8'> <Article imgUrl={blog02} date="PRESENT-ONGOING" text="BGMI: Royal RumBle - Last One Standing" /></a>*/}

      </div>

    <div className="gpt3__blog-container_groupA">

{/*<a href='#features'>  <Article imgUrl={blog01} date="Previous Tournament" text="FreeFire:The Carnage-Bring 'em Guns." /></a>*/}

 <a href='https://forms.gle/axpzY3KEAp7xiLt79'target={"_blank"}><Article imgUrl={blog03} date="UPCOMING-27th June" text="MLBB:Summer Series S2. Entry Fees Rs 200/-"/></a>

</div>

  


    </div>
  </div>
);

export default Blog;
