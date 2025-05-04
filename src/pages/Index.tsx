
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GaugeChart from "@/components/GaugeChart";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card text-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground">Character</CardTitle>
          </CardHeader>
          <CardContent>
            <GaugeChart value={4.7} min={1} max={10} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
