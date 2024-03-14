"use client";
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Horizontal Bar Chart For Location',
    },
  },
};

const labels = ['Califonia', 'Florida', 'New York', 'virginia', 'Washington',];

// Generate random data for both datasets
const dataset1Data = labels.map(() => faker.datatype.number({ max: 1000}));
// const dataset2Data = labels.map(() => faker.datatype.number({ max: 1000 }));

const data = {
  labels,
  datasets: [
    {
      label: 'Location',
      data: dataset1Data,
      borderColor: 'rgb(15, 192, 131)',
      backgroundColor: 'rgba(15, 192, 131 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: dataset2Data,
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

function App() {
  return (
    <div className='h-[600px] w-[600px] flex justify-center items-center pl-28'>
      <Bar options={options} height={700} width={700} data={data} />
    </div>
  );
}

export default App;
