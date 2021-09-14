
  import {DisplayBeat} from './DisplayBeats.style';
  
    export default function DisplayBeats({countbeat,beats,isBlinking}) {
    beats = 4;//should be the input
    var cleanBeat = Math.floor(countbeat?countbeat:0);
    var measureBeat = ((cleanBeat - 1) % beats) + 1;
    return (
      <>
        <DisplayBeat small={isBlinking?true:false}>  
          {measureBeat}
        </DisplayBeat>
      </>
    )
  }
  