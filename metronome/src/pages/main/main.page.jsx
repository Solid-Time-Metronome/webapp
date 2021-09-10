import React from "react";
import Visualize from "../../components/visualize/visualize.component";
import Logo from "../../components/logo/logo.component";
import ButtonContainer from "../../components/buttonContainer/buttonContainer.component";

import './main.style.css';
import SelectorsContainer from "../../components/selectorsContainer/selectorsContainer.component";

export default function Main () {
    return (
      <div>
        <Logo />
        <Visualize />
        
        <SelectorsContainer />
      </div>  
    )
}