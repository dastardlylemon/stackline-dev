import React from 'react';
import { useSelector } from 'react-redux';
import { selectSales } from './salesSlice';
import TablePanel from './TablePanel';

function SalesCharts() {
  const sales = useSelector(selectSales);
  return (
    <div className="salesCharts">
      <TablePanel sales={sales} />
    </div>
  );
}

export default SalesCharts;
