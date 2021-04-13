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


export const Chart = ({ data }): JSX.Element => {
  const [allItems, setAllItems] = useState([]);

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
      <XAxis dataKey="hour" />
      <YAxis domain={[0, 'dataMax + 1000']} allowDataOverflow={true}  />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey="jobs"
        stroke="#ea4335"
        activeDot={{ r: 4 }}
      />
      <Line type="monotone" dataKey="machines" stroke="#34a853" />
    </LineChart>
  );
};
