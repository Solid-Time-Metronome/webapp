import './tempoDropdown.style.css'

export default function TempoDropdown () {
    return (
        <>
            <label>Tempo</label>
            <input 
                type='number'
                defaultValue='60'
            ></input>
        </>
    )
}