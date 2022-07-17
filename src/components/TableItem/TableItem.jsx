import React from 'react';
import styles from './TableItem.module.css';
function TableItem() {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>300500</td>
      <td className={styles.td}>Ryan Ray</td>
      <td className={styles.td}>Ryan@gamil.com</td>
      <td className={styles.td}>Si</td>
      <td className={styles.td}>10</td>
      <td className={styles.td}>Calle falsa 123</td>
      <td className={styles.td}>123456789</td>
    </tr>
  );
}

export default TableItem;
