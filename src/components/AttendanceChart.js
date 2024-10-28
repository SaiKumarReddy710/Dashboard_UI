import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { attendanceData } from '../data/dummyData';

const AttendanceChart = () => {
  const options = {
    chart: { type: 'line' },
    title: { text: 'Student\'s Attendance' },
    xAxis: { categories: attendanceData.map(item => item.week) },
    yAxis: { title: { text: 'Attendance (%)' }, max: 100 },
    series: [
      {
        name: 'Attendance',
        data: attendanceData.map(item => item.attendance)
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AttendanceChart;
