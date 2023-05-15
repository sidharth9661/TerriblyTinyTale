import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function GenerateChart({ wordFrequencies }) {
  useEffect(() => {
    generateChart();
  },);

  const generateChart = () => {
    if (wordFrequencies.length === 0) return;

    const labels = wordFrequencies.map(([word]) => word);
    const data = wordFrequencies.map(([, frequency]) => frequency);

    const canvas = document.getElementById('chart');
    const context = canvas.getContext('2d');

    // Destroy previous chart if it exists
    if (canvas.chart) {
      canvas.chart.destroy();
    }

    // Find unique frequencies
    const uniqueFrequencies = Array.from(new Set(data));

    // Define colors for each unique frequency
    const colors = generateColors(uniqueFrequencies.length);

    // Assign background colors based on frequency
    const backgroundColors = data.map(frequency => colors[uniqueFrequencies.indexOf(frequency)]);

    // Create a new chart
    const chart = new Chart(context, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Word Frequency',
            data,
            backgroundColor: backgroundColors,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
          },
        },
      },
    });

    // Store the chart instance on the canvas element
    canvas.chart = chart;
  };

  // Helper function to generate an array of random colors
  const generateColors = length => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, 0.6)`;
      colors.push(color);
    }
    return colors;
  };

  return (
    <div>
      <h2>Chart</h2>
      <canvas id="chart"></canvas>
    </div>
  );
}

export default GenerateChart;
