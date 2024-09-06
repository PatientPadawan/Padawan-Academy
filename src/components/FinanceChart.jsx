"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 980,
  },
  {
    name: "Apr",
    income: 5580,
    expense: 3908,
  },
  {
    name: "May",
    income: 3890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 5490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Sep",
    income: 1890,
    expense: 480,
  },
  {
    name: "Oct",
    income: 2390,
    expense: 1380,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 2300,
  },
  {
    name: "Dec",
    income: 7490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src="/moreDark.png"
          alt="ellipse menu icon"
          width={20}
          height={20}
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "0.625rem", paddingBottom: "1.875rem" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#A7E8BD"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#FFADA7"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
