import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-runner.jpg";
import { Play, Download, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Your Ultimate
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Running Companion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Track every step, conquer every mile, and achieve your fitness goals with 
            precision GPS tracking, real-time analytics, and personalized insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-48">
              <Play className="mr-2 h-5 w-5" />
              Start Running
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 border-white/30 text-white hover:bg-white/10">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-white/80">Active Runners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2M+</div>
              <div className="text-white/80">Miles Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">98%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <TrendingUp className="h-6 w-6 text-white/60 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;