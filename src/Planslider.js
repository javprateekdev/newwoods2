import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FloorPlanDialog from './FloorPlanDialog'

const Planslider = () => {
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
    <div>
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
<div>
<div style={{position:'relative'}}>
    <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
    <button className='btncheck'><FloorPlanDialog /></button>
</div>
 
 </div>
 <div>
<div style={{position:'relative'}}>
    <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
    <button className='btncheck'><FloorPlanDialog /></button>
</div>
 </div>

 <div> 
<div style={{position:'relative'}}>
    <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
    <button className='btncheck'><FloorPlanDialog /></button>
</div>
 </div>

 <div>
<div style={{position:'relative'}}>
    <img src='https://i.imgur.com/KnjLpbe.jpg'  className='planimage' />
    <button className='btncheck'><FloorPlanDialog /></button>
</div>
 </div>

            </Carousel>

        </div>
   
  )
}

export default Planslider