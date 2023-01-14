import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function cart(prop) {
  return (
   
            <div>
                <div className='cart'>
                   <img className='rounded-2' src={prop.image} alt="" /> 
                   <p>{prop.explain}    <span className='cartP'>Alışverişe Başla > </span> </p>
                </div>
            </div>
      
  )
}

export default cart