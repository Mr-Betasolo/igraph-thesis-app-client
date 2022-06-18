import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import useStyles from "./style.js";

const LineChart = ({ chartData }) => {
  const [labels, setLabels] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getLabels = (chartData) => {
      var maxLen = 0;
      for (let i = 0; i < chartData.length; i++) {
        if (chartData[i].data.length > maxLen) {
          maxLen = chartData[i].data.length;
        }
      }

      const labelArr = [];
      for (let j = 0; j < maxLen + 1; j++) {
        labelArr.push(j);
      }
      setLabels(labelArr);
    };
    getLabels(chartData);
  }, [chartData]);

  return (
    <Paper elevation={4} className={classes.paper}>
      <Line
        data={{ labels: labels, datasets: chartData }}
        options={{
          responsive: true,
          // layout: {
          //   padding: 20,
          // },
          // maintainAspectRatio: false,

          plugins: {
            title: {
              display: false,
              text: "Scores Chart",
            },
            legend: {
              labels: {
                font: {
                  family: "Quicksand, sans-serif",
                  weight: 700,
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </Paper>
  );
};

export default LineChart;
