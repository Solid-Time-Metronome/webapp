import PropTypes from 'prop-types'

export default function TimeSignatureDropdown ({ onBPMSelect }) {
  let selectMeasure
  return (
    <>
      <label>Beats Per Measure</label>
      <input
        type="number"
        defaultValue="4"
        max="12"
        min="1"
        onInput={(e) => {
          e.preventDefault()
          selectMeasure = e.target.value
          onBPMSelect(selectMeasure)
        }}
      ></input>
    </>
  )
}

TimeSignatureDropdown.propTypes = { onBPMSelect: PropTypes.func }
