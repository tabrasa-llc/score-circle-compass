
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
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  min = 1,
  max = 10,
  score,
  scoreDefinition,
}) => {
  return (
    <Card className="rounded-xl bg-transparent shadow-lg p-4 w-fit">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
        <GaugeChart value={score} min={min} max={max} />
        <p className="text-muted-foreground text-center text-sm mt-2.5">
          {scoreDefinition}
        </p>
      </div>
    </Card>
  );
};

export default ChartCard;
