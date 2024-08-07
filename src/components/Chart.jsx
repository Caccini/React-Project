// src/components/Chart.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../css/Chart.css";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: "1", // Fetch data for the last 24 hours
            },
          }
        );

        const prices = response.data.prices.map((price) => ({
          time: new Date(price[0]).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          value: price[1],
        }));

        const data = {
          labels: prices.map((price) => price.time),
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: prices.map((price) => price.value),
              fill: true,
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  // This case happens on initial chart load
                  return null;
                }

                const gradient = ctx.createLinearGradient(
                  0,
                  chartArea.top,
                  0,
                  chartArea.bottom
                );
                gradient.addColorStop(0, "rgba(101, 112, 226, 0.3)");
                gradient.addColorStop(1, "rgba(101, 112, 226, 0)");

                return gradient;
              },
              borderColor: "#6570e2",
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.4, // Smooth line
            },
          ],
        };

        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#999",
        },
      },
      y: {
        grid: {
          borderDash: [8, 4],
        },
        ticks: {
          color: "#999",
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
      },
    },
  };

  return (
    <div className="chart" style={{ height: "400px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line ref={chartRef} data={chartData} options={options} />
      )}
    </div>
  );
};

export default Chart;
