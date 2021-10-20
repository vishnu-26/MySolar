import React,{useState,useContext} from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {myContext} from '../Context/MyContextFile.js';
import './Navbar.css'


function ShopItem(props) {

  const tp = useContext(myContext);

  

 
 
  const SubQuantity = ()=>{
    tp.setQuantity(tp.quantity-1);
  }

  const AddQuantity = ()=>{
    tp.setQuantity(tp.quantity+1);
  }



  return (
    <div className='my-3 shadow fullCard' > 
       <img src={props.img} alt='solar item' className='mx-3' style={{width:'250px',height:'250px',float:'left'}}/>
       <div className='ShopCard '>
       <p id='name'>{props.name}</p>
       <p id='price'>₹{props.price}</p>
       <p id='brand'>Brand : {props.brand.toUpperCase()}</p>
       <p id='details'>Details :{props.id} <br/>
       

      
       {/* Rated Power Range : MIN : {props.details.rated_power_range.min}  MAX : {props.details.rated_power_range.min} <br/>
       Watt : {props.details.watt}W */}
       </p>
       <CardActions disableSpacing>
       <IconButton size="small" id='cartBtn'  onClick={()=>tp.AddtoCart(props.id)}>
       <Button variant="contained" id='buyBtn'>Add to Cart &rarr;</Button>
        </IconButton>
        {/* <AddShoppingCartIcon /> */}

        <Button variant="text" id='subBtn' variant="outlined" size="large" className='mx-2' onClick={SubQuantity}>-</Button>
         {tp.quantity}
        <Button variant="text" id='addBtn'variant="outlined" size="large" className='mx-2' onClick={AddQuantity}>+</Button>


        <Button variant="contained" id='buyBtn'>BUY NOW</Button>
        </CardActions>
       </div>
    </div>
  )
}

export default ShopItem
