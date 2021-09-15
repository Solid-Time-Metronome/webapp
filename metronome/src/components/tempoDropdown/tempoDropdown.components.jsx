import React from 'react'
import './tempoDropdown.style.css'
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
                  console.log('e', e)
                  console.log(dropDownTempo)
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
