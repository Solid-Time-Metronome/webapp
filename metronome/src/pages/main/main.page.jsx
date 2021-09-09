import React from "react";
import Visualize from "../../components/visualize/visualize.component";
import Logo from "../../components/logo/logo.component";
import TempoDropdown from "../../components/tempoDropdown/tempoDropdown.components";
import TimeSignatureDropdown from "../../components/timeSignatureDropdown/timeSignatureDropdown.component";
import StartButton from "../../components/startButton/startButton.component";
import StopButton from "../../components/stopButton/stopButton.component";

import './main.style.css';

export default function Main () {
    return (
        <div>
        <Logo />
        <Visualize />
        <div class='buttonContainer'>
          <StartButton />
          <StopButton />
        </div>
        <div class='selectors'>
          <TempoDropdown />
          <TimeSignatureDropdown />
          </div>
      </div>  
    )
}