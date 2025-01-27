// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className="header"> 
//       <div className="header-contents">
//         <h2>Your Hunger, Our Priority – Order Now!</h2>
//         {/* <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to sastify your cravings and elevate your dining experience, one delicious meal at a time.</p> */}
//         <button>View Menu</button>
//       </div>
      
//     </div>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const images = [
    '/header_img.png',
    '/header2.png',
    '/header4.png',
    '/header5.png',
  ]; // Add paths to your background images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div
      className="header" id='images'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="header-contents">
        <h2>Your Hunger, Our Priority – Order Now!</h2>
        {/* <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p> */}
        {/* <button>View Menu</button> */}
      </div>
    </div>
  );
};

export default Header;
