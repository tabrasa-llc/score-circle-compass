
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartCard from "@/components/ChartCard";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground">Character</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
