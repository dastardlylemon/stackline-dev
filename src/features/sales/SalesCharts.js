import React from 'react';
import { useSelector } from 'react-redux';
import { selectSales } from './salesSlice';
import TablePanel from './TablePanel';
import styles from './SalesCharts.module.css';

function SalesCharts() {
  const sales = useSelector(selectSales);
  return (
    <div className={styles.salesCharts}>
      <TablePanel sales={sales} />
    </div>
  );
}

export default SalesCharts;
