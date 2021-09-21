import styles from './showBeats.module.css'
import PropTypes from 'prop-types'
export default function ShowBeats ({ countbeat, beats }) {
  beats = 6// should be the input
  const overlaydata = [...Array(beats).keys()]
  const cleanBeat = Math.floor(countbeat)
  const measureBeat = ((cleanBeat - 1) % beats) + 1
  const topdata = []
  for (let i = 1; i <= measureBeat; i++) {
    topdata.push(i)
  }
  return (
    <div className={styles.wrapper}>
    <div className={styles.showbeats}>
      <div className={styles.overlay1}>
        {topdata.map((item) => (
          <span className={styles.showbeat1} key={item}></span>
        ))}
      </div>
      <div className={styles.overlay2}>
        {overlaydata.map((item) => (
          <span className={styles.showbeat2} key={item}></span>
        ))}
      </div>
    </div>
    </div>
  )
}
ShowBeats.propTypes = {
  beats: PropTypes.number,
  countbeat: PropTypes.number
}
