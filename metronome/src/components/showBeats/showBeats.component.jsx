import  React  from 'react'
import styles from './showBeats.module.css';
import PropTypes from 'prop-types';

export default function ShowBeats({countbeat,beats}) {
  beats = 6;//should be the input
  var data1=[]
  var data2=[...Array(beats).keys()];
  var cleanBeat = Math.floor(countbeat?countbeat:0);
  var measureBeat = ((cleanBeat - 1) % beats) + 1;
 for (let i =1; i <= measureBeat;i++){
   data1.push(i);
  }   
  return (
    <div className={styles.showbeats}>
    <div className={styles.child1}>
      {data1.map((item) => (
        <span className={styles.showbeat1} key={item}></span>
      ))}    
    </div>
    <div className={styles.child2}>
      {data2.map((item) => (
        <span className={styles.showbeat2} key={item}></span>  
      ))}
    </div>
  </div>
  );
}
ShowBeats.propTypes = {
  beats: PropTypes.number,
  countbeat: PropTypes.number,
}