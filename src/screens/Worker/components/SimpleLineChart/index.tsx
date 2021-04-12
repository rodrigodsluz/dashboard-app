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

const teste = [
  {
    name: 'Dia 1',
    jobs: 4000,
    machines: 2400,
  },
  {
    name: 'Dia 2',
    jobs: 3000,
    machines: 1398,
  },
  {
    name: 'Dia 3',
    jobs: 2000,
    machines: 9800,
  },
  {
    name: 'Dia 4',
    jobs: 2780,
    machines: 3908,
  },
  {
    name: 'Dia 5',
    jobs: 1890,
    machines: 4800,
  },
  {
    name: 'Dia 6',
    jobs: 2390,
    machines: 3800,
  },
  {
    name: 'Dia 7',
    jobs: 3490,
    machines: 4300,
  },
];

export const Chart = ({ data }): JSX.Element => {
  const [allItems, setAllItems] = useState([]);

  const useWidth = () => {
    const [width, setWidth] = useState(1350);
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
      data.forEach((element) => {
        let formatItem = {
          hour: element[0],
          jobs: splitText(element[1]),
          machines: splitText(element[2]),
        };
        items.push(formatItem);
      });
      setAllItems(items);
    },
    [data]
  );

  useEffect(() => {
    getData(data);
  }, [data]);

  const splitText = (text: string) => {
    return text.split(' ')[1];
  };

  return (
    <LineChart
      width={useWidth() <= 1024 ? mobileSize : 1350}
      height={240}
      data={allItems}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey="jobs"
        stroke="#ea4335"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="machines" stroke="#34a853" />
    </LineChart>
  );
};
