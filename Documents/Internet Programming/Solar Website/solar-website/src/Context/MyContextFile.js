import React,{ createContext,useState,useEffect }  from "react";
import { PutInCart } from "../components/Cart";

export const myContext = createContext();

const AllState = (props)=>{

    
    const [cartNum, setCartNum] = useState(0);
    const [getItems, setGetItems] = useState([]);
    
    

    const AddtoCart = (myObj) =>{
        setCartNum((cartNum + 1)); //Have to Add Quantity in Cart
        // localStorage.setItem("cartNum", cartNum);
        console.log(cartNum);
        console.log(myObj);
        PutInCart(myObj);
        }
        
    
  
    return(
        <myContext.Provider value={{cartNum,setCartNum,getItems,setGetItems,AddtoCart}}>
            {props.children}
        </myContext.Provider>
    )


}

export default AllState;



