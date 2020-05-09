import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class ScatterJobs extends Component {
  render() {
    const data01 = [
      { x: 100, y: 200, z: 240 }
    ];
    const data02 = [
      { x: 200, y: 260, z: 240 }
    ];
    return (
          <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="goal alignment" unit="" />
            <YAxis type="number" dataKey="y" name="skill alignment" unit="" />
            <ZAxis
              type="number"
              dataKey="z"
              range={[60, 400]}
              name="money/career"
              unit=""
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter
              name="Hot"
              data={data01}
              fill="#8884d8"
              shape="star"
            />
            <Scatter
              name="Priority 2"
              data={data02}
              fill="#82ca9d"
              shape="triangle"
            />
          </ScatterChart>
          );
  }
}
