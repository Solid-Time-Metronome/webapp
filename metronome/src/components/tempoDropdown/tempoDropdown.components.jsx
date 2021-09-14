import React from 'react'
import './tempoDropdown.style.css'
import PropTypes from 'prop-types'

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

TempoDropdown.propTypes = {
  onTempoSelect: PropTypes.func
}
