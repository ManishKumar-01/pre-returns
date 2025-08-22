import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ArrowLeft, AlertTriangle, Lightbulb } from "lucide-react";

const wizardSteps = [
    {
        id: 1,
        title: "TV Frame Diagnosis",
        description: "Let's identify your TV frame issue",
        questions: [
            "Does your TV frame fit properly around your Samsung TV?",
            "Are all frame pieces securely assembled?",
            "Is the frame properly aligned with your TV mount?"
        ]
    },
    {
        id: 2,
        title: "TV Frame Quick Fixes",
        description: "Try these Samsung TV frame solutions first",
        solutions: [
            { text: "Verify TV model compatibility", time: "2 min" },
            { text: "Adjust frame mounting alignment", time: "5 min" },
            { text: "Check frame corner connections", time: "3 min" }
        ]
    },
    {
        id: 3,
        title: "TV Frame Support Options",
        description: "Choose your preferred help method",
        options: [
            { type: "TV Frame Specialist Chat", time: "< 2 min wait", recommended: true },
            { type: "Samsung Support Hotline", time: "< 5 min wait", recommended: false },
            { type: "TV Frame Return Process", time: "7-10 days", recommended: false }
        ]
    }
];

export const ReturnWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const progress = (currentStep / wizardSteps.length) * 100;

    const handleNext = () => {
        if (currentStep < wizardSteps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const currentStepData = wizardSteps[currentStep - 1];

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Samsung TV Frame Assistant
                </CardTitle>
                <CardDescription className="text-lg">
                    Let's find the best solution for your TV frame issue
                </CardDescription>
                <div className="mt-4">
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2">
                        Step {currentStep} of {wizardSteps.length}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{currentStepData.title}</h3>
                    <p className="text-muted-foreground">{currentStepData.description}</p>
                </div>

                {currentStep === 1 && (
                    <div className="space-y-4">
                        {currentStepData.questions?.map((question, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-card to-secondary/20">
                                <span className="font-medium">{question}</span>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">No</Button>
                                    <Button size="sm" className="bg-gradient-to-r from-success to-success">Yes</Button>
                                </div>
                            </div>
                        ))}
                        <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-warning-foreground">Pro Tip</p>
                                <p className="text-sm text-muted-foreground">Answering "Yes" to basic troubleshooting often resolves 60% of issues!</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        {currentStepData.solutions?.map((solution, index) => (
                            <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-card to-secondary/20 hover:shadow-md transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success" />
                                        <span className="font-medium">{solution.text}</span>
                                    </div>
                                    <Badge variant="secondary">{solution.time}</Badge>
                                </div>
                            </div>
                        ))}
                        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                            <p className="text-sm text-accent-foreground">
                                ✨ These quick fixes resolve most common issues. Try them before starting a return process!
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        {currentStepData.options?.map((option, index) => (
                            <div key={index} className={`p-4 border rounded-lg transition-all cursor-pointer ${option.recommended
                                    ? "border-primary bg-primary/5 shadow-md"
                                    : "bg-gradient-to-r from-card to-secondary/20 hover:shadow-md"
                                }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium">{option.type}</span>
                                        {option.recommended && (
                                            <Badge className="bg-gradient-to-r from-success to-success">Recommended</Badge>
                                        )}
                                    </div>
                                    <span className="text-sm text-muted-foreground">{option.time}</span>
                                </div>
                            </div>
                        ))}

                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-destructive">Before You Return</p>
                                <p className="text-sm text-muted-foreground">Returns can take 5-10 business days. Our support team can often provide faster solutions!</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-8">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={currentStep === wizardSteps.length}
                        className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover hover:scale-105 transition-transform"
                    >
                        Next
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};