import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  BookOpen, 
  Users, 
  Mail,
  ExternalLink
} from "lucide-react";

const QuartoFooter = () => {
  const footerLinks = {
    resources: [
      { name: "Documentation", href: "#", icon: BookOpen },
      { name: "Tutorial", href: "#", icon: ExternalLink },
      { name: "Examples", href: "#", icon: ExternalLink },
      { name: "Gallery", href: "#", icon: ExternalLink }
    ],
    community: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Community Forum", href: "#", icon: Users },
      { name: "Newsletter", href: "#", icon: Mail }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-primary-glow"> Publishing Workflow?</span>
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Join thousands of researchers, data scientists, and educators who have 
            already discovered the power of Quarto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group">
              Download Quarto
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10">
              <BookOpen className="w-5 h-5" />
              Get Started Guide
            </Button>
          </div>
        </div>
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Quarto<span className="text-primary-glow">R</span>
            </h3>
            <p className="text-background/70 leading-relaxed mb-6">
              The next generation of R Markdown. An open-source scientific and 
              technical publishing system built on Pandoc.
            </p>
            <div className="flex items-center gap-4">
              <Github className="w-5 h-5 text-background/60 hover:text-primary-glow transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-primary-glow transition-colors cursor-pointer" />
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-background/70 hover:text-primary-glow transition-colors group"
                  >
                    <link.icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-background/70 hover:text-primary-glow transition-colors group"
                  >
                    <link.icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Quarto. Released under the GPL v2 license.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary-glow transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-glow transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-glow transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default QuartoFooter;