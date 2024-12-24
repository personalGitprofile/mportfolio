import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            
            <div
  className="hero min-h-screen "
  style={{
    backgroundImage: "url(https://media.licdn.com/dms/image/D4D12AQFLuAxQU5K2uA/article-cover_image-shrink_600_2000/0/1697448135682?e=2147483647&v=beta&t=VZwa0w6aD-Va89LQ25nhXNwitpE80Z2vwnEiuQjD5k4)",
   
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <h1 className="mb-5 text-xl font-bold">Welcome to my Environment</h1>
      <p className="mb-5 font-light">
      Digital marketing promotes products or services through online platforms like social media, search engines, and email. It includes strategies like SEO, content marketing, and PPC advertising, helping businesses reach audiences, boost brand awareness, and drive sales effectively.
      </p>
      <Link to='/portfolio' className="btn btn-primary">{`Let's Check`}</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;