import styles from './timeSignatureDropdown.module.css'
import PropTypes from 'prop-types'

export default function TimeSignatureDropdown ({ onBPMSelect }) {
  let selectMeasure
  return (
    <section className={styles.wrapper}>
      <label>Select Beats Per Measure:  </label>
      <input
        type='number'
        defaultValue='4'
        min='1'
        max='16'
        onInput={ (e) => {
          e.preventDefault()
          selectMeasure = e.target.value
          onBPMSelect(selectMeasure)
        }}
      ></input>
    </section>
  )
}

TimeSignatureDropdown.propTypes = { onBPMSelect: PropTypes.func }
