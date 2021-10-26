import Card from './Card'
import styles from './FoundingTeam.module.css'

const FoundingTeam = () => {
//   const [isClickMegan, setisClickMegan] = useState(false)
//   const onClickMegan = () => {
//     setisClickMegan(!isClickMegan)
//   }

  //   const [isClickJimmy, setisClickJimmy] = useState(false)
  //   const onClickJImmy = () => {
  //     setisClickJimmy(!isClickJimmy)
  //   }

  //   const [isClickGrant, setisClickGrant] = useState(false)
  //   const onClickGrant = () => {
  //     setisClickGrant(!isClickGrant)
  //   }

  return (
    <>
      <h1 className={styles.h1}>FOUNDING TEAM</h1>
      <Card user='gvanbo' name='Grant van Boeschoten'/>
      <Card user='kyo6919' name='Jimmy Tan'/>
      <Card user='xumegan' name='Megan Xu'/>

      {/* <div className={styles.flexRow}>
        <div className={styles.imgContainer} onClick={onClickMegan}>
          <img
            src={megan}
            alt=""
            className={isClickMegan ? styles.opacity : ''}
          />

          {isClickMegan
            ? (
            <div className={styles.absolute}>
              <p className={styles.founderName}>Megan, CTO</p>
              <p>Write some stuff</p>
            </div>
              )
            : null}
        </div>

        <div className={styles.imgContainer} onClick={onClickJImmy}>
          <img
            src={jimmy}
            alt=""
            className={isClickJimmy ? styles.opacity : ''}
          />

          {isClickJimmy
            ? (
            <div className={styles.absolute}>
              <p className={styles.founderName}>Jimmy, CTO</p>
              <p>write some stuff later</p>
            </div>
              )
            : null}
        </div>

        <div className={styles.imgContainer} onClick={onClickGrant}>
          <img
            src={grant}
            alt=""
            className={isClickGrant ? styles.opacity : ''}
          />

          {isClickGrant
            ? (
            <div className={styles.absolute}>
              <p className={styles.founderName}>Grant, CEO</p>
              <p>write some stuff</p>
            </div>
              )
            : null}
        </div>
      </div> */}
    </>
  )
}

export default FoundingTeam
