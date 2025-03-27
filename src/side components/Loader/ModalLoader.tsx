import React from 'react'
import style from './ModalLoaderStyle.module.css'

const ModalLoader = () => {
    return (
        <div className={style.loader}>
            <div className={`${style.circle} ${style.circle_one}`}></div>
            <div className={`${style.circle} ${style.circle_two}`}></div>
            <div className={`${style.circle} ${style.circle_three}`}></div>
        </div>
    )
}

export default ModalLoader
