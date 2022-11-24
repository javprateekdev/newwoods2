import React from 'react';
import  FloorPlanDialog  from './FloorPlanDialog';
import {styled}  from  '@mui/material';
import Grid from '@mui/material/Grid';

const Floorplan = () => {

    const Wrapper = styled('div')(({ theme }) => ({ 
  
        [theme.breakpoints.down('sm')]: {
            displayWrap: 'block',
        }
      }));
    
   
  return (
    <>
    
  
    <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'45px'}}>Godrej Woods:Floor</h2>
  
    
       
        
   

   


        <div className='flex-container '>
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
                <button className='btncheck'><FloorPlanDialog /></button>
                
            </div>
           
        
          
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/GV701YK.jpg'  className='planimage' />
                <button className='btncheck'><FloorPlanDialog /></button>
            </div>
          
        </div >
       
          
        
        <div className='floorplan'>
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/ykZj235.jpg' className='planimage'/>
                <button className='btncheck'><FloorPlanDialog /></button>
            </div>
            <div style={{position:'relative'}}>
                <img src='https://i.imgur.com/sFgsN4O.jpg'  className='planimage'/>
                <button className='btncheck' ><FloorPlanDialog /></button>
            </div>
        </div>
       
        
      
    </>
    
  )
}

export default Floorplan;