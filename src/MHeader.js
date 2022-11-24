import React from 'react';
import {Box,AppBar,styled, Typography,Button} from '@mui/material';
import AnchorLink from "react-anchor-link-smooth-scroll";

const StyledHeader = styled(AppBar)`
    background: #808080;
    height: 55px;
    float:top;
    
`;
const CustomButton = styled(Button)`
    color:'#808080',
    background:'#808080',
    font-size:50px;

    `




const MHeader = () => {
  return (
    <StyledHeader position="fixed"  >
      <div className='mheader'>
        <span><AnchorLink href='#home' style={{textDecoration:'none'}}><img src="https://i.imgur.com/QIW3Mcy.png" /></AnchorLink></span>
      <span><AnchorLink href='#home' style={{textDecoration:'none'}}><CustomButton variant="contained">Home</CustomButton></AnchorLink></span>
   <span><AnchorLink href='#price' style={{textDecoration:'none'}}><button variant="contained">Price</button></AnchorLink></span>
   <span><AnchorLink href='#plan' style={{textDecoration:'none'}}><button variant="contained">Site & Floor Plan</button></AnchorLink></span>
   <span><AnchorLink href='#amenities' style={{textDecoration:'none'}}><button variant="contained">Amenities</button></AnchorLink></span>
   <span><AnchorLink href='#Gallery' style={{textDecoration:'none'}}><button variant="contained">Gallery</button></AnchorLink></span>
   <span><AnchorLink href='#Location' style={{textDecoration:'none'}}><button variant="contained">Location</button></AnchorLink></span>
   <span><AnchorLink href='#Tour' style={{textDecoration:'none'}}><button variant="contained">Virtual Site Tour</button></AnchorLink></span>
   <span><button variant="contained">Brochure</button></span>
   <span >
   <a href="+91-81-3030-6040"><img src='https://i.imgur.com/MSbNOQD.gif' style={{borderRadius:'15px'}} /></a>
 

</span>



      </div>
   
    </StyledHeader>
  )
}

export default MHeader;