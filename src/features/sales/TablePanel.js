import React, { useState } from 'react';
import styles from './TablePanel.module.css';

const SORT_TYPES = {
  WEEK: 'week',
  RETAIL: 'retail',
  WHOLESALE: 'wholesale',
  UNITS: 'units',
  RETAILER: 'retailer',
};

function TablePanel({ sales }) {
  const [sortType, setSortType] = useState(SORT_TYPES.WEEK);

  if (!sales) {
    return null;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const formatPrice = (price) => {
    return formatter.format(price);
  }

  const sortedSales = [...sales].sort((a, b) => {
    switch(sortType) {
      case SORT_TYPES.WEEK:
        return a.weekEnding > b.weekEnding ? -1 : 1;
      case SORT_TYPES.RETAIL:
        return a.retailSales > b.retailSales ? -1 : 1;
      case SORT_TYPES.WHOLESALE:
        return a.wholesaleSales > b.wholesaleSales ? -1 : 1;
      case SORT_TYPES.UNITS:
        return a.unitsSold > b.unitsSold ? -1 : 1;
      case SORT_TYPES.RETAILER:
        return a.retailerMargin > b.retailerMargin ? -1 : 1;
      default:
        return a.weekEnding < b.weekEnding ? -1 : 1;
    };
  });

  const switchSort = (sort) => {
    return setSortType.bind(null, sort);
  };

  return (
    <div className={styles.tablePanel}>
      <table>
        <thead>
          <tr>
            <th onClick={switchSort(SORT_TYPES.WEEK)}>WEEK ENDING</th>
            <th onClick={switchSort(SORT_TYPES.RETAIL)}>RETAIL SALES</th>
            <th onClick={switchSort(SORT_TYPES.WHOLESALE)}>WHOLESALE SALES</th>
            <th onClick={switchSort(SORT_TYPES.UNITS)}>UNITS SOLD</th>
            <th onClick={switchSort(SORT_TYPES.RETAILER)}>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map(({ weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin }) => {
            return (
              <tr>
                <td>{weekEnding}</td>
                <td>{formatPrice(retailSales)}</td>
                <td>{formatPrice(wholesaleSales)}</td>
                <td>{unitsSold}</td>
                <td>{formatPrice(retailerMargin)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePanel;
