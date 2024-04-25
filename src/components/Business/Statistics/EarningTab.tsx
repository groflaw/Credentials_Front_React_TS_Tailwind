import React from 'react'
import ReactApexChart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'

const EarningTab: React.FC = () => {
  const series = [
    {
      name: 'Predicted',
      data: [
        {
          x: '2021-02-22T09:23:21.407Z',
          y: 48.84,
        },
        {
          x: '2021-02-25T09:23:21.407Z',
          y: 53.51,
        },
        {
          x: '2021-02-28T09:23:21.407Z',
          y: 52.93,
        },
        {
          x: '2021-03-03T09:23:21.407Z',
          y: 49.08,
        },
        {
          x: '2021-03-06T09:23:21.407Z',
          y: 50.27,
        },
        {
          x: '2021-03-09T09:23:21.407Z',
          y: 48.37,
        },
        {
          x: '2021-03-12T09:23:21.407Z',
          y: 44.84,
        },
      ],
    },
    {
      name: 'Actual',
      data: [
        {
          x: '2021-02-22T09:23:21.408Z',
          y: 20.21,
        },
        {
          x: '2021-02-25T09:23:21.408Z',
          y: 17.49,
        },
        {
          x: '2021-02-28T09:23:21.408Z',
          y: 16.54,
        },
        {
          x: '2021-03-03T09:23:21.408Z',
          y: 19,
        },
        {
          x: '2021-03-06T09:23:21.408Z',
          y: 16.47,
        },
        {
          x: '2021-03-09T09:23:21.408Z',
          y: 13.15,
        },
        {
          x: '2021-03-12T09:23:21.408Z',
          y: 18.07,
        },
      ],
    },
  ]
  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      width: '100%',
      height: '100%',
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#20C375', '#1677FF'],
    fill: {
      colors: ['#20C375', '#1677FF'],
      opacity: 0.5,
    },
    series,
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy',
      },
      y: {
        formatter: (value: number) => `${value}%`,
      },
    },
    xaxis: {
      type: 'datetime',
    },
  } as ApexOptions

  return (
    <div className="flex flex-col flex-auto h-[600px]">
      <ReactApexChart
        className="flex-auto w-full h-full"
        options={chartOptions}
        series={series}
        type={chartOptions.chart?.type}
        height={chartOptions.chart?.height}
      />
    </div>
  )
}

export default EarningTab
