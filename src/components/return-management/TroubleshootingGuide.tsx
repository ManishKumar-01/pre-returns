import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, MessageCircle, Phone } from "lucide-react";

const troubleshootingSteps = [
    {
        id: 1,
        title: "Verify TV model compatibility",
        description: "Check that your Samsung TV frame is compatible with your specific TV model and size"
    },
    {
        id: 2,
        title: "Check frame mounting alignment",
        description: "Ensure the frame is properly aligned with TV mounting holes and sits flush against the wall"
    },
    {
        id: 3,
        title: "Inspect frame assembly",
        description: "Verify all frame pieces are correctly assembled and corner joints are secure"
    },
    {
        id: 4,
        title: "Test frame stability",
        description: "Gently check that the frame is stable and doesn't shift when the TV is adjusted"
    }
];

export const TroubleshootingGuide = () => {
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const toggleStep = (stepId: number) => {
        setCompletedSteps(prev =>
            prev.includes(stepId)
                ? prev.filter(id => id !== stepId)
                : [...prev, stepId]
        );
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Samsung TV Frame Support
                </CardTitle>
                <CardDescription className="text-lg">
                    Try these TV frame troubleshooting steps first - they resolve most mounting and fit issues!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {troubleshootingSteps.map((step) => (
                    <div
                        key={step.id}
                        className="flex items-start space-x-4 p-4 rounded-lg border bg-gradient-to-r from-card to-secondary/20 hover:shadow-md transition-all duration-200"
                    >
                        <button
                            onClick={() => toggleStep(step.id)}
                            className="mt-1 text-primary hover:text-accent transition-colors"
                        >
                            {completedSteps.includes(step.id) ? (
                                <CheckCircle2 className="w-6 h-6" />
                            ) : (
                                <Circle className="w-6 h-6" />
                            )}
                        </button>
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground mt-1">{step.description}</p>
                        </div>
                    </div>
                ))}

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        Still need help?
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-primary to-primary-hover hover:scale-105 transition-transform">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Support
                        </Button>
                        <Button variant="outline" className="flex-1">
                            Proceed with Return
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};