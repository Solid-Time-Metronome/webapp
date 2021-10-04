import PropTypes from 'prop-types'

export default function TempoDropdown ({ onTempoSelect }) {
  let dropDownTempo
  return (
      <>
            <label>Tempo</label>
            <input
                type='number'
                defaultValue='60'
                onInput={ (e) => {
                  e.preventDefault()
                  dropDownTempo = e.target.value
                  onTempoSelect(dropDownTempo)
                }}
                // onInput={ onTempoSelect }
            ></input>
        </>
  )
}

TempoDropdown.propTypes = {
  onTempoSelect: PropTypes.func
}
