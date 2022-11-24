import React from 'react';
import Logo from './Logo'
import {styled,Button} from '@mui/material';


const PlusImage = styled('img')({
    float:'left',
    width:'15%',
    padding :'10px 0 5px 0'

})



const Header = () => {
  return (
    <div className='header'>
        <div><img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/conglomerate-companies/godrej-logo.png" style={{height:"100%",width:"100%"}}/></div>
       <div><Button variant="contained">Home</Button></div>
       <div><Button variant="contained">Price</Button></div>
       <div><Button variant="contained">Site & Floor Plan</Button></div>
       <div><Button variant="contained">Amenities</Button></div>
       <div><Button variant="contained">Gallery</Button></div>
       <div><Button variant="contained">Location</Button></div>
    </div>
  )
}

export default Header;