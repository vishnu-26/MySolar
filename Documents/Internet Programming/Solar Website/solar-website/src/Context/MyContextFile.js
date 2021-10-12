import React,{ createContext,useState }  from "react";

export const myContext = createContext();

const AllState = (props)=>{
    
    const [cartNum, setCartNum] = useState(0);

    return(
        <myContext.Provider value={{cartNum:cartNum,setCartNum:setCartNum}}>
            {props.children}
        </myContext.Provider>
    )


}

export default AllState;



