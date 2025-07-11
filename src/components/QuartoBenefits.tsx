import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Workflow, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Enhanced Collaboration",
    description: "Share code, data, and insights seamlessly. Multiple contributors can work on the same project with version control integration.",
    stats: "10x faster team workflows"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automated formatting, cross-references, and bibliography management. Focus on content, not formatting.",
    stats: "80% less manual work"
  },
  {
    icon: Shield,
    title: "Reproducible Research",
    description: "Ensure your research is reproducible with embedded code execution. No more broken analyses or outdated figures.",
    stats: "100% reproducible results"
  },
  {
    icon: TrendingUp,
    title: "Professional Output",
    description: "Create publication-ready documents with beautiful typography, consistent styling, and professional formatting.",
    stats: "Publication quality guaranteed"
  },
  {
    icon: Workflow,
    title: "Streamlined Workflow",
    description: "One tool for writing, coding, and publishing. Eliminate context switching between multiple applications.",
    stats: "Single unified workflow"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Automated checks for code execution, link validation, and cross-reference integrity ensure error-free documents.",
    stats: "Zero broken links or references"
  }
];

const QuartoBenefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Quarto R?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your research and documentation workflow with proven benefits 
            trusted by thousands of researchers, data scientists, and educators worldwide.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full text-accent font-medium text-sm">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonial Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
            "Quarto has revolutionized how we create and share research. 
            The ability to combine code, narrative, and beautiful output 
            in one system is game-changing."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
              <p className="text-muted-foreground">Data Science Lead, Research Institute</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuartoBenefits;