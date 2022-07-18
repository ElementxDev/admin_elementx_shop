import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DataBox from '../../components/DataBox/DataBox';

import { useAuth } from '../../context/provider/AuthContext';
import getTotals from '../../services/getTotals';
import ActionCard from '../../components/ActionCard/ActionCard';
import { FaBox, FaUser, FaRegListAlt } from 'react-icons/fa';

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
        <div className={styles.boxContainer}>
          {data &&
            data.total?.map((item, index) => {
              return <DataBox key={index} info={item} />;
            })}
        </div>
        <div className={styles.actionsContainer}>
          <ActionCard
            title="Agregar Producto"
            subtitle="Agrega un producto a la tienda"
            link="/add-product"
            icon={<FaBox />}
          />
          <ActionCard
            title="Agregar Categoria"
            subtitle="Agrega una categoria"
            link="/add-category"
            icon={<FaRegListAlt />}
          />

          <ActionCard
            title="Agregar usuario"
            subtitle="Agrega un usuario"
            link="/add-user"
            icon={<FaUser />}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
