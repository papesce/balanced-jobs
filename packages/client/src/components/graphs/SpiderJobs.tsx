import React, { Component } from 'react'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default class SpiderJobs extends Component {
  render() {
    const data = [
      {
        subject: 'Skills match', A: 120, B: 110, fullMark: 150,
      },
      {
        subject: 'Salary', A: 98, B: 130, fullMark: 150,
      },
      {
        subject: 'Area of Interest match', A: 86, B: 130, fullMark: 150,
      },
      {
        subject: 'Offer Details', A: 99, B: 100, fullMark: 150,
      },
      {
        subject: 'Realocation opp', A: 85, B: 90, fullMark: 150,
      }
    ];
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
