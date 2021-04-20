import React, { PureComponent } from 'react';
import Chart from 'react-google-charts';
type Props = {
  data: Array<[][]>;
};

let data = [];
data.push(['Task', 'Hours per Day']);
export default class PieGraph extends PureComponent<Props> {
  render() {
    this.props.data.forEach((element, index) => {
      console.log(element[0]);
      let newItem = [element[0], element[1]];

      data = [...data, newItem];
    });

    console.log(data);

    return (
      <Chart
        width={'700px'}
        height={'700px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
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
