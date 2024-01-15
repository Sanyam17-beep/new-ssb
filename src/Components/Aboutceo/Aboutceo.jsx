import React from 'react'
import "./style.css"
import im1 from "../../im7.jpg"
import im10 from "../../im10.jpg"
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
function Aboutceo() {
  return (
    <div className='About'  id='about'>
   
   <div className='About-img'>
    <img src={im10} alt="" />
   </div>
   <div className='About-content'>
    <div className='About-content-header'>About Us</div>
    <div className='About-content-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio labore esse voluptatibus explicabo, ea in delectus dicta. Sed vitae nesciunt exercitationem a magni ipsam voluptates necessitatibus expedita repellat doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi suscipit iusto similique voluptate blanditiis eos. Distinctio dignissimos fugiat reprehenderit, deserunt voluptatibus magni voluptas doloribus, sit cum dolorum voluptatum sed. Exercitationem, incidunt quas saepe quidem harum dolor optio voluptas blanditiis.</div>
   </div>
    
</div>
  )
}

export default Aboutceo