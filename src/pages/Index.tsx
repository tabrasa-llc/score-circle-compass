
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartCard from "@/components/ChartCard";

interface IndexProps {
  title?: string;
  subtitle?: string;
}

const Index = ({ 
  title = "Character", 
  subtitle = "What is the general character of this area?" 
}: IndexProps) => {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <Card className="bg-card text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-[14px] leading-[18px] text-yellow-500">
              {title}
            </CardTitle>
            <p className="text-[24px] leading-[26px] font-normal text-white mt-3 mb-6">
              {subtitle}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-6 overflow-x-auto">
              <ChartCard
                title="Quietness"
                subtitle="Level of noise nearby."
                score={4.7}
                scoreDefinition="Multiple sources of noise nearby"
              />
              <ChartCard
                title="Quietness"
                subtitle="Level of noise nearby."
                score={4.7}
                scoreDefinition="Multiple sources of noise nearby"
              />
              <ChartCard
                title="Quietness"
                subtitle="Level of noise nearby."
                score={4.7}
                scoreDefinition="Multiple sources of noise nearby"
              />
              <ChartCard
                title="Quietness"
                subtitle="Level of noise nearby."
                score={4.7}
                scoreDefinition="Multiple sources of noise nearby"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
