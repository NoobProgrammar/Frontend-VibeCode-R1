import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmbodiedCarbonChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
    datasets: [
      {
        label: "Embodied Carbon Intensity (kgCO₂e/m²)",
        data: [549, 875, 617, 36, 185, 191, 881, 539, 269, 607, 528],
        backgroundColor: "rgba(75, 85, 99, 0.8)", // Gray theme
        borderColor: "rgba(55, 65, 81, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(55, 65, 81, 1)", // Gray text
        },
      },
      title: {
        display: true,
        text: "EMBODIED CARBON EMISSIONS",
        color: "rgba(55, 65, 81, 1)",
        font: {
          size: 24,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Embodied carbon intensity (kgCO₂e/m²)",
          color: "rgba(55, 65, 81, 1)",
        },
        ticks: {
          color: "rgba(55, 65, 81, 1)",
        },
        beginAtZero: true,
      },
      x: {
        ticks: {
          color: "rgba(55, 65, 81, 1)",
        },
      },
    },
  };

  return (
    <div className="w-full bg-slate-300 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-100/50 rounded-3xl p-8 shadow-xl">
          <div className="mb-4">
            <div className="flex space-x-4 mb-2">
              <div>
                <span className="text-sm text-slate-600">Type</span>
                <div className="flex space-x-2 mt-1">
                  <button className="px-3 py-1 rounded-full bg-slate-300 text-slate-700">
                    Refurbishment
                  </button>
                  <button className="px-3 py-1 rounded-full bg-slate-300 text-slate-700">
                    New build
                  </button>
                  <button className="px-3 py-1 rounded-full bg-slate-700 text-white">
                    All
                  </button>
                </div>
              </div>
              <div>
                <span className="text-sm text-slate-600">Status</span>
                <div className="flex space-x-2 mt-1">
                  <button className="px-3 py-1 rounded-full bg-slate-700 text-white">
                    Complete
                  </button>
                  <button className="px-3 py-1 rounded-full bg-slate-300 text-slate-700">
                    Estimate
                  </button>
                </div>
              </div>
            </div>
            <div className="text-sm text-slate-600">
              Key:
              <span className="ml-2">
                --- 600 kgCO₂e/m² - Embodied Carbon Target 2025
              </span>
              <span className="ml-2">
                ----- 500 kgCO₂e/m² - Embodied Carbon Target 2030
              </span>
            </div>
          </div>
          <Bar data={data} options={options} />
          <div className="mt-4 text-right text-sm text-slate-600">
            <button className="flex items-center space-x-1">
              <span>Download the data</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbodiedCarbonChart;
