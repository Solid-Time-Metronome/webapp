import styles from './tempoDropdown.module.css'
import PropTypes from 'prop-types'

export default function TempoDropdown ({ onTempoSelect }) {
  let dropDownTempo
  return (
    <section className={styles.tempo}>
      <label>Select Tempo:  </label>
      <input
        type="number"
        defaultValue="100"
        min="40"
        max="300"
        onInput={(e) => {
          e.preventDefault()
          dropDownTempo = e.target.value
          onTempoSelect(dropDownTempo)
        }}
      ></input>
    </section>
  )
}

TempoDropdown.propTypes = {
  onTempoSelect: PropTypes.func
}
