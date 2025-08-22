import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TroubleshootingGuide } from "@/components/return-management/TroubleshootingGuide";
import { LiveSupportWidget } from "@/components/return-management/LiveSupportWidget";
import { FAQSection } from "@/components/return-management/FAQSection";
import { ReturnWizard } from "@/components/return-management/ReturnWizard";

const components = [
  { 
    id: "troubleshooting", 
    name: "Troubleshooting Guide", 
    description: "Interactive checklist with step-by-step troubleshooting",
    component: TroubleshootingGuide 
  },
  { 
    id: "live-support", 
    name: "Live Support Widget", 
    description: "Multiple support channels with availability status",
    component: LiveSupportWidget 
  },
  { 
    id: "faq", 
    name: "FAQ Section", 
    description: "Expandable FAQ with helpful voting system",
    component: FAQSection 
  },
  { 
    id: "wizard", 
    name: "Return Wizard", 
    description: "Smart guided flow with progressive steps",
    component: ReturnWizard 
  }
];

const Index = () => {
  const [activeComponent, setActiveComponent] = useState("troubleshooting");

  const ActiveComponent = components.find(c => c.id === activeComponent)?.component || TroubleshootingGuide;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Return Management Components
            </h1>
            <p className="text-muted-foreground mt-2">
              Pre-return assistance components for better customer experience
            </p>
          </div>
        </div>
      </header>

      {/* Component Selector */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Component Showcase</CardTitle>
            <CardDescription className="text-center">
              Click on any component below to see it in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {components.map((component) => (
                <Button
                  key={component.id}
                  variant={activeComponent === component.id ? "default" : "outline"}
                  className={`h-auto p-4 flex flex-col items-start text-left ${
                    activeComponent === component.id 
                      ? "bg-gradient-to-br from-primary to-primary-hover" 
                      : ""
                  }`}
                  onClick={() => setActiveComponent(component.id)}
                >
                  <span className="font-semibold mb-1">{component.name}</span>
                  <span className="text-xs opacity-80 leading-tight">
                    {component.description}
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Component Display */}
        <div className="flex justify-center">
          <ActiveComponent />
        </div>

        {/* Features Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="text-primary">Reduce Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Guide customers through troubleshooting before they decide to return
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-to-br from-card to-accent/5">
            <CardHeader>
              <CardTitle className="text-accent">Improve Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect customers with live support to resolve issues quickly
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-to-br from-card to-success/5">
            <CardHeader>
              <CardTitle className="text-success">Better Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Provide self-service options and instant answers to common questions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;