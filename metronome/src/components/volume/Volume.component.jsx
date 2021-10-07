import styles from './Volume.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
export default function Volume({ countbeat, beats, setCurrentvolume, currentvolume }) {
  const [instantVolume, setInstantVolume] = useState({ currentvolume0: 5 })
  const [volumevalue, setVolumevalue] = useState([5])
  const voulumeArr = [...Array(parseInt(beats)).keys()]
  const cleanBeat = Math.floor(countbeat)
  const measureBeat = ((cleanBeat - 1) % beats) + 1
  useEffect(() => {
    const tem = []

    for (let i = 0; i < measureBeat; i++) {


      if (Object.keys(instantVolume)[i] === `currentvolume${i}`) {
        setCurrentvolume(Object.values(instantVolume)[i] / 10)

      } else {
        setCurrentvolume(Object.values(instantVolume)[0] / 10)
      }
      tem.push(Object.values(instantVolume)[i])
    }
    setVolumevalue(tem)
  }, [countbeat, instantVolume])
  console.log(volumevalue)
  return (
    <form className={styles.volumewrapper}>

      {voulumeArr.map((item) => (
        <input
          className={styles.volumes}
          type='range'
          min='0'
          max='10'
          step='1'
          key={item}
          defaultValue='5'
          value={volumevalue[item]}
          name={`currentvolume${item}`}
          onChange={(e) => setInstantVolume(prevState => ({ ...prevState, [e.target.name]: e.target.value }))}
        />
      ))}
    </form>
  )
}
Volume.propTypes = {
  beats: PropTypes.number,
  countbeat: PropTypes.number,
  setCurrentvolume: PropTypes.func
}
