import styles from "./visualize.module.css";
import { useState, useEffect } from "react";
import ButtonContainer from "../../components/buttonContainer/buttonContainer.component";
import audio from "../../assets/sounds/highClick.mp3";
import SelectorsContainer from "../selectorsContainer/selectorsContainer.component";

const Visualize = () => {
  //starting blinking state
  const [isActive, setIsActive] = useState(false); //timer state
  const [isBlinking, setIsBlinking] = useState(false); //color change state
  const [tempo, setTempo] = useState(60); // sets tempo (speed) of metronome.

  //need to figure out the math for the bpm and the duration of each beat.

  const time = 1000; //current set to 1 sec

  // beats per minute (BPM) is how many beats in one minute, or 60 seconds / tempo
  const BPM = (time * 60) / tempo;

  useEffect(() => {
    let id;

    if (isActive === true) {
      id = setInterval(() => {
        new Audio(audio).play();
        setIsBlinking(!isBlinking);
      }, BPM);
    }

    return () => clearInterval(id); // clears timer and stops metrnome
  }, [isActive, BPM, isBlinking]);

  //start timer function
  const onStartClick = () => {
    console.log("start");
    setIsActive(true);
  };
  //stop timer function
  const onStopClick = () => {
    console.log("stop");
    setIsActive(false);
  };

  const onTempoSelect = () => {
    console.log("onTempoSelect Function");
	
  };

  const onBPMSelect = () => {
    console.log("onBPMSelect");
  };

  return (
    <>
      <div className={styles.visualizeContainer}>
        <h1 className={isBlinking ? `${styles.green}` : `${styles.red}`}>
          Metronome Visualization
        </h1>
      </div>
      <ButtonContainer onStartClick={onStartClick} onStopClick={onStopClick} />
      <SelectorsContainer
        onTempoSelect={onTempoSelect}
        onBPMSelect={onBPMSelect}
      />
    </>
  );
};

export default Visualize;
