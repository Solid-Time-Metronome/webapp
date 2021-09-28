import styles from './Volume.module.css'
import PropTypes from 'prop-types'
export default function Volume ({ countbeat, beats }) {
  const voulumeArr = [...Array(parseInt(beats)).keys()]
  const cleanBeat = Math.floor(countbeat)
  const measureBeat = ((cleanBeat - 1) % beats) + 1
  const topdata = []
  for (let i = 1; i <= measureBeat; i++) {
    topdata.push(i)
  }
  return (
    <div className={styles.volumewrapper}>
      <div >
        {voulumeArr.map((item) => (
          <input className={styles.volumes} type='range' min='0' max='1' step='0.1' key={item} defaultValue='0.5'/>
          
        ))}
      </div>
  
    </div>
  )
}
Volume.propTypes = {
  beats: PropTypes.number,
  countbeat: PropTypes.number
}
