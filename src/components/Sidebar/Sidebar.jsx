import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <Link to="/products" className={styles.logoLink}>
          <img
            src="assets/ElementxOnline.svg"
            alt=""
            width="200px"
            className="logo"
          />
        </Link>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <Link to="/products" className={styles.link}>
              <li className={styles.sidebarListItem}>Home</li>
            </Link>
            <Link className={styles.link} to="/analytics">
              <li className={styles.sidebarListItem}>Estadisticas</li>
            </Link>
            <Link className={styles.link} to="/sales">
              <li className={styles.sidebarListItem}>Ventas</li>
            </Link>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
            <Link className={styles.link} to="/users">
              <li className={styles.sidebarListItem}>Users</li>
            </Link>
            <Link className={styles.link} to="/products">
              <li className={styles.sidebarListItem}>Productos</li>
            </Link>
            <Link className={styles.link} to="/transactions">
              <li className={styles.sidebarListItem}>Ordenes</li>
            </Link>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Agregar</h3>
          <ul className={styles.sidebarList}>
            <Link className={styles.link} to="/mail">
              <li className={styles.sidebarListItem}>Agregar productos</li>
            </Link>
            <Link className={styles.link} to="/feedback">
              <li className={styles.sidebarListItem}>Agregar Categorias</li>
            </Link>
            <Link className={styles.link} to="/messages">
              <li className={styles.sidebarListItem}>Agregar Usuarios</li>
            </Link>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Staff</h3>
          <ul className={styles.sidebarList}>
            <Link className={styles.link} to="/mange">
              <li className={styles.sidebarListItem}>Manage</li>
            </Link>
            <Link className={styles.link} to="/analytics">
              <li className={styles.sidebarListItem}>Analytics</li>
            </Link>
            <Link className={styles.link} to="/reports">
              <li className={styles.sidebarListItem}>Reports</li>
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
