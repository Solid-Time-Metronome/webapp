import React from 'react'
import StartButton from '../startButton/startButton.component'
import StopButton from '../stopButton/stopButton.component'
import styles from './buttonContainer.module.css'
import PropTypes from 'prop-types'

const ButtonContainer = ({ onStartClick, onStopClick }) => {
  return (
        <div className={styles.buttonContainer}>
            <StartButton onStartClick={onStartClick}/>
            <StopButton onStopClick={onStopClick} />
        </div>
  )
}

ButtonContainer.propTypes = {
  onStartClick: PropTypes.func,
  onStopClick: PropTypes.func
}

export default ButtonContainer
