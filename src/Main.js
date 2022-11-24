import React from 'react';
import Header from "./Header";
import Contact from "./Contact";
import MHeader from "./MHeader";
import HMap from "./HMap";
import Features from "./Features";

import Floorplan from "./Floorplan";
import Banner from "./Banner";
import Location from "./Location";
import YoutubeEmbed from "./Video";
import Schedule from "./Schedule";
import Disclaimer from "./Disclaimer";
import Ammenities from "./Ammenities";
import images from "./images";
import ImageSlider from "./ImageSlider";
import ContactPage from "./ContactPage";
import Price from './Price';
import {styled}  from  '@mui/material';
import Grid from '@mui/material/Grid';
import DownloadBrochure from './DownloadBrochure';
import Footer from './Footer';


const Main = () => {

  const NoWrap = styled('div')(({ theme }) => ({ 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
const Wrapper = styled('div')(({ theme }) => ({ 
  
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));
  return (
    <>
    <div>
          
          <div style={{display:"flex",marginTop:"50px"}}>
          
             <Wrapper style={{width:"70%",overflow: 'hidden'}}>
             <Grid item xs={8}>
              <ImageSlider images={images} />
              </Grid>
             <NoWrap >
             <Banner />
             </NoWrap >
              <Features />
              <Price />
              <Floorplan />
              <Location />
              <Ammenities />
              <YoutubeEmbed />
              
              
            
             
              </Wrapper>
              
             <NoWrap  className="sidebar" style={{width:"27%",height:'75%'}}>
                <ContactPage />
                <DownloadBrochure />
             
             </NoWrap >
            
             
           
          </div>
          
          <Footer />    
          
           </div>
           
           </>

    
  )
}

export default Main;