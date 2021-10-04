import Button from '../Button/Button.component'

import styles from './buttonContainer.module.css'
import PropTypes from 'prop-types'

const ButtonContainer = ({ onToggleClick }) => {
  return (
      <div className={styles.buttonContainer}>
         <Button onToggleClick={onToggleClick} />

      </div>
  )
}

ButtonContainer.propTypes = {
  onToggleClick: PropTypes.func

}

export default ButtonContainer
