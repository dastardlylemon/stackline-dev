import React, { useMemo } from 'react';
import { FlexibleWidthXYPlot, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import styles from './ChartPanel.module.css';

function ChartPanel({ sales }) {
  const sortedSales = useMemo(() => {
    if (!sales) {
      return [];
    }

    return [...sales]
      .map((sale) => ({ ...sale, time: new Date(sale.weekEnding)}))
      .sort((a, b) => a.time > b.time ? 1 : -1);
  }, [sales]);

  if (!sales) {
    return null;
  }

  const retailData = sortedSales.map((sale) => ({ x: sale.time.getTime(), y: sale.retailSales }));
  const wholesaleData = sortedSales.map((sale) => ({ x: sale.time.getTime(), y: sale.wholesaleSales }));

  return (
    <div className={styles.chartPanel}>
      <h2>Retail Sales</h2>
      <FlexibleWidthXYPlot height={500}>
        <LineSeries data={retailData} curve="curveBasis" />
        <LineSeries data={wholesaleData} curve="curveBasis" />
      </FlexibleWidthXYPlot>
    </div>
  );
}

export default ChartPanel;
