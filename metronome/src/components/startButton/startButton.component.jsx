import styles from "./startButton.module.css";

const StartButton = ({onStartClick}) => {
	return (
		
			<button onClick={onStartClick}
            className={styles.btn}
            >Start</button>
		
	);
};

export default StartButton;
