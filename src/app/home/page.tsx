"use client";

import { useSession } from "next-auth/react";
import { useMemo } from "react";
import LogoutButton from "../components/logoutbtn";
import SectorPieChart from "../components/PieCharts";
import ComparisonBarChart from "../components/comparisonBarChart";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const { data: session } = useSession();
  const investment = 100_000_000;

  const charts = useMemo(() => {
    const name = session?.user?.name;

    if (name === "Rugved") {
      return {
        rfData: [
          { name: "Technology", value: 10.1 },
          { name: "Telecommunications", value: 4.2 },
          { name: "Shipping", value: 9.8 },
          { name: "Energy", value: 14.5 },
          { name: "Utilities", value: 20.0 },
          { name: "Healthcare", value: 21.1 },
          { name: "Bonds and ETFs", value: 20.3 },
        ],
        svmData: [
          { name: "Technology", value: 12.5 },
          { name: "Telecommunications", value: 5.6 },
          { name: "Shipping", value: 8.1 },
          { name: "Energy", value: 11.4 },
          { name: "Utilities", value: 22.9 },
          { name: "Healthcare", value: 18.7 },
          { name: "Bonds and ETFs", value: 20.8 },
        ],
        dnnData: [
          { name: "Technology", value: 14.3 },
          { name: "Telecommunications", value: 7.9 },
          { name: "Shipping", value: 6.5 },
          { name: "Energy", value: 9.7 },
          { name: "Utilities", value: 10.5 },
          { name: "Healthcare", value: 24.2 },
          { name: "Bonds and ETFs", value: 26.3 },
        ],
      };
    } else if (name === "Sunny") {
      return {
        rfData: [
          { name: "Technology", value: 10.1 },
          { name: "Telecommunications", value: 4.2 },
          { name: "Shipping", value: 9.8 },
          { name: "Energy", value: 14.5 },
          { name: "Utilities", value: 20.0 },
          { name: "Healthcare", value: 21.1 },
          { name: "Bonds and ETFs", value: 20.3 },
        ],
        svmData: [
          { name: "Technology", value: 12.5 },
          { name: "Telecommunications", value: 5.6 },
          { name: "Shipping", value: 8.1 },
          { name: "Energy", value: 11.4 },
          { name: "Utilities", value: 22.9 },
          { name: "Healthcare", value: 18.7 },
          { name: "Bonds and ETFs", value: 20.8 },
        ],
        dnnData: [
          { name: "Technology", value: 14.3 },
          { name: "Telecommunications", value: 7.9 },
          { name: "Shipping", value: 6.5 },
          { name: "Energy", value: 9.7 },
          { name: "Utilities", value: 10.5 },
          { name: "Healthcare", value: 24.2 },
          { name: "Bonds and ETFs", value: 26.3 },
        ],
      };
    } else {
      return null;
    }
  }, [session?.user?.name]);

  const modelData = [
    {
      name: "DNN",
      percent: 20.19,
      dollars: investment * (1 + 20.19 / 100),
    },
    {
      name: "SVM",
      percent: 33.26,
      dollars: investment * (1 + 33.26 / 100),
    },
    {
      name: "RF",
      percent: 42.23,
      dollars: investment * (1 + 42.23 / 100),
    },
  ];
    

  return (
    <main className="relative min-h-screen bg-gray-100 flex flex-col">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
    >
      <source src="/dashboard-background.mp4" type="video/mp4" />
    </video>

     {/* Overlay Content */}
     <div className="relative z-10 flex flex-col flex-1">
        {/* Top Section */}
        <div className="flex-1"></div>

        {/* Middle Section */}
        <div className="flex-[6] bg-white flex flex-col items-center justify-center px-6 py-10 shadow-lg rounded-xl mx-20">
          <h1 className="text-3xl font-bold text-gray-800">
            Hi, {session?.user?.name || "Guest"}
          </h1>
          <p className="text-gray-600 mt-2">Your Initial Investment = ${investment.toLocaleString()} </p>
          <div className="flex flex-wrap justify-center z-10 relative">
          {charts ? (
            <div className="flex flex-wrap justify-center mt-10 gap-10">
              <SectorPieChart data={charts.rfData} title="Random Forest" />
              <SectorPieChart data={charts.svmData} title="SVM" />
              <SectorPieChart data={charts.dnnData} title="DNN" />
              <div className="flex gap-6 mt-12 flex-wrap justify-center">
      {modelData.map((model) => (
        <div
          key={model.name}
          className="bg-white shadow-md p-4 rounded-lg w-64 flex justify-between items-center"
        >
          <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold">
            {model.name}
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800">
              ${model.dollars.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="text-green-600 text-sm flex items-center justify-end mt-1">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +{model.percent.toFixed(2)}%
            </div>
          </div>
        </div>
      ))}
    </div>
              {/* Grouped Comparison Bar Chart */}
<div className="mt-16 w-full flex flex-col items-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Sector Comparison Across Models
  </h2>
  <ComparisonBarChart
    data={charts.rfData.map((rf, i) => ({
      sector: rf.name,
      RF: rf.value,
      SVM: charts.svmData[i]?.value || 0,
      DNN: charts.dnnData[i]?.value || 0,
    }))}
  />
</div>
            </div>
          ) : (
            <p className="mt-6 text-gray-500">No data available for this user.</p>
          )}
</div>
          <p className="mt-4">
            <LogoutButton />
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex-1"></div>
      </div>
    </main>
  );
}