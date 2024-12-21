import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Welcome to Your Next Project
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8 animate-slideUp">
        Build something amazing with modern web technologies and a beautiful user interface.
      </p>
      <div className="flex gap-4 animate-slideUp" style={{ animationDelay: "0.2s" }}>
        <Button className="bg-primary hover:bg-primary/90">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default Hero;