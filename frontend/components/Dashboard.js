import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

const Dashboard = () => {
  const [barData, setBarData] = useState({ labels: [], values: [] });
  const [pieData, setPieData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      const barResponse = await fetch('/api/bar-data');
      const barData = await barResponse.json();
      setBarData({
        labels: barData.labels,
        values: barData.values,
      });

      const pieResponse = await fetch('/api/pie-data');
      const pieData = await pieResponse.json();
      setPieData({
        labels: pieData.labels,
        values: pieData.values,
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Estadísticas de Contaminación</h1>
      <BarChart data={barData} />
      <PieChart data={pieData} />
    </div>
  );
};

export default Dashboard;
