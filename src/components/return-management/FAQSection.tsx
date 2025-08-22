import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, HelpCircle, ThumbsUp, ThumbsDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "How long do I have to return my Samsung TV frame?",
        answer: "You have 30 days from the date of purchase to initiate a return. For defective frames, this period extends to 1 year under Samsung warranty."
    },
    {
        id: 2,
        question: "What if my TV frame doesn't fit my Samsung TV?",
        answer: "Check your TV model and size compatibility first. Our frames are designed for specific Samsung TV models - verify dimensions and mounting hole patterns."
    },
    {
        id: 3,
        question: "Can I return individual frame pieces?",
        answer: "The complete frame set must be returned together. Individual corner pieces or rails cannot be returned separately unless specifically defective."
    },
    {
        id: 4,
        question: "What about scratched or damaged frame pieces?",
        answer: "Frame pieces should be returned in original condition. Minor scratches from normal installation are acceptable, but significant damage may affect return eligibility."
    },
    {
        id: 5,
        question: "My frame is loose after installation, is this covered?",
        answer: "Loose fitting frames are typically installation issues. Contact support first - this often doesn't require a return, just proper mounting adjustments."
    }
];

export const FAQSection = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [helpfulVotes, setHelpfulVotes] = useState<Record<number, 'up' | 'down' | null>>({});

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const handleVote = (id: number, vote: 'up' | 'down') => {
        setHelpfulVotes(prev => ({
            ...prev,
            [id]: prev[id] === vote ? null : vote
        }));
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Samsung TV Frame Returns
                </CardTitle>
                <CardDescription className="text-lg">
                    Find instant answers to common TV frame return questions
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {faqs.map((faq) => {
                    const isOpen = openItems.includes(faq.id);
                    const userVote = helpfulVotes[faq.id];

                    return (
                        <Collapsible key={faq.id} open={isOpen} onOpenChange={() => toggleItem(faq.id)}>
                            <CollapsibleTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="w-full p-4 h-auto text-left justify-between bg-gradient-to-r from-card to-secondary/20 hover:shadow-md border rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-medium">{faq.question}</span>
                                    </div>
                                    {isOpen ? (
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 pb-4">
                                <div className="ml-8 pt-2">
                                    <p className="text-muted-foreground mb-4">{faq.answer}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-muted-foreground">Was this helpful?</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className={`h-8 px-2 ${userVote === 'up' ? 'text-success' : 'text-muted-foreground'}`}
                                            onClick={() => handleVote(faq.id, 'up')}
                                        >
                                            <ThumbsUp className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className={`h-8 px-2 ${userVote === 'down' ? 'text-destructive' : 'text-muted-foreground'}`}
                                            onClick={() => handleVote(faq.id, 'down')}
                                        >
                                            <ThumbsDown className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    );
                })}

                <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-center">Still have questions?</h4>
                    <p className="text-muted-foreground text-sm text-center mb-4">
                        Our support team is here to help with any specific concerns
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-accent to-accent-hover hover:scale-105 transition-transform">
                            Contact Support
                        </Button>
                        <Button variant="outline" className="flex-1">
                            Start Return Process
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};