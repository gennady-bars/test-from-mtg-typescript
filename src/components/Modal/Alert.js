import React from 'react'
import styles from './Alert.module.css'

const Alert = ({onCloseAlert}) => {
    return (
        <div className={styles.Alert}>
            <p>OK</p>
            <span onClick={onCloseAlert} className={styles['close-btn']}>x</span>
        </div>
    )
}

export default Alert;