import './timeSignatureDropdown.style.css'

export default function TimeSignatureDropdown () {
    return (
        <>
            <label>Beats Per Measure</label>
            <select>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <optin value="9">9</optin>
            </select>
        </>
    )
}