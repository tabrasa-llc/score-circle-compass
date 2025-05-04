
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
      <div className="max-w-[1200px] mx-auto space-y-6">
        <Card className="bg-card text-foreground border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-[14px] leading-[18px] text-yellow-400">
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
                color="#facc15" /* yellow-400 */
              />
              <ChartCard
                title="Vibrancy"
                subtitle="Level of street activity nearby."
                score={3.2}
                scoreDefinition="Calm atmosphere most of the day"
                color="#facc15" /* yellow-400 */
              />
              <ChartCard
                title="Nightlife"
                subtitle="Quantity and diversity of bars nearby."
                score={9.1}
                scoreDefinition="Variety of bars right on the street"
                color="#facc15" /* yellow-400 */
              />
              <ChartCard
                title="Heritage"
                subtitle="Presence of heritage buildings"
                score={6.2}
                scoreDefinition="Variety of historical buildings nearby"
                color="#facc15" /* yellow-400 */
              />
            </div>
          </CardContent>
        </Card>

        {/* Education card */}
        <Card className="bg-card text-foreground border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-[14px] leading-[18px] text-purple-400">
              Education
            </CardTitle>
            <p className="text-[24px] leading-[26px] font-normal text-white mt-3 mb-6">
              What are the educational options in this area?
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <ChartCard
                title="Daycare"
                subtitle="Quality of daycare facilities"
                score={7.5}
                scoreDefinition="Several good options available nearby"
                color="#a78bfa" /* purple-400 */
              />
              <ChartCard
                title="Elementary School"
                subtitle="Quality of elementary education"
                score={8.2}
                scoreDefinition="Highly rated schools in the district"
                color="#a78bfa" /* purple-400 */
              />
              <ChartCard
                title="High School"
                subtitle="Quality of high school education"
                score={6.8}
                scoreDefinition="Good academic and extracurricular programs"
                color="#a78bfa" /* purple-400 */
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
