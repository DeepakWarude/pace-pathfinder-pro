import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Square, 
  MapPin, 
  Timer, 
  Zap, 
  Heart,
  Navigation
} from "lucide-react";

const TrackingInterface = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-Time <span className="text-primary">Tracking</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience precision tracking with live GPS mapping, real-time stats, and intelligent activity detection.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Tracking Card */}
          <Card className="p-8 mb-8 bg-gradient-card shadow-card">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="bg-success/10 text-success mb-4">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                Active Session
              </Badge>
              <h3 className="text-2xl font-bold mb-2">Morning Run</h3>
              <p className="text-muted-foreground">Started at 7:32 AM</p>
            </div>
            
            {/* Live Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">23:45</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              
              <div className="text-center">
                <Navigation className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">3.2</div>
                <div className="text-sm text-muted-foreground">Miles</div>
              </div>
              
              <div className="text-center">
                <Zap className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-3xl font-bold text-success">7:24</div>
                <div className="text-sm text-muted-foreground">Pace /mi</div>
              </div>
              
              <div className="text-center">
                <Heart className="h-8 w-8 text-destructive mx-auto mb-2" />
                <div className="text-3xl font-bold text-destructive">156</div>
                <div className="text-sm text-muted-foreground">BPM</div>
              </div>
            </div>
            
            {/* Control Buttons */}
            <div className="flex justify-center space-x-4">
              <Button variant="athletic" size="lg" className="min-w-32">
                <Pause className="mr-2 h-5 w-5" />
                Pause
              </Button>
              <Button variant="outline" size="lg" className="min-w-32">
                <Square className="mr-2 h-4 w-4" />
                Stop
              </Button>
            </div>
          </Card>
          
          {/* GPS Map Placeholder */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Live Route</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <MapPin className="w-3 h-3 mr-1" />
                GPS Active
              </Badge>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Route Map</p>
                <p className="text-muted-foreground">Real-time GPS tracking visualization</p>
              </div>
              
              {/* Animated route line */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 bg-primary/20 rounded-full">
                  <div className="h-1 bg-primary rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Route progress: 3.2 / 5.0 miles</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingInterface;