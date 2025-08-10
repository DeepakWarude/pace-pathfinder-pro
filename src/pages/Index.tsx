import HeroSection from "@/components/HeroSection";
import DashboardStats from "@/components/DashboardStats";
import TrackingInterface from "@/components/TrackingInterface";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DashboardStats />
      <TrackingInterface />
      <FeaturesGrid />
      <Footer />
    </div>
  );
};

export default Index;
