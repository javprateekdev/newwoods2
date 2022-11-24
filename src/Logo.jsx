import React from 'react';

import {Box,styled} from '@mui/material';


const PlusImage = styled('img')({
    float:'left',
    width:'15%',
    padding :'10px 0 5px 0'

})


const Logo = () => {
  return (
   

    < PlusImage src={"https://w7.pngwing.com/pngs/1003/287/png-transparent-godrej-group-logo-advertising-godrej-properties-limited-business-mattresse-furniture-company-text-thumbnail.png"} className="logo" alt="logo"  />

   
        
   
  )
}

export default Logo