import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MapPin, 
  BarChart3, 
  Target, 
  Trophy, 
  Users,
  Shield,
  Zap,
  Calendar
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Platform",
      description: "Available on iOS and Android with seamless synchronization across all your devices.",
      badge: "Mobile Ready",
      color: "primary"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "GPS Tracking",
      description: "Precision GPS mapping with real-time route visualization and automatic activity detection.",
      badge: "Real-time",
      color: "accent"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance metrics with visual graphs and detailed progress tracking.",
      badge: "Pro Analytics",
      color: "success"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Goals",
      description: "Set personalized fitness goals and track your progress with intelligent recommendations.",
      badge: "AI-Powered",
      color: "primary"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Achievements",
      description: "Unlock badges and achievements as you reach new milestones in your fitness journey.",
      badge: "Gamified",
      color: "accent"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Features",
      description: "Connect with friends, join challenges, and share your achievements on social media.",
      badge: "Community",
      color: "success"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security",
      description: "Your fitness data is encrypted and secure with enterprise-grade privacy protection.",
      badge: "Secure",
      color: "primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Battery Optimized",
      description: "Efficient tracking algorithms that minimize battery drain during long activities.",
      badge: "Efficient",
      color: "accent"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Training Plans",
      description: "Personalized training schedules and workout plans tailored to your fitness level.",
      badge: "Personalized",
      color: "success"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to track, analyze, and improve your running performance. 
            Built with cutting-edge technology for the modern athlete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-card hover:shadow-athletic transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-${feature.color}/10 text-${feature.color}`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;