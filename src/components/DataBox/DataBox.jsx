import React from 'react';
import styles from './DataBox.module.css';

import {
  FaUserPlus,
  FaLayerGroup,
  FaShoppingCart,
  FaMoneyCheckAlt,
} from 'react-icons/fa';

function DataBox({ info }) {
  const color = {
    'total products': 'black',
    'total users': 'blue',
    'total orders': 'pink',
    'total purchases': 'green',
  };

  const boxColor = color[info.name];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <div
            className={
              styles.iconContainer +
              ` 
              ${
                info.name === 'total products'
                  ? styles.black
                  : info.name === 'total users'
                  ? styles.blue
                  : info.name === 'total orders'
                  ? styles.pink
                  : styles.green
              } }`
            }
          >
            {info.name === 'total products' ? (
              <FaLayerGroup />
            ) : info.name === 'total users' ? (
              <FaUserPlus />
            ) : info.name === 'total orders' ? (
              <FaShoppingCart />
            ) : info.name === 'total purchases' ? (
              <FaMoneyCheckAlt />
            ) : (
              ''
            )}
          </div>
          <div className={styles.infoContainer}>
            <h5 className={styles.title}> {info?.name}</h5>
            <p className={styles.number}>
              {`+ ${info?.total}

      `}
            </p>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.contentBody}></div>
      </div>
    </div>
  );
}

export default DataBox;
