import React from 'react'
import './Alert.css'

const Alert = ({onCloseAlert}) => {
    return (
        <div className='Alert'>
            <p>OK</p>
            <span onClick={onCloseAlert} className='close-btn'>x</span>
        </div>
    )
}

export default Alert;