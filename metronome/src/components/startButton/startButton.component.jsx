import styles from './startButton.module.css'
import React from 'react'
import PropTypes from 'prop-types'

const StartButton = ({ onStartClick }) => {
  return (
    <button onClick={onStartClick} className={styles.btn}>
      Start
    </button>
  )
}

StartButton.propTypes = {
  onStartClick: PropTypes.func
}

export default StartButton
