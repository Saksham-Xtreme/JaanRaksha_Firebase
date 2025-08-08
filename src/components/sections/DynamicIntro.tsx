'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, AlertTriangle, Shield, Users } from "lucide-react";

export function DynamicIntro() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: "35+ million",
      label: "stray dogs in India",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      color: "text-red-500"
    },
    {
      number: "80%",
      label: "of animals lack proper care",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
      color: "text-yellow-500"
    },
    {
      number: "500+",
      label: "animal cruelty cases daily",
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      color: "text-blue-500"
    },
    {
      number: "2.5 million",
      label: "animals need rescue annually",
      icon: <Users className="h-6 w-6 text-green-500" />,
      color: "text-green-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Why JaanRaksha Was So Needed
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            India faces one of the world's most critical animal welfare crises. With millions of stray animals, 
            limited resources, and a growing need for coordinated rescue efforts, JaanRaksha emerged as a 
            revolutionary platform to bridge the gap between compassion and action.
          </p>
        </div>

        {/* Dynamic Stats */}
        <div className="flex justify-center mb-12">
          <Card className="max-w-md">
            <CardContent className="p-8 text-center">
              <div className={`flex justify-center mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {stats[currentStat].icon}
              </div>
              <div className={`text-3xl font-bold mb-2 transition-all duration-500 ${stats[currentStat].color} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {stats[currentStat].number}
              </div>
              <div className={`text-muted-foreground transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {stats[currentStat].label}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problem Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                The Crisis
              </h3>
              <p className="text-muted-foreground">
                India has the world's largest population of stray animals, with over 35 million dogs alone. 
                Most lack access to basic veterinary care, food, and shelter. Every day, thousands of animals 
                suffer from accidents, diseases, and human cruelty.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-yellow-500" />
                The Gap
              </h3>
              <p className="text-muted-foreground">
                While many Indians want to help animals, there was no centralized platform to connect 
                rescuers, shelters, and volunteers. Individual efforts were scattered and often ineffective 
                due to lack of coordination and resources.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-500" />
                The Solution
              </h3>
              <p className="text-muted-foreground">
                JaanRaksha creates a unified ecosystem where animal lovers can adopt, donate land, 
                support shelters, and earn recognition for their contributions through our innovative 
                point system.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Raja's Rescue</h4>
                  <p className="text-sm text-muted-foreground">
                    Found injured on Mumbai streets, Raja was rescued through JaanRaksha's network. 
                    Now living happily with a family in Pune.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Gauri's Sanctuary</h4>
                  <p className="text-sm text-muted-foreground">
                    A 10-acre land donation in Delhi became home to 50+ rescued cows and other farm animals.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Community Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Over 2,847 animals rescued, 1,956 adopted, and 156 shelters supported across India.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Volunteer Network</h4>
                  <p className="text-sm text-muted-foreground">
                    5,000+ registered volunteers actively participating in rescue and rehabilitation efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">
              Join the Movement - Every Action Counts
            </span>
          </div>
          <p className="mt-4 text-muted-foreground">
            From petting a street dog to donating land for shelters, every small act of kindness 
            contributes to a larger change. Start earning points and making a difference today.
          </p>
        </div>
      </div>
    </section>
  );
}
