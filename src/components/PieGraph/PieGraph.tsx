import React, { PureComponent, useCallback, useEffect, useState } from 'react';
import Chart from 'react-google-charts';
type Props = {
  data: Array<[][]>;
};

export const ErrosGraph = ({ data }): JSX.Element => {
  console.log(data);
  const [dataGraph, setDataGraph] = useState([]);
  const configureData = () => {
    let array = [];
    array.push(['Task', 'Hours per Day']);
    data.forEach((element) => {
      let newItem = [element[0], element[1]];
      array = [...array, newItem];
    });
    setDataGraph(array);
  };
  useEffect(() => {
    console.log('teste');
    configureData();
  }, [data]);

  return (
    <Chart
      width={'1200px'}
      height={'1000px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={dataGraph}
      options={{
        title: 'Tipo de erros',
        // Just add this option
        pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};
