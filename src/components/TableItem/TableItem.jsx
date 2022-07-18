import React from 'react';
import styles from './TableItem.module.css';
function TableItem({ product }) {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{product?._id}</td>
      <td className={styles.td}>{product?.name}</td>
      <td className={styles.td}>{product?.category.name}</td>
      <td className={styles.td}>{product?.price}</td>
      <td className={styles.td}>{product?.stock}</td>
      <td className={styles.td}>{product?.rating}</td>
    </tr>
  );
}

export default TableItem;
