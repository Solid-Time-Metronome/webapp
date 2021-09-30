import styles from './Volume.module.css'
import PropTypes from 'prop-types'
export default function Volume ({ setCurrentvolume, beats }) {
  const voulumeArr = [...Array(parseInt(beats)).keys()]
  return (
    <div className={styles.volumewrapper}>
      <div >
        {voulumeArr.map((item) => (
          <input className={styles.volumes}type='range'min='0'max='1'step='0.1'key={item}defaultValue='0.5'onChange={(e) => setCurrentvolume(e.target.value)}/>
        ))}
      </div>
    </div>
  )
}
Volume.propTypes = {
  beats: PropTypes.number,
  setCurrentvolume: PropTypes.func
}