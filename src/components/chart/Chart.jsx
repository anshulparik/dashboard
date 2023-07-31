import React from "react";
import "./Chart.scss";

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  ResponsiveContainer
} from "recharts";

const data = [
    {name: "Jan", Total: 1200},
    {name: "Feb", Total: 900},
    {name: "Mar", Total: 1700},
    {name: "Apr", Total: 600},
    {name: "May", Total: 2100},
    {name: "Jun", Total: 1900},
]

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <h1 className="title">{title}</h1>
      <ResponsiveContainer width="90%" aspect={aspect} className="graph">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66dac0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#66dac0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#66dac0"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
