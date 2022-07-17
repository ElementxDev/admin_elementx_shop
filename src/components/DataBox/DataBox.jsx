import React from 'react';
import styles from './DataBox.module.css';
import { FaUserPlus } from 'react-icons/fa';
function DataBox() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <div className={`${styles.iconContainer} ${styles.blue}`}>
            <FaUserPlus />
          </div>
          <div className={styles.infoContainer}>
            <h5 className={styles.title}>Users</h5>
            <p className={styles.number}>+90</p>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.contentBody}>Just update</div>
      </div>
    </div>
  );
}

export default DataBox;
