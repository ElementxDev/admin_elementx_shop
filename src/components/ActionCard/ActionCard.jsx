import React from 'react';
import styles from './ActionCard.module.css';
import { FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ActionCard({ title, subtitle, icon, link }) {
  return (
    <Link to={`${link}`} className={styles.cardContainer}>
      <div className={styles.card}>
        <div
          className={
            styles.cardHeader +
            ` 
              ${
                title === 'Agregar Producto'
                  ? styles.black
                  : title === 'Agregar Categoria'
                  ? styles.blue
                  : title === 'Agregar usuario'
                  ? styles.pink
                  : ''
              } }`
          }
        >
          {icon}
        </div>
        <div className={styles.cardBody}>
          <h2>+</h2>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default ActionCard;
