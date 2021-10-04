import styles from './stopButton.module.css'
import PropTypes from 'prop-types'

const StopButton = ({ onStopClick }) => {
  return (
    <button onClick={onStopClick} className={styles.btn}>
      Stop
    </button>
  )
}

StopButton.propTypes = {
  onStopClick: PropTypes.func
}

export default StopButton
