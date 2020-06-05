import React from 'react'
import styles from  './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <span className={styles.logo}><Link to='/'>LOGO</Link></span>
            <ul>
              <li><Link to='/modal'>Modal</Link></li>
              <li><Link to='/test'>DropDowns</Link></li>
              <li><Link to='/login' >Войти</Link></li>
              <li><Link to='/register'>Регистрация</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;