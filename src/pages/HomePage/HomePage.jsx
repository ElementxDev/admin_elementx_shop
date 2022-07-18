import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DataBox from '../../components/DataBox/DataBox';
import styles from './HomePage.module.css';
import { useAuth } from '../../context/provider/AuthContext';
import getTotals from '../../services/getTotals';
import Chart from '../../components/Chart/Chart';
function HomePage() {
  const { isLoggedIn } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const verifyLogin = () => {
      if (!isLoggedIn) {
        navigate('/');
      }
    };
    const loadTotals = async () => {
      const totals = await getTotals();
      setData(totals);
    };
    verifyLogin();
    loadTotals();
  }, []);
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <Navbar />
        </div>
        <Chart />
        <div className={styles.boxContainer}>
          {data &&
            data.total?.map((item, index) => {
              return <DataBox key={index} info={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
