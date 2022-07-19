import React from 'react';
import styles from './Navbar.module.css';
import { FaBell, FaAlignLeft, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/provider/AuthContext';
import LateralMenu from '../LateralMenu/LateralMenu';
import { useMenu } from '../../hooks/useMenu';
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  let navigate = useNavigate();
  const lateralMenu = useMenu();
  const showUserMenu = useMenu();
  const { user, logout } = useAuth();
  function handleClick() {
    logout();
    navigate('/');
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerMenu} onClick={lateralMenu.handleShow}>
        <FaAlignLeft />
      </div>
      <LateralMenu
        show={lateralMenu.show}
        handleShow={lateralMenu.handleShow}
      />
      <div className={styles.navbarWrapper}>
        <FaBell size={25} />
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          alt="logo"
          width="30px"
          className={styles.avatar}
        />
        <span
          className={styles.name}
          onClick={showUserMenu.handleShow}
        >{`${user?.name} ${user?.surname}`}</span>
        <div
          className={
            showUserMenu.show
              ? `${styles.userMenu} ${styles.active}`
              : styles.userMenu
          }
        >
          <span>{user?.email}</span>
          <Link to="/" onClick={handleClick} className={styles.menuLink}>
            <FaSignOutAlt />
            Cerrar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
