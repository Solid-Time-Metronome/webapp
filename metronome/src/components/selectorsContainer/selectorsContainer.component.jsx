import TempoDropdown from '../tempoDropdown/tempoDropdown.components'
import TimeSignatureDropdown from '../timeSignatureDropdown/timeSignatureDropdown.component'
import './selectorsContainer.style.css'
import PropTypes from 'prop-types'

export default function SelectorsContainer ({ onTempoSelect, onBPMSelect }) {
  return (
    <div className="selectorsContainer">
      <TempoDropdown onTempoSelect={onTempoSelect} />
      <TimeSignatureDropdown onBPMSelect={onBPMSelect} />
    </div>
  )
}

SelectorsContainer.propTypes = {
  onTempoSelect: PropTypes.func,
  onBPMSelect: PropTypes.func
}
