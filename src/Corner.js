import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PriceDialog from "./PriceDialog"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography,styled} from '@mui/material';
import Price from './Price';
import Ammenitiesimages from './Ammenitiesimages';



const Corner = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
  const StyledCard=styled(Card)`
  border-radius:'10px';
  height:250px;
  width:250px
  margin:10px
  `
  return (
    <div>
      <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'45px',margin:'30px 10px 30px 5px'}}>Godrej Woods, Price List</h2>
       <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                 //removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-0-px"
            >
                 {Ammenitiesimages.map((item) => (
            
            <div style={{margin:'15px'}}>
               < StyledCard sx={{ minWidth:600 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {item.text}
        </Typography>
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant='contained'>Learn More</Button>
      </CardActions>
    </ StyledCard>
               </div>  
         ))
               }
   
  
  </Carousel>
 
  </div>
  )
}

export default Corner;