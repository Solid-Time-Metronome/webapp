import './tempoDropdown.style.css'

export default function TempoDropdown ({ onTempoSelect }) {

    return (
        <>
            <label>Tempo</label>
            <input 
                type='number'
                defaultValue='60'
                onInput={ onTempoSelect }
            ></input>
        </>
    )
}