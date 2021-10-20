import styles from './visualize.module.css'
import { useState, useEffect } from 'react'
import ButtonContainer from '../../components/buttonContainer/buttonContainer.component'
import audio from '../../assets/sounds/highClick.mp3'
import SelectorsContainer from '../selectorsContainer/selectorsContainer.component'
import Volume from '../volume/Volume.component'
const Visualize = () => {
  // starting blinking state
  const [currentaudio] = useState(new Audio(audio))
  const [isActive, setIsActive] = useState(false) // timer state
  const [isBlinking, setIsBlinking] = useState(false) // color change state
  const [tempo, setTempo] = useState(100) // sets tempo (speed) of metronome.
  const [measureLength, setMeasureLength] = useState(4)
  const [countbeat, setCountbeat] = useState(0)
  const [currentvolume, setCurrentvolume] = useState(0.5)
  const [instantVolume, setInstantVolume] = useState({ currentvolume0: 5 })
  // beats per minute (BPM) is how many beats in one minute, or 60 seconds / tempo
  const BPM = (60000) / tempo

  useEffect(() => {
    let id
    if (isActive === true) {
      id = setInterval(() => {
        currentaudio.play()
        currentaudio.volume = currentvolume
        setCountbeat(countbeat => (countbeat + 1))
        setIsBlinking(!isBlinking)
      }, BPM)
    }

    return () => clearInterval(id) // clears timer and stops metrnome
  }, [isActive, BPM, isBlinking])

  // start timer function
  const onToggleClick = () => {
    setIsActive(!isActive)
  }

  const onTempoSelect = (dropDownTempo) => {
    setTempo(dropDownTempo)
  }

  const onBPMSelect = (selectMeasure) => {
    setMeasureLength(selectMeasure)
    setInstantVolume({ currentvolume0: 5 })
    Array.from(document.querySelectorAll("input[type=range]")).forEach(
      input => (input.value = 5)
    );
    console.log('onBPMSelect', selectMeasure)
    console.log('Measure Length', measureLength)
  }

  return (
    <>
      <div className={styles.visualizeContainer}>
        <h1 className={isBlinking ? `${styles.black}` : `${styles.grey}`}>
          Solid Time Metronome
        </h1>
      </div>
      <Volume
        beats={parseInt(measureLength)}
        countbeat={countbeat}
        setCurrentvolume={setCurrentvolume}
        currentvolume={currentvolume}
        instantVolume={instantVolume}
        setInstantVolume={setInstantVolume}
      />

      <ButtonContainer onToggleClick={onToggleClick} />
      <SelectorsContainer
        onTempoSelect={onTempoSelect}
        onBPMSelect={onBPMSelect}
      />
    </>
  )
}

export default Visualize
