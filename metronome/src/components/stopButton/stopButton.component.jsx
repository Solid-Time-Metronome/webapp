import styles from "./stopButton.module.css";

const StopButton = ({ onStopClick }) => {
	return (
		<button onClick={onStopClick} className={styles.btn}>
			Stop
		</button>
	);
};

export default StopButton;
