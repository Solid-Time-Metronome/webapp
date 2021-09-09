
import TempoDropdown from '../tempoDropdown/tempoDropdown.components'
import TimeSignatureDropdown from '../timeSignatureDropdown/timeSignatureDropdown.component'
import './selectorsContainer.style.css'

export default function SelectorsContainer () {
    return(
        <div className="selectorsContainer">
            <TempoDropdown />
            <TimeSignatureDropdown />
        </div>
    )
}