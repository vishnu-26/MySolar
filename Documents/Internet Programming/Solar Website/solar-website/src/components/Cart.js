import React, { useContext } from 'react';
import { myContext } from '../Context/MyContextFile';

let myID;
let CartArray = new Array();
export const PutInCart = (id) => {
  myID = id;
  CartArray.push(id);
  console.log(CartArray);
  console.log('Hello putinCart with id' + myID);
}





function Cart() {

  const itemsInCart = useContext(myContext);


  return (
    <div className='Cart'>
      {
        itemsInCart.getItems.map((element,index) => {
         
            return <div className="row">
              {CartArray[index]===myID && <h1></h1>}
            </div>

           




        })}








    </div>
  )
}

export default Cart;

