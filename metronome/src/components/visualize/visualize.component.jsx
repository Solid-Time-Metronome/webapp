import styles from './visualize.module.css'
import { useState, useEffect } from 'react'
import ButtonContainer from '../../components/buttonContainer/buttonContainer.component'
import audio from '../../assets/sounds/highClick.mp3'
import SelectorsContainer from '../selectorsContainer/selectorsContainer.component'
import ShowBeats from '../showBeats/showBeats.component'
const Visualize = () => {
  // starting blinking state
  const [isActive, setIsActive] = useState(false) // timer state
  const [isBlinking, setIsBlinking] = useState(false) // color change state
  const [tempo, setTempo] = useState(60) // sets tempo (speed) of metronome.
  const [measureLength, setMeasureLength] = useState(4)

  const [countbeat, setCountbeat] = useState(0)

  // beats per minute (BPM) is how many beats in one minute, or 60 seconds / tempo
  const BPM = (60000) / tempo

  useEffect(() => {
    let id

    if (isActive === true) {
      id = setInterval(() => {
        new Audio(audio).play()
        setCountbeat(countbeat => (countbeat + 1))
        setIsBlinking(!isBlinking)
      }, BPM)
    }

    return () => clearInterval(id) // clears timer and stops metrnome
  }, [isActive, BPM, isBlinking])

  // start timer function
  const onStartClick = () => {
    setIsActive(true)
  }
  // stop timer function
  const onStopClick = () => {
    setIsActive(false)
    setCountbeat(0)
  }

  const onTempoSelect = (dropDownTempo) => {
    setTempo(dropDownTempo)
  }

  const onBPMSelect = (selectMeasure) => {
    setMeasureLength(selectMeasure)
    console.log('onBPMSelect', selectMeasure)
    console.log('Measure Length', measureLength)
  }

  return (
    <>
      <ShowBeats countbeat={countbeat} beats={measureLength}/>
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
  )
}

export default Visualize
