import React from 'react';
import { Grid ,styled} from '@mui/material';
import ImageSlider from './ImageSlider';
import images from "./images";
import ContactPage from './ContactPage';
import Banner from './Banner';
import Features from './Features';
import Price from './Price';
import Floorplan from "./Floorplan";
import Location from "./Location";
import Ammenities from "./Ammenities";
import YoutubeEmbed from "./Video";
import Footer from './Footer';
import GuestFooter from './GuestFooter';
import Corner from './Corner';
import Planslider from './Planslider';
import Fade from './Fade';
import Contact from './Contact';




const Gmain = () => {

  const NoWrap = styled('div')(({ theme }) => ({ 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
  return (
    <div>
<Grid container lg={12} xs={12} xm={12} sm={12} spacing={2} style={{marginTop:'50px'}}>

  <Grid item lg={8} xs={12} xm={12} sm={12} >
  <ImageSlider images={images} />
   <Banner />
  <Corner/>
  <Features />                                                                                        
  <Floorplan />
   <Location />
   <Ammenities />
  <YoutubeEmbed />
  <Grid item lg={4} xs={0} xm={0} sm={0} >
  < NoWrap className="sidebar" style={{height:'75%'}}>
  <Contact/>
  </ NoWrap>
  </Grid>
  <GuestFooter /> 
  </Grid>
    
</Grid>


    </div>
  )
}

export default Gmain;  