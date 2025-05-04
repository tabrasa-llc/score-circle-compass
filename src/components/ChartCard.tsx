
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
    <Card className="rounded-xl bg-transparent border-0 p-3 w-fit">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
        <div className="w-[140px]">
          <GaugeChart value={score} min={min} max={max} color={color} />
        </div>
        <p className="text-muted-foreground text-center text-sm mt-1 max-w-[120px]">
          {scoreDefinition}
        </p>
      </div>
    </Card>
  );
};

export default ChartCard;
