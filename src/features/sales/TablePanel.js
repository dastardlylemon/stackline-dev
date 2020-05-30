import React from 'react';
import styles from './TablePanel.module.css';

function TablePanel({ sales }) {
  if (!sales) {
    return null;
  }

  return (
    <div className={styles.tablePanel}>
      <table>
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(({ weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin }) => {
            return (
              <tr>
                <td>{weekEnding}</td>
                <td>${retailSales}</td>
                <td>${wholesaleSales}</td>
                <td>{unitsSold}</td>
                <td>${retailerMargin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePanel;
