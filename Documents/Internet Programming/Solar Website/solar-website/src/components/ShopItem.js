import React,{useState,useContext} from "react";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {myContext} from '../Context/MyContextFile.js';
import './Navbar.css'
import { Link } from "react-router-dom";



function ShopItem(props) {

  const tp = useContext(myContext);
  const [quantity, setQuantity] = useState(1);

  
  const SubQuantity = ()=>{
    setQuantity(quantity-1);
  }

  const AddQuantity = ()=>{
    setQuantity(quantity+1);
  }

  

  let myObj ={
    name : props.name,
    price : props.price,
    image : props.img,
    id :props.id,
    brand : props.brand,
    quantity:quantity
    
  }

  const BuyNow=()=>{
    console.log("Buy Now :"+props.price)
    
  }


  
  return (
    
    <div className='my-3 shadow fullCard'> 

       <img src={props.img} alt='solar item' className='mx-3' style={{width:'250px',height:'250px',float:'left'}}/>
       <div className='ShopCard '>
       <p id='name'>{props.name}</p>
       <p id='price'>₹{props.price}</p>
       {1<=props.id && props.id<=30 && <p id='brand'>Brand : {props.brand.toUpperCase()}</p>}

       {/* DETAILS PAGE - 1 */}
       {1<=props.id && props.id<=10 && <p id='details'>Details : <br/>
       Rated Power Range : MIN : {props.details.rated_power_range.min}  MAX : {props.details.rated_power_range.min} <br/>
       Watt : {props.details.watt}W
       </p>}

       {/* DETAILS PAGE - 2 */}
       {11<=props.id && props.id<=20 && props.id!==17 && props.id!==18 && props.id!==20 && <p id='details'>Details : <br/>
       Power Rating :{props.details.power_rating} <br/> Model No : {props.details.model_no} <br/>
       Phase : {props.details.phase}
       </p>}
       {(props.id===17 || props.id===18 || props.id===20)  && <p id='details'>Details : <br/>
       Power Rating :{props.details.power_rating} <br/> Model No : {props.details.model_no} <br/>
       Weight : {props.details.weight}
       </p>}

       {/* DETAILS PAGE - 3 */}
       {21<=props.id && props.id<=30 && <p id='details'>Details : <br/>
      Size :{props.details.size} <br/> Cable Length : {props.details.cable_length} <br/>
      Working Voltage : {props.details.working_voltage}
       </p>}

       {/* DETAILS PAGE - 4 */}
       {31<=props.id && props.id<=40 && <p id='details'>
         Components : <br/> 1] {props.components[0]} <br/>2] {props.components[1]} <br/>3] {props.components[2]} <br/>
         Details : <br/> i] {props.details[0]} <br/> ii] {props.details[1]} <br/> iii] {props.details[2]}

         </p>}





       <CardActions disableSpacing>
       <IconButton size="small" id='cartBtn'  onClick={()=>tp.AddtoCart(myObj)}>
       <Button variant="contained" id='buyBtn'>Add to Cart &rarr;</Button>
        </IconButton>
        {/* <AddShoppingCartIcon /> */}

        <Button variant="text" id='subBtn' variant="outlined" size="large" className='mx-2' onClick={SubQuantity}>-</Button>
         {quantity}
        <Button variant="text" id='addBtn'variant="outlined" size="large" className='mx-2' onClick={AddQuantity}>+</Button>


        <Link to='/checkout'><Button onClick={BuyNow} variant="contained" id='buyBtn'>BUY NOW</Button></Link>
        </CardActions>
       </div>
    </div>
  )
}

export default ShopItem
