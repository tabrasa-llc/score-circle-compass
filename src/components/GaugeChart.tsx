
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  className?: string;
}

const GaugeChart = ({
  value,
  min = 0,
  max = 10,
  className,
}: GaugeChartProps) => {
  // Ensure value is within bounds
  const safeValue = Math.min(Math.max(value, min), max);
  
  // Calculate percentage for the gauge
  const percentage = ((safeValue - min) / (max - min)) * 100;
  
  // Data for the gauge chart
  const data = [
    { name: "Score", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  // Colors for the gauge segments
  const colors = ["url(#gaugeGradient)", "#e2e8f0"];

  return (
    <div className={cn("w-full h-[140px] relative rounded-lg overflow-hidden", className)}>
      <ResponsiveContainer width="100%" height="100%" className="rounded-xl">
        <PieChart>
          <defs>
            <linearGradient id="gaugeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#7E69AB" />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius="49%" // Reduced from 70% (30% smaller)
            outerRadius="56%" // Reduced from 80% (30% smaller)
            paddingAngle={0}
            dataKey="value"
            stroke="none"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox as { cx: number; cy: number };
                return (
                  <>
                    <text 
                      x={cx} 
                      y={cy-10} // Moved up 40px 
                      textAnchor="middle" 
                      dominantBaseline="central"
                      className="fill-foreground font-bold text-3xl"
                    >
                      {safeValue.toFixed(1)}
                    </text>
                  </>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GaugeChart;
