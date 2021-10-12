import React, { useEffect,useState } from 'react'
import './Navbar.css'
import ShopItem from './ShopItem.js';
import Button from '@mui/material/Button';

export default function Shop(props) {

    const [getItems, setGetItems] = useState([]);
   
    useEffect( async() => {
        
        let url = 'http://3.20.236.62/api/products/?page=1';
        let data = await fetch(url);
        let parsedData = await data.json();
        setGetItems(parsedData.Products);
        console.log(parsedData);
       
    },[])

    

    
    





    return (
        <>
            <h1 style={{ margin: '20px' }}>MySolar Shop</h1>
            <Button variant="outlined" color="secondary" className='m-5'>Solar Panels</Button>
            <Button variant="outlined" color="secondary" className='m-5'>Solar Invertors</Button>
            <Button variant="outlined" color="secondary" className='m-5'>Wires and Connectors</Button>
            <Button variant="outlined" color="secondary" className='m-5'>Solar Kits</Button>
           

            {getItems.map((element)=>{


              return   <div className="row" id='ShopItem'>
                    <ShopItem key={element.id} id={element.id} name={element.name} img={element.image} brand={element.brand} price={element.price} details={element.details} />
                    </div>
                })}

            


        </>
    )
}
