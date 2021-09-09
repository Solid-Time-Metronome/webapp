import React from "react";
import Visualize from "../../components/visualize/visualize.component";
import Logo from "../../components/logo/logo.component";
import Selectors from "../../components/selectors/selectors.component";
import ButtonContainer from "../../components/buttonContainer/buttonContainer.component";

import './main.style.css';

export default function Main () {
    return (
      <div>
        <Logo />
        <Visualize />
        <ButtonContainer />
        <Selectors />
      </div>  
    )
}