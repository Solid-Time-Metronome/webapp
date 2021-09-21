import styles from './showBeats.module.css'
import PropTypes from 'prop-types'

export default function ShowBeats ({ countbeat, beats, BPM }) {
  beats = 4// should be the input
  const cleanBeat = Math.floor(countbeat || 0)
  const measureBeat = ((cleanBeat - 1) % beats) + 1
  return (
      <div className={styles.showbeat}>
       <span className={BPM ? `${styles.big}` : `${styles.small}`}>{measureBeat}</span>
      </div>
  )
}
ShowBeats.propTypes = {
  beats: PropTypes.number,
  countbeat: PropTypes.number,
  BPM: PropTypes.number
}
