import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ( ) => 


 
(
    
  <div className="video" id='Tour'>
    <h2 style={{textAlign:'center',background:'#015b51',borderRadius:'5px',color:'white',height:'45px',margin:'20px 10px 20px 50px'}}>Video Presentation of Godrej Woods, Sector 43, Noida </h2>
    <iframe width="900" height="350"
      
      src={`https://www.youtube.com/embed/z0avNg3bDks`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;