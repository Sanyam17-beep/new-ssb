import React,{useEffect} from 'react'
import "./style.css"
import { FaArrowRightLong } from "react-icons/fa6";
import im1 from "../../im1.jpg";
import im2 from "../../im2.jpg"
import im3 from "../../im3.jpg";
import im11 from "../../im11.png";

function Feature({setenroll,enroll}) {
  const smoothScrollTo = (id, callback) => {
    // Check if the current route is /enroll
   
      // If the current route is already /home, scroll directly
      performScrollTo(id, callback);
     
   
  };

  const performScrollTo = (id, callback) => {
    const settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };

    const node = document.getElementById(id);
    const nodeTop = node.offsetTop-80;
    const nodeHeight = node.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const offset = window.pageYOffset;
    const delta = nodeTop - offset;
    const bottomScrollableY = height - windowHeight;
    const targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    let startTime = Date.now();
    let percentage = 0;

    function step() {
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(timer);

        if (callback) {
          callback();
        }
      } else {
        const yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        timer = setTimeout(step, 10);
      }
    }

    let timer = setTimeout(step, 10);
  };

  useEffect(() => {
    // Optionally, you can handle initial scroll based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      smoothScrollTo(hash);
    }
  
  }, []);

  const handleScrollTo = (targetId) => {
 setTimeout(()=>{
  smoothScrollTo(targetId);
 },100)
  
  };
  return (
    <div className='Feature-section' id='box'>
      <div className='Feature-header'>Training Modules</div>
        <div className="Feature-section-container">
            <div className='Feature'><div className='Feature-img'><img src={im1} alt="" /></div><div className='Feature-content'>Stage 1 Module</div><div className='Box-circle'><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='Feature-img'><img src={im2} alt="" /></div><div className='Feature-content'>Psychology Module</div><div className='Box-circle'><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='Feature-img'><img src={im3} alt="" /></div><div className='Feature-content'>Group Task</div><div className='Box-circle'><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='Feature-img'><img src={im11} alt="" /></div><div className='Feature-content'>Personal Interview</div><div className='Box-circle'><FaArrowRightLong className='rotate-45'/></div></div>
        </div>
       <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}> <div className='enroll' style={{cursor:"pointer"}} onClick={()=>{setenroll(true); handleScrollTo('enroll');}}>Enroll now</div></div>
    </div>
  )
}

export default Feature