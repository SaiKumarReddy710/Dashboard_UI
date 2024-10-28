import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { assessmentData } from '../data/dummyData';

const AssessmentProgressChart = () => {
  const options = {
    chart: { type: 'column' },
    title: { text: 'Assessment Progress' },
    xAxis: { categories: Object.keys(assessmentData) },
    yAxis: { min: 0, max: 100, title: { text: 'Percentage' } },
    series: [
      {
        name: 'Completed',
        data: Object.values(assessmentData).map(item => item.completed)
      },
      {
        name: 'Pending',
        data: Object.values(assessmentData).map(item => item.pending)
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AssessmentProgressChart;
