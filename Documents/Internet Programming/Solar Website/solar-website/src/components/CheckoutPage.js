import React, { useEffect } from 'react'
import {finalPrice} from './Cart'


function CheckoutPage(props) {

    useEffect(() => {
        setTimeout(() => {
            props.setProgress(50);
            props.setProgress(100);
        }, 100);

    }, [])

    const payNow =()=>{
        let number = document.getElementById('number').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let amount = (finalPrice - finalPrice * 0.1).toString();

        // console.log("Number :"+number);;
        // console.log("Name :"+name);
        // console.log("Email :"+email);
        // console.log("Address : "+address);

        let dict ={
            number :number,
            name : name,
            email : email,
            address : address,
            amount : amount
        }

       

        // console.log(dict);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(dict)
        };
        fetch('http://3.20.236.62/api/payment/', requestOptions)
            .then(async response =>await response.json())
            
            .catch(error => {
                console.error('There was an error!', error);
            })
            .then(data =>console.log(data))

        
            
    


    }

    

    return (
        <>
            <h1 style={{margin:'15px'}}>Checkout &rarr;</h1>
            <form>

            <div id='mainContainer'>
                <div id='detailsForm'>
                    <header><i class="fa fa-user"></i>&nbsp; BILLING INFORMATION</header>
                    <label>Mobile Number * :</label><br />
                    <select id='contactNum' style={{ width: '100px' }}>
                        <option value="volvo" style={{ height: '30px' }}>+91</option>
                    </select>
                    <input type='text' id='number' minLength='10' maxLength='10' required />
                    <label>Full Name * : </label>
                    <input type="text" id='name' required/>
                    <label>EMAIL * : </label>
                    <input type="email" id='email' required/>
                    <label>Address * : </label>
                    <textarea type='address' id='address' required></textarea>
                    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }} >
                        <section>
                            <label>Pincode * : </label>
                            <input style={{ width: '180px', float: 'left' }} type="text" minLength='6' required/>
                        </section>
                        <section>
                            <label >City * : </label>
                            <input style={{ width: '180px', float: 'left' }} type="text" required/>
                        </section>
                    </div>
                    <label>Select State * : </label>
                    <select name="state" id="state" class="form-control" required>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>6
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    
                </div>
                <div id='payment'>
                    
                    <header><i class="fa fa-credit-card"></i>&nbsp; PAYMENT METHOD</header>
                    <p>
                        Please select the preferred payment method to use on this order.
                    </p>
                    <input type='radio' required/> Online Payment
                </div>
                <div id='summary'>
                    <header><i class="fa fa-shopping-bag"></i>&nbsp; CHECKOUT</header>
                    <div id='checkoutPrice' className='shadow-sm'>
                        <h2>Price Details:</h2>
                        <br />
                        <hr />
                        <p id='priceBox'>
                            <span>Price :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ₹ {finalPrice} </span><br />
                            <span>Discount :  &nbsp; &nbsp; &nbsp; ₹ {finalPrice * 0.1}</span> <br />
                            <span>Delivery Charges :  FREE</span> <br />
                            <hr />
                            <span>Total Amount : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ₹  {finalPrice - 
                            finalPrice * 0.1}</span>

                        </p>

                    </div>
                    <button id='payNow-btn' type='button'  onClick={payNow}><header><i class="fa fa-credit-card"></i>&nbsp; PAY NOW</header></button>
                    


                </div>
                

            </div>
            </form>
        </>
    )
}

export default CheckoutPage
