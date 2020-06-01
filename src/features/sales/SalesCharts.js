import React from 'react';
import { useSelector } from 'react-redux';
import { selectSales } from './salesSlice';
import ChartPanel from './ChartPanel';
import TablePanel from './TablePanel';
import styles from './SalesCharts.module.css';

function SalesCharts() {
  const sales = useSelector(selectSales);
  return (
    <div className={styles.salesCharts}>
      <ChartPanel sales={sales} />
      <TablePanel sales={sales} />
    </div>
  );
}

export default SalesCharts;
