import styles from './FoundingTeam.module.css'
import megan from '../../assets/graphics/megan.jpg'
import grant from '../../assets/graphics/grant.jpg'
import jimmy from '../../assets/graphics/jimmy.jpg'
import React, { useState } from 'react'
//import { react, useState } from 'react'
import propTypes from 'prop-types'

const FoundingTeam = () => {
  const [isClickMegan, setisClickMegan] = useState(false)
  const onClickMegan = () => {
    setisClickMegan(!isClickMegan)
  }

  const [isClickJimmy, setisClickJimmy] = useState(false)
  const onClickJImmy = () => {
    setisClickJimmy(!isClickJimmy)
  }

  const [isClickGrant, setisClickGrant] = useState(false)
  const onClickGrant = () => {
    setisClickGrant(!isClickGrant)
  }

  return (
      <>
         <h1>FOUNDING TEAM</h1>

         <div className={styles.flexRow}>
            <div className={styles.imgContainer} onClick={onClickMegan}>
               <img
                  src={megan}
                  alt=''
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
                  alt=''
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
                  alt=''
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
         </div>
      </>
  )
}

export default FoundingTeam
