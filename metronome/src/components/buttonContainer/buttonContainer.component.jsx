import StartButton from '../startButton/startButton.component';
import StopButton from '../stopButton/stopButton.component';
import styles from './buttonContainer.module.css';

 const ButtonContainer =({onStartClick, onStopClick})=> {
    return (
        <div className={styles.buttonContainer}>
            <StartButton onStartClick={onStartClick}/>
            <StopButton onStopClick={onStopClick} />
        </div>
    )
}

export default ButtonContainer