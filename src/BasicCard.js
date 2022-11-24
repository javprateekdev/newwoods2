import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
 const BasicCard = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <div style={{height:'50px',width:'250px',background:'#49512561',borderRadius:'10px'}}>2 BHK Apartment</div>
            <div style={{height:'50px',width:'250px'}}>Carpet Area 612.25 - 777.47 sq.ft.</div>
            <div>₹ 1.56 - 2.08 Cr + Govt. Charges</div>
          </div>
          <div style={{height:'350px',width:'250px'}}>
            <div>2 BHK Apartment</div>
            <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
            <div>₹ 1.56 - 2.08 Cr + Govt. Charges</div>
          </div>
          <div style={{height:'350px',width:'250px'}}>
            <div>2 BHK Apartment</div>
            <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
            <div>₹ 1.56 - 2.08 Cr + Govt. Charges</div>
          </div>
          <div style={{height:'350px',width:'250px'}}>
            <div>2 BHK Apartment</div>
            <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
            <div>₹ 1.56 - 2.08 Cr + Govt. Charges</div>
          </div>
        </Slider>
      );
    }
 
 export default BasicCard;