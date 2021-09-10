import styles from "./visualize.module.css";
import { useState, useEffect } from "react";
import ButtonContainer from "../../components/buttonContainer/buttonContainer.component";
import audio from "../../assets/sounds/highClick.mp3";

const Visualize = () => {
	//starting blinking state
	const [isActive, setIsActive] = useState(false); //timer state
	const [isBlinking, setIsBlinking] = useState(false); //color change state

	//need to figure out the math for the bpm and the duration of each beat.

	const time = 1000; //current set to 1 sec

	useEffect(() => {
		let id;

		if (isActive === true) {
			id = setInterval(() => {
				//console.log(`${isBlinking}`);
				setIsBlinking(!isBlinking); //toggle true and false
				if (isBlinking === true) {
					new Audio(audio).play();
				}
			}, time);
		}

		return () => clearInterval(id);
	}, [isActive, isBlinking]);

	//start timer function
	const onStartClick = () => {
		console.log("start");
		setIsActive(true);
	};
	//stop timer function
	const onStopClick = () => {
		console.log("stop");
		setIsActive(false);
	};

	return (
		<>
			<div className={styles.visualizeContainer}>
				<h1 className={isBlinking ? `${styles.green}` : `${styles.red}`}>
					Metronome Visualization
				</h1>
			</div>
			<ButtonContainer
				onStartClick={onStartClick}
				onStopClick={onStopClick}
			/>
		</>
	);
};

export default Visualize;
