"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#8dd1e1"];

export default function SectorPieChart({ data, title }: { data: { name: string, value: number }[], title: string }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 m-4 w-full md:w-[25%]">
      <h2 className="text-center text-black font-semibold text-lg mb-2">{title}</h2>
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
        formatter={(value: number) =>
            `${(value)}%`}/>
        <Legend />
      </PieChart>
    </div>
  );
}
