
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GaugeChart from "@/components/GaugeChart";
import { Gauge } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Gauge className="h-7 w-7 text-primary" />
          <span>Performance Score</span>
        </h1>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Performance Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <GaugeChart value={4.7} min={1} max={10} />
          </CardContent>
        </Card>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>This gauge chart displays a performance score on a scale from 1 to 10.</p>
          <p>The current score is 4.7, showing as a semi-circular gauge with scale markers.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
