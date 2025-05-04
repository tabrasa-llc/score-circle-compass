
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
    <div className={cn("w-full h-[300px] relative", className)}>
      <ResponsiveContainer width="100%" height="100%">
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
            innerRadius="70%"
            outerRadius="80%"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
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
                      y={cy - 20} 
                      textAnchor="middle" 
                      dominantBaseline="central"
                      className="fill-muted-foreground text-sm"
                    >
                      Score
                    </text>
                    <text 
                      x={cx} 
                      y={cy + 10} 
                      textAnchor="middle" 
                      dominantBaseline="central"
                      className="fill-foreground font-bold text-3xl"
                    >
                      {safeValue.toFixed(1)}
                    </text>
                    <text 
                      x={cx} 
                      y={cy + 40} 
                      textAnchor="middle" 
                      dominantBaseline="central"
                      className="fill-muted-foreground text-xs"
                    >
                      Scale: {min} - {max}
                    </text>
                  </>
                );
              }}
            />
          </Pie>
          {/* Add scale markers for 1 through 10 */}
          {Array.from({ length: max - min + 1 }).map((_, i) => {
            const value = min + i;
            const angle = -180 + (180 * (value - min)) / (max - min);
            const radian = (angle * Math.PI) / 180;
            const x1 = 50 + 83 * Math.cos(radian);
            const y1 = 70 + 83 * Math.sin(radian);
            const x2 = 50 + 87 * Math.cos(radian);
            const y2 = 70 + 87 * Math.sin(radian);
            
            const labelX = 50 + 95 * Math.cos(radian);
            const labelY = 70 + 95 * Math.sin(radian);
            
            return (
              <g key={`marker-${value}`}>
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#94a3b8"
                  strokeWidth={2}
                />
                <text
                  x={`${labelX}%`}
                  y={`${labelY}%`}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="10"
                  fill="#64748b"
                >
                  {value}
                </text>
              </g>
            );
          })}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GaugeChart;
