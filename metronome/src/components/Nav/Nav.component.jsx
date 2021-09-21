import React, { useState } from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'
// import LogoHeader from '../Images/LogoHeader.svg';
const HeaderContent = () => {
   const [isActive, setIsActive] = useState(false)

   function toggleButton() {
      setIsActive(!isActive)
      console.log(isActive)
   }

   return (
      <section className={styles.navbar}>
         {/* <div className={styles.navLogo}>
        <NavLink to="/" className={styles.logoLink}>
          <img src={LogoHeader} alt="logo header" />
        </NavLink>
      </div> */}

         {/* hamburger button */}
         <div>
            <NavLink
               to='#'
               className={styles.toggleButton}
               onClick={toggleButton}
            >
               <span className={styles.bar}></span>
               <span className={styles.bar}></span>
               <span className={styles.bar}></span>
            </NavLink>

            <div
               className={`${styles.navbarLinks} ${
                  isActive ? styles.active : ''
               }`}
            >
               <ul className={styles.navUl}>
                  <li onClick={(e) => setIsActive(false)}>
                     <NavLink to='/' exact activeClassName={styles.active}>
                        Home
                     </NavLink>
                  </li>
                  <li onClick={(e) => setIsActive(false)}>
                     <NavLink to='/about' activeClassName={styles.active}>
                        About
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default HeaderContent
