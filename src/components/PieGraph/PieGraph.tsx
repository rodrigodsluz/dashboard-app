import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

export const ErrosGraph = ({ data }): JSX.Element => {
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
    configureData();
  }, [data]);

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="PieChart"
      loader={<div>Carregando...</div>}
      data={dataGraph}
      options={{
        title: 'Tipo de erros',
        pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};
