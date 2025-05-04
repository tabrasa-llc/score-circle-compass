
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import GaugeChart from "@/components/GaugeChart";

interface ChartCardProps {
  title: string;
  subtitle: string;
  min?: number;
  max?: number;
  score: number;
  scoreDefinition: string;
  color?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  min = 1,
  max = 10,
  score,
  scoreDefinition,
  color,
}) => {
  return (
    <Card className="rounded-xl bg-[#252525] p-4 w-full border-0 border-none h-[320px] flex flex-col">
      <div className="flex flex-col items-center flex-1">
        <h3 className="text-[20px] font-normal text-foreground h-[22px] flex items-center">{title}</h3>
        <p className="text-[14px] font-normal text-muted-foreground mb-0 text-center h-[40px] flex items-center">{subtitle}</p>
        <div className="w-full max-w-[200px] h-[150px] flex-shrink-0">
          <GaugeChart value={score} min={min} max={max} color={color} />
        </div>
        <p className="text-muted-foreground text-center text-[14px] leading-[120%] max-w-[150px] h-[50px] flex items-center justify-center">
          {scoreDefinition}
        </p>
      </div>
    </Card>
  );
};

export default ChartCard;
