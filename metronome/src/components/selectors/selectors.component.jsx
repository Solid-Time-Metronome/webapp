
import TempoDropdown from '../tempoDropdown/tempoDropdown.components'
import TimeSignatureDropdown from '../timeSignatureDropdown/timeSignatureDropdown.component'
import './selectors.style.css'

export default function Selectors () {
    return(
        <div className="container">
            <TempoDropdown />
            <TimeSignatureDropdown />
        </div>
    )
}