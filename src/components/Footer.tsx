import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone, 
  Mail, 
  Github, 
  Twitter, 
  Instagram,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Running Journey?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of runners who are already achieving their fitness goals with PacePathfinder Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="min-w-48">
              <Smartphone className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button variant="athletic" size="lg" className="min-w-48">
              <Smartphone className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
        
        <Separator className="mb-12" />
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary">PacePathfinder Pro</h4>
            <p className="text-muted-foreground">
              The ultimate fitness tracking companion for runners and walkers.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Features</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Pricing</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Integrations</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">API</p>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Help Center</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Contact Us</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Bug Reports</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Community</p>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Terms of Service</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Cookie Policy</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">GDPR</p>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>© 2024 PacePathfinder Pro. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <MapPin className="h-4 w-4 mr-2" />
            <p>Made with ❤️ for runners worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;