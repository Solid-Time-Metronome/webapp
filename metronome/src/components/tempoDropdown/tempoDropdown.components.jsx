import PropTypes from 'prop-types'

export default function TempoDropdown ({ onTempoSelect }) {
  let dropDownTempo
  return (
      <>
            <label>Tempo</label>
            <input
                type='number'
                defaultValue='60'
                max="280"
                min="35"
                onInput={ (e) => {
                  e.preventDefault()
                  dropDownTempo = e.target.value
                  onTempoSelect(dropDownTempo)
                }}
            ></input>
        </>
  )
}

TempoDropdown.propTypes = {
  onTempoSelect: PropTypes.func
}
