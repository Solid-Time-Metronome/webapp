import TempoDropdown from "../tempoDropdown/tempoDropdown.components";
import TimeSignatureDropdown from "../timeSignatureDropdown/timeSignatureDropdown.component";
import "./selectorsContainer.style.css";

export default function SelectorsContainer({ onTempoSelect, onBPMSelect }) {
  return (
    <div className="selectorsContainer">
      <TempoDropdown onTempoSelect={onTempoSelect} />
      <TimeSignatureDropdown onBPMSelect={onBPMSelect} />
    </div>
  );
}
