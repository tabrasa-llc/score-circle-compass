
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  className?: string;
  color?: string;
}

const GaugeChart = ({
  value,
  min = 0,
  max = 10,
  className,
  color = "#9b87f5",
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
  const colors = [color, "#393939"];

  // Calculate the angle for the marker at the end of the colored arc
  const markerAngle = 180 - (percentage / 100) * 180;

  return (
    <div className={cn("w-full h-[130px] relative rounded-lg overflow-hidden", className)}>
      <ResponsiveContainer width="100%" height="100%" className="rounded-xl">
        <PieChart>
          <defs>
            <linearGradient id="gaugeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={color} style={{opacity: 0.7}} />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="75%"
            startAngle={180}
            endAngle={0}
            innerRadius="85%"
            outerRadius="100%"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
            cornerRadius={0}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === 0 ? "url(#gaugeGradient)" : colors[index]} 
              />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox as { cx: number; cy: number };
                return (
                  <>
                    <text 
                      x={cx} 
                      y={cy-18}
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
          {/* Add marker line at the end of the colored arc */}
          {percentage > 0 && percentage < 100 && (
            <line
              x1={50}
              y1={75}
              x2={50 + 50 * Math.cos((markerAngle * Math.PI) / 180)}
              y2={75 + 50 * Math.sin((markerAngle * Math.PI) / 180)}
              stroke="#FFFFFF"
              strokeWidth={2}
              className="absolute"
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GaugeChart;
