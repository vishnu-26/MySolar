import React from "react";
import './Navbar.css'

function ShopItem(props) {
  return (
    <div className='my-3 shadow' > 
       <img src={props.img} alt='solar item' style={{width:'250px',height:'300px',float:'left'}}/>
       <div className='ShopCard'>
       <p id='name'>{props.name}</p>
       <p id='price'>₹{props.price}</p>
       <p id='brand'>Brand : {props.brand.toUpperCase()}</p>
       <p>Details : <br/>
         Color : {props.details.colour} <br/>
         output_power : {props.details.output_power}</p>
       </div>
    </div>
  )
}

export default ShopItem
