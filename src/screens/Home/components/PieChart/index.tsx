import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

let data = [
  { name: 'Group A', value: 0 },
  { name: 'Group B', value: 0 },
];

const COLORS = ['#ea4335', '#34a853'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type Props = {
  data: {};
};
/**
 * @export
 * @component
 * @name Graphic
 *
 * @description
 * Responsavel por montar o grafico de pizza na home
 */
export default class Graphic extends PureComponent<Props> {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    for (const x in this.props.data) {
      data = [
        { name: 'Group A', value: this.props.data[0] },
        { name: 'Group B', value: this.props.data[1] },
      ];
    }

    return (
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
