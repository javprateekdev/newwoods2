import React from 'react';
import Dialog from  './PriceDialog';
import PriceDialog from './PriceDialog';
const Price = () => {
  return (
    <div id='price'>
    <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'35px'}}>Godrej Woods, Price List</h2>

    <div className='price'>
       <div className='ticketsbox'>
                   <h3>2 BHK</h3>
                   <h5>1053 Square Feet</h5>
                   <h4></h4>
                   <button className='pricebutton'><PriceDialog /></button>   
               </div>
               <div className='ticketsbox'>
                   <h3>2 BHK</h3>
                   <h5>1255 Square Feet</h5>
                   <button className='pricebutton'><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>3 BHK</h3>
                   <h5>1544 Square Feet</h5>
                   <button className='pricebutton' ><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>3 BHK</h3>
                   <h5>2088 Square Feet</h5>
                   <button className='pricebutton'><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>3 BHK+Utility</h3>
                   <h5>2570 Square Feet</h5>
                   <button className='pricebutton'><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>4 BHK</h3>
                   <h5>2258 Square Feet</h5>
                   <button className='pricebutton' ><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>4 BHK+Utility</h3>
                   <h5>3135 Square Feet</h5>
                   <button className='pricebutton'><PriceDialog /></button> 
               </div>
               <div className='ticketsbox'>
                   <h3>5 BHK+Utility</h3>
                   <h5>3756 Square Feet</h5>
                   <button className='pricebutton'><PriceDialog /></button> 
               </div>
           </div>
    </div>
    
  )
}

export default Price;