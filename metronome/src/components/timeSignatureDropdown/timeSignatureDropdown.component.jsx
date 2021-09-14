import './timeSignatureDropdown.style.css'
import React from 'react'
import PropTypes from 'prop-types'

export default function TimeSignatureDropdown ({ onBPMSelect }) {
  return (
    <>
      <label>Beats Per Measure</label>
      <select onInput={onBPMSelect}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </>
  )
}

TimeSignatureDropdown.propTypes = { onBPMSelect: PropTypes.func }
