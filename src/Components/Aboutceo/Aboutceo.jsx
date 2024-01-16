import React, { useEffect, useState } from 'react'
import "./style.css"
import im13 from "../../im13.jpg"
import im10 from "../../im10.jpg"
import im12 from "../../im12.jpg"
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
const imagesArray = [im12, im10,im13];
function Aboutceo() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='About'  id='about'>
   
   <div className='About-img'>
   {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`image test ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
   
   </div>
   <div className='About-content'>
    <div className='About-content-header'>About Us</div>
    <div className='About-content-content'>A career in the Indian Armed Forces (Army, Navy &amp; Air force) is one of the most
prestigious career options available to the youth today. As officers in the defence
forces, they can feel proud of choosing a career of challenges, excitement and
adventure. <br />
<i>“ SSB BullsEye has been established with a view to provide guidance &amp; mentoring to
the aspirants, desirous of joining the Indian Armed Forces as Officers&quot;</i>
</div>
   </div>
    
</div>
  )
}

export default Aboutceo