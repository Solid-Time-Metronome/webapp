import StartButton from '../startButton/startButton.component';
import StopButton from '../stopButton/stopButton.component';
import './buttonContainer.style.css';

export default function ButtonContainer () {
    return (
        <div className='buttonContainer'>
            <StartButton />
            <StopButton />
        </div>
    )
}