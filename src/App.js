import images from "./images";
import ImageSlider from "./ImageSlider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'

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
import Main from "./Main";
import {Box} from '@mui/material';
import Thankyou from "./Thankyou";
import Footer from  './Footer';
import Gmain from "./Gmain";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <MHeader />

          <Box style={{marginTop:0}}>
            <Routes>
              <Route path= '/' element={<Gmain/>} />
              <Route path= '/Thankyou' element={<Thankyou/>} />
            </Routes>
          </Box>


    </BrowserRouter>
    

    </>
    
  )
}
  
export default App;