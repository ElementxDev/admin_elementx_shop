import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './NoData.module.css';
const NoData = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/no-data.gif" alt="" />
      <h2>No hay datos suficientes para mostrar</h2>
      <Link to="/dashboard">
        <FaHome size={35} />
      </Link>
    </div>
  );
};

export default NoData;
