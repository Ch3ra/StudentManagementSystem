import React from "react";
import ReactApexChart from "react-apexcharts";

const GraphSection = () => {
  let series = [
    {
      name: "Total Collections",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Fees Collections",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  let options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ['#F44336', '#E91E63']
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default GraphSection;
