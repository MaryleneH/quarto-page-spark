import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Globe, 
  Layers, 
  Zap, 
  GitBranch, 
  Palette,
  BarChart3,
  Settings
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Dynamic Documents",
    description: "Create rich documents that combine narrative text, code, and outputs. Perfect for reports, articles, and presentations.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Beautiful Websites",
    description: "Build stunning websites with automatic navigation, search, and responsive design. Deploy anywhere with ease.",
    color: "text-accent"
  },
  {
    icon: Layers,
    title: "Multi-format Publishing",
    description: "One source, many outputs. Generate HTML, PDF, MS Word, EPUB, and presentation formats from the same content.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Incremental rendering ensures quick builds. Only regenerate what changed for lightning-fast iteration.",
    color: "text-accent"
  },
  {
    icon: GitBranch,
    title: "Version Control Ready",
    description: "Plain text format works perfectly with Git. Track changes, collaborate, and maintain document history.",
    color: "text-primary"
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Beautiful built-in themes or create your own. Full control over styling with CSS and SCSS support.",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Advanced Visualizations",
    description: "Create interactive plots, charts, and dashboards. Seamlessly integrate with R, Python, and Observable.",
    color: "text-primary"
  },
  {
    icon: Settings,
    title: "Flexible Configuration",
    description: "Extensive customization options through YAML metadata. Configure everything from themes to cross-references.",
    color: "text-accent"
  }
];

const QuartoFeatures = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Publishing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create professional scientific and technical content, 
            from simple documents to complex interactive websites.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Explore All Features
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuartoFeatures;