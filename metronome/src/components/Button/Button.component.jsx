import { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ onToggleClick }) => {
  const [btnText, setButtonText] = useState('Start')

  const onClick = () => {
    onToggleClick()
    if (btnText === 'Start') {
      setButtonText('Stop')
    } else {
      setButtonText('Start')
    }
  }

  return (
    <button onClick={onClick}>
      {btnText}
    </button>
  )
}

Button.propTypes = {
  onToggleClick: PropTypes.func
}

export default Button
