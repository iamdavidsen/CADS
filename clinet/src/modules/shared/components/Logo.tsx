import * as React from 'react'
import {Heading} from "grommet";

const logoStyle: React.CSSProperties = {
    
};

const logoTextStyle: React.CSSProperties = {

};

export const Logo: React.FC<null> = () => {
   return (
       <div style={logoStyle}>
          <Heading style={logoTextStyle}>CADS</Heading>
       </div>
   ) 
};