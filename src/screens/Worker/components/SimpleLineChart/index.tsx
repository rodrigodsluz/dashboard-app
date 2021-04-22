import React, { useCallback, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

/**
 * @export
 * @component
 * @name Chart
 *
 * @description
 * Retorna o gráfico de linha de maquinas x jobs
 */

export const Chart = ({ data }): JSX.Element => {
  const [allItems, setAllItems] = useState([]);
  const [limitY, setLimitY] = useState(0);
  const useWidth = () => {
    const [width, setWidth] = useState(1150);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
  };

  let mobileSize = useWidth();
  if (mobileSize > 767) {
    mobileSize = 650;
  } else {
    mobileSize = 350;
  }

  const getData = useCallback(
    (data: []) => {
      let items = [];
      let machines = [];
      let jobs = [];
      data.forEach((element) => {
        jobs.push(parseInt(splitText(element[1])));
        machines.push(parseInt(splitText(element[2])));
        let formatItem = {
          hour: element[0],
          jobs: splitText(element[1]),
          machines: splitText(element[2]),
        };
        items.push(formatItem);
      });
      setAllItems(items);
      let biggerMachine = Math.max.apply(Math, machines);
      let biggerJobs = Math.max.apply(Math, jobs);
      biggerMachine > biggerJobs
        ? setLimitY(biggerMachine)
        : setLimitY(biggerJobs);
    },
    [data, allItems]
  );

  useEffect(() => {
    getData(data);
  }, [data]);

  const splitText = (text: string) => {
    return text.split(' ')[1];
  };

  return (
    <LineChart
      width={useWidth() <= 1024 ? mobileSize : 1090}
      height={230}
      data={allItems}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" allowDataOverflow={true} />
      <YAxis domain={[0, 'dataMax+' + `${limitY}`]} allowDataOverflow={true} />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey="machines" stroke="#34a853" />

      <Line
        type="monotone"
        dataKey="jobs"
        stroke="#ea4335"
        activeDot={{ r: 4 }}
      />
    </LineChart>
  );
};
