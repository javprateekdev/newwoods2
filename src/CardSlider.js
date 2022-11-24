import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
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
    
        <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
      <div>
      <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
      <div>
      <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
      <div>
      <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
      <div>
      <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
      <div>
      <h3>2BHK</h3>
        <h4>Carpet Area 612.25 - 777.47 sq.ft</h4>
        <h4>₹ 1.56 - 2.08 Cr + Govt. Charges</h4>
      </div>
    </Slider>
  );
}