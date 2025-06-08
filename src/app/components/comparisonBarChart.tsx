"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface DataPoint {
  sector: string;
  DNN: number;
  SVM: number;
  RF: number;
}

interface Props {
  data: DataPoint[];
}

export default function ComparisonBarChart({ data }: Props) {
  return (
    <div className="w-full max-w-4xl h-[400px] text-black">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="sector" />
          <YAxis 
          tickFormatter={(value) =>
            `${(value)}%`}/>
          <Tooltip 
          formatter={(value: number) =>
            `${(value)}%`}
          />
          <Legend />
          <Bar dataKey="DNN" fill="#8884d8" />
          <Bar dataKey="SVM" fill="#82ca9d" />
          <Bar dataKey="RF" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
