import React,{ createContext,useState,useEffect }  from "react";
import { PutInCart } from "../components/Cart";

export const myContext = createContext();

const AllState = (props)=>{

   
    const [cartNum, setCartNum] = useState(0);
    const [getItems, setGetItems] = useState([]);
    const [quantity, setQuantity] = useState(1);
    

    const AddtoCart = (id) =>{
        setCartNum((quantity-1)+(cartNum + 1));
        localStorage.setItem("cartNum", cartNum);
        console.log(cartNum);
        console.log(id);
        PutInCart(id);
        }

       

      

    return(
        <myContext.Provider value={{cartNum,setCartNum,getItems,setGetItems,AddtoCart,quantity,setQuantity}}>
            {props.children}
        </myContext.Provider>
    )


}

export default AllState;



