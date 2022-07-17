import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DataBox from '../../components/DataBox/DataBox';
import styles from './HomePage.module.css';
function HomePage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <Navbar />
        </div>
        <div className={styles.boxContainer}>
          <DataBox />
          <DataBox />
          <DataBox />
          <DataBox />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
