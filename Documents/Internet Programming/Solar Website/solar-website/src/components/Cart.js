import React, { useContext ,useEffect} from 'react';
import { myContext } from '../Context/MyContextFile';
import { Link } from 'react-router-dom';

 export let finalPrice = 0;
let CartArray = new Array();
export const PutInCart = (myObj) => {
  finalPrice = finalPrice + (myObj.price)*(myObj.quantity);
  CartArray.push(myObj);
  console.log(CartArray);
  console.log('Hello putinCart' + myObj);
}

const deleteItem = ()=>{
  CartArray.pop();
  console.log(CartArray);
  let updatedArr = CartArray.map((element) => {

     <div className="col-md-3 shadow m-2 d-flex flex-column singleItem" >

      <img src={element.image} className='m-auto' style={{ width: '250px', height: '250px' }} />
      <b>{element.name}</b>
      <h4 style={{ color: 'red' }}>₹{element.price}x{element.quantity}={(element.price)*(element.quantity)}</h4>
      <p className='primary'>Quantity : {element.quantity}</p>
      <button id='deleteItem' onClick={deleteItem} style={{background:'none',border:'none'}}><i class="fa fa-2x fa-trash" aria-hidden="true"></i></button>
    </div>



  })
}


function Cart() {

  const itemsInCart = useContext(myContext);

  useEffect(() => {
   console.log("Hello I AM CHANGING!!!!!!")
  }, [CartArray])

 


  return (
    <>
      <div className='Cart row'>

        
        {

          CartArray.map((element) => {

            return <div className="col-md-3 shadow m-2 d-flex flex-column singleItem" >

              <img src={element.image} className='m-auto' style={{ width: '250px', height: '250px' }} />
              <b>{element.name}</b>
              <h4 style={{ color: 'red' }}>₹{element.price}x{element.quantity}={(element.price)*(element.quantity)}</h4>
              <p className='primary'>Quantity : {element.quantity}</p>
              <button id='deleteItem' onClick={deleteItem} style={{background:'none',border:'none'}}><i class="fa fa-2x fa-trash" aria-hidden="true"></i></button>
            </div>



          })}


      </div>
      <div id='price-details' className='shadow-sm'>
        <h2>Price Details:</h2>
        <br/>
        <hr/>
        <p id='finalPrice'>
          <span>Price :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ₹ {finalPrice} </span><br/>
          <span>Discount :  &nbsp; &nbsp; &nbsp; ₹ {finalPrice*0.1}</span> <br/>
          <span>Delivery Charges :  &nbsp; &nbsp; &nbsp; FREE</span> <br/>
          <hr/>
          <span>Total Amount : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₹  {finalPrice - finalPrice*0.1}</span>
        
        </p>
        
      </div>

      <Link to='/checkout'><button className='btn btn-success w-25 m-3 checkout'>Checkout</button></Link>
      
    </>
  )
}

export default Cart;

