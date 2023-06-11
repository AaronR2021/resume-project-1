import React from 'react';
import styles from './signin.module.css'

function Signin({address,balance}) {
  return (
    <div className={styles.center}>
        <span className={styles.text}>
            you have signed In
        </span>
        <div className={styles.box} >
            <div  className={`${styles.list} ${styles.fontColor}`}>
            <span>Address:</span>
            <span className={styles.boldResult}>{address}</span>
            </div>
            <div  className={`${styles.list} ${styles.fontColor}`}>
            <h4>Balance:</h4>
            <h4 className={styles.boldResult}>{balance}</h4>
            </div>

        </div>
    </div>
  )
}

export default Signin