import React, { PureComponent } from 'react';
import Chart from 'react-google-charts';

export default class PieGraph extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <Chart
        width={'700px'}
        height={'700px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
        ]}
        options={{
          title: 'Erros',
          // Just add this option
          pieHole: 0.4,
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    );
  }
}
