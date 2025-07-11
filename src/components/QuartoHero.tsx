import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, FileText } from "lucide-react";
import heroImage from "@/assets/quarto-hero.jpg";

const QuartoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Quarto Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-subtle"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Code className="w-4 h-4" />
            Next Generation Publishing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Quarto
            <span className="bg-gradient-primary bg-clip-text text-transparent"> R</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            The open-source scientific and technical publishing system that brings together 
            code, content, and collaboration in one seamless workflow.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="group">
            <BookOpen className="w-5 h-5" />
            Documentation
          </Button>
        </div>
        
        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <FileText className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Multi-format</h3>
            <p className="text-muted-foreground text-center">
              Create HTML, PDF, Word docs, and more from the same source
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <Code className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-semibold text-lg mb-2">Multi-language</h3>
            <p className="text-muted-foreground text-center">
              Supports R, Python, Julia, and Observable JS
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Reproducible</h3>
            <p className="text-muted-foreground text-center">
              Combine narrative text with executable code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuartoHero;