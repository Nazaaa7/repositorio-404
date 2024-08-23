import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import '../estadisticas/App.css';
import { Footer } from '../footer';
import Header from '../header';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export const Stadistic = () => {
  const [barData, setBarData] = useState({ labels: [], values: [] });
  const [pieData, setPieData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const simulatedBarData = {
      labels: ["Peces extintos en el año", "Rios contaminados en el año", "Campos afectados"],
      values: [30, 59, 15]
    };
    setBarData(simulatedBarData);

    const simulatedPieData = {
      labels: ["Cat1", "Cat2", "Cat3"],
      values: [100, 40, 30]
    };
    setPieData(simulatedPieData);
  }, []);

  const barChartData = {
    labels: barData.labels,
    datasets: [
      {
        label: 'Estadísticas',
        data: barData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartData = {
    labels: pieData.labels,
    datasets: [
      {
        label: 'Distribución',
        data: pieData.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} units`,
        },
      },
    },
  };

  return (
    <div >
      <Header/>
      <h1 className='title'>Estadísticas de Contaminación</h1>
      <div className="chart-container">
        <h2>¿Cuanto afecta al medio ambiente el mal desecho del Aceite?</h2>
        <Bar data={barChartData} options={barChartOptions} />
      
      </div>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

