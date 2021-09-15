import styles from './stopButton.module.css'
import React from 'react'
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
