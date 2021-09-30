import styles from './logo.module.css'
// import { ReactComponent as MetronomeLogo } from '../../assets/graphics/MetronomeLogo.svg'
import MetronomeLogo from '../../assets/graphics/MetronomeLogo.svg'

export default function Logo () {
  return (
      <div className={styles.logocontainer}>
         <img className={styles.logo} src={MetronomeLogo} />
      </div>
  )
}
