import React from 'react';
import styles from './Navbar.module.css';
import { FaBell } from 'react-icons/fa';
function Navbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <FaBell size={25} />
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          alt="logo"
          width="30px"
          className={styles.avatar}
        />
        <span className={styles.name}>Boonie Green</span>
      </div>
    </div>
  );
}

export default Navbar;
