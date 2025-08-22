import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, Clock, Users } from "lucide-react";

export const LiveSupportWidget = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const supportOptions = [
        {
            id: "live-chat",
            title: "Live Chat",
            description: "Get instant help from our support team",
            icon: MessageCircle,
            availability: "Available now",
            waitTime: "< 2 minutes",
            status: "online"
        },
        {
            id: "phone-support",
            title: "Phone Support",
            description: "Speak directly with a specialist",
            icon: Phone,
            availability: "Mon-Fri 9AM-6PM",
            waitTime: "< 5 minutes",
            status: "online"
        },
        {
            id: "email-support",
            title: "Email Support",
            description: "Send us your detailed inquiry",
            icon: Mail,
            availability: "24/7",
            waitTime: "4-6 hours",
            status: "available"
        }
    ];

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Samsung TV Frame Expert Support
                </CardTitle>
                <CardDescription className="text-lg">
                    Our TV frame specialists can resolve mounting and compatibility issues without returns
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {supportOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedOption === option.id;

                    return (
                        <div
                            key={option.id}
                            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${isSelected
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border bg-gradient-to-r from-card to-secondary/20 hover:shadow-md hover:border-primary/50"
                                }`}
                            onClick={() => setSelectedOption(option.id)}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`p-2 rounded-lg ${option.status === 'online' ? 'bg-success/10' : 'bg-warning/10'
                                    }`}>
                                    <Icon className={`w-6 h-6 ${option.status === 'online' ? 'text-success' : 'text-warning'
                                        }`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-foreground">{option.title}</h3>
                                        <Badge variant={option.status === 'online' ? 'default' : 'secondary'} className="text-xs">
                                            {option.status === 'online' ? 'Online' : 'Available'}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {option.availability}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            Wait: {option.waitTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {selectedOption && (
                    <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="flex-1 bg-gradient-to-r from-primary to-primary-hover hover:scale-105 transition-transform">
                                Start {supportOptions.find(opt => opt.id === selectedOption)?.title}
                            </Button>
                            <Button variant="outline" className="flex-1">
                                Skip to Return Process
                            </Button>
                        </div>
                    </div>
                )}

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    🖼️ Our TV frame specialists resolve 92% of mounting and compatibility issues without returns
                </div>
            </CardContent>
        </Card>
    );
};