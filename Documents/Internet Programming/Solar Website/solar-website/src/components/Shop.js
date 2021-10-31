import React, { useEffect,useState,useContext } from 'react'
import './Navbar.css'
import ShopItem from './ShopItem.js';
import Button from '@mui/material/Button';
import Spinner from '../Spinner';
import { myContext } from '../Context/MyContextFile';

export default function Shop(props) {

    
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);

    const items = useContext(myContext);
   
   
    useEffect( async() => {
        
        setLoading(true);
        props.setProgress(30);
        console.log("PROGRESS NO = "+items.progress);
        let url =` http://3.20.236.62/api/products/?page=${pageNo}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false);
        items.setGetItems(parsedData.Products);
        props.setProgress(100);
        props.setProgress(0);
        
        // console.log(parsedData);
       
    },[pageNo])

    const showPanels =()=>{
        setPageNo(1);
        console.log('hello Panels');
    }
    const showInvertors =()=>{
        setPageNo(2);
        console.log('hello invertors');
    }
    const showConnectors =()=>{
        setPageNo(3);
        console.log('hello connectors');
    }
    const showKits =()=>{
        setPageNo(4);
        console.log('hello kits');
    }

    
    return (
        <>
            <h1 style={{ margin: '20px' }}>MySolar Shop</h1>
           
            <Button variant="outlined" onClick={showPanels} color="secondary" className='m-5'>Solar Panels</Button>
            <Button variant="outlined" onClick={showInvertors} color="secondary" className='m-5'>Solar Invertors</Button>
            <Button variant="outlined" onClick={showConnectors} color="secondary" className='m-5'>Wires and Connectors</Button>
            <Button variant="outlined" onClick={showKits} color="secondary" className='m-5'>Solar Kits</Button>
           
            {loading && <Spinner/>}

            {items.getItems.map((element)=>{


              return   <div className="row" id='ShopItem'>
                    <ShopItem type={element.product_type} id={element._id} name={element.name} img={element.image} brand={element.brand} price={element.price} details={element.details} components={element.components} />
                    </div>
                })}

            


        </>
    )
}
