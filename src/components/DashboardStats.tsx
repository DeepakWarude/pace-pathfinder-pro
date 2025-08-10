import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Clock, Flame, Trophy, Target, TrendingUp } from "lucide-react";

const DashboardStats = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Track Your <span className="text-primary">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get detailed insights into your running performance with real-time metrics and comprehensive analytics.
          </p>
        </div>
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Today's Distance */}
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-athletic transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary">Today</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">5.2</p>
              <p className="text-sm text-muted-foreground">Miles Completed</p>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% from yesterday
              </div>
            </div>
          </Card>
          
          {/* Weekly Goal */}
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-success transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Target className="h-8 w-8 text-success" />
              <Badge variant="secondary" className="bg-success/10 text-success">Weekly</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-success">28/35</p>
              <p className="text-sm text-muted-foreground">Miles Goal</p>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </Card>
          
          {/* Average Pace */}
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-athletic transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-accent" />
              <Badge variant="secondary" className="bg-accent/10 text-accent">Pace</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">7:42</p>
              <p className="text-sm text-muted-foreground">Average /mile</p>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                Improving
              </div>
            </div>
          </Card>
          
          {/* Calories Burned */}
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-athletic transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Flame className="h-8 w-8 text-destructive" />
              <Badge variant="secondary" className="bg-destructive/10 text-destructive">Energy</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-destructive">542</p>
              <p className="text-sm text-muted-foreground">Calories Burned</p>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                +8% efficiency
              </div>
            </div>
          </Card>
        </div>
        
        {/* Achievement Section */}
        <Card className="p-8 bg-gradient-primary text-white shadow-athletic">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Trophy className="h-12 w-12 text-yellow-400" />
              <div>
                <h3 className="text-2xl font-bold">New Achievement Unlocked!</h3>
                <p className="text-white/90">Consistency Champion - 7 days in a row</p>
              </div>
            </div>
            <Button variant="secondary" size="lg">
              View All Achievements
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DashboardStats;