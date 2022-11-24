import React from 'react';
import Ammenitiesimages from './Ammenitiesimages';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Ammenities = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
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
  
  return (
    <>
    <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'45px',margin:'30px 10px 30px 5px'}}>Godrej Woods, Sector 43, Noida :Amenities</h2>
    <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
   
    
        {Ammenitiesimages.map((item) => (
            
           <div style={{height:'250px'}}>
              <img src={item.src} style={{height:'150px',width:'80px',margin:'1px'}}/>
              <h6>{item.text}</h6>
              </div>  
        ))
              }
               

    
    </Carousel>
    </>
    
  )
}

export default Ammenities;