import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Play, FileText } from "lucide-react";

const QuartoCodeExample = () => {
  const codeExample = `---
title: "Data Analysis Report"
format: 
  html:
    theme: cosmo
    toc: true
  pdf:
    geometry: margin=1in
---

# Introduction

This report analyzes sales data using R.

\`\`\`{r}
#| label: fig-sales
#| fig-cap: "Monthly Sales Trends"

library(ggplot2)
library(dplyr)

# Load and process data
sales_data <- read.csv("sales.csv")

# Create visualization
ggplot(sales_data, aes(x = month, y = revenue)) +
  geom_line(color = "#0ea5e9", size = 1.2) +
  geom_point(color = "#0284c7", size = 3) +
  theme_minimal() +
  labs(title = "Sales Performance",
       x = "Month", y = "Revenue ($)")
\`\`\`

The analysis shows @fig-sales demonstrates 
strong growth in Q4.`;

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Quarto in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of literate programming. Write code, create visualizations, 
            and generate beautiful reports all in one seamless workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Code Example */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-0">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">report.qmd</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed text-foreground">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          
          {/* Output Preview */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Document Header */}
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Data Analysis Report
                  </h1>
                  <div className="h-px bg-border mb-4"></div>
                </div>
                
                {/* Table of Contents */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Contents</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>1. Introduction</li>
                    <li>2. Analysis Results</li>
                    <li>3. Conclusions</li>
                  </ul>
                </div>
                
                {/* Content Preview */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    This report analyzes sales data using R.
                  </p>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-gradient-hero rounded-lg p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Figure 1: Monthly Sales Trends</h3>
                  </div>
                  <div className="h-32 bg-gradient-primary rounded opacity-20 flex items-center justify-center">
                    <span className="text-primary font-medium">Interactive Chart</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sales Performance visualization generated from R code
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  The analysis shows <span className="text-primary font-medium">Figure 1</span> demonstrates 
                  strong growth in Q4.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Features List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Executable Code</h3>
            <p className="text-muted-foreground text-sm">
              R, Python, Julia code runs automatically and outputs are embedded
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Copy className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Cross References</h3>
            <p className="text-muted-foreground text-sm">
              Automatic numbering and linking of figures, tables, and equations
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Live Preview</h3>
            <p className="text-muted-foreground text-sm">
              See changes instantly with hot reloading and incremental builds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuartoCodeExample;