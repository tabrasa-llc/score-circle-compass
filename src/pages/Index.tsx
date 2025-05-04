
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
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              <ChartCard
                title="Quietness"
                subtitle="Level of noise nearby."
                score={4.7}
                scoreDefinition="Multiple sources of noise nearby"
                color="#eab308" /* yellow-500 */
              />
              <ChartCard
                title="Vibrancy"
                subtitle="Level of street activity nearby."
                score={3.2}
                scoreDefinition="Calm atmosphere most of the day"
                color="#eab308" /* yellow-500 */
              />
              <ChartCard
                title="Nightlife"
                subtitle="Quantity and diversity of bars nearby."
                score={9.1}
                scoreDefinition="Variety of bars right on the street"
                color="#eab308" /* yellow-500 */
              />
              <ChartCard
                title="Heritage"
                subtitle="Presence of heritage buildings"
                score={6.2}
                scoreDefinition="Variety of historical buildings nearby"
                color="#eab308" /* yellow-500 */
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
