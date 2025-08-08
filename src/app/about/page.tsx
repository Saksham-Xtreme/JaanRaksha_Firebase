import { DynamicIntro } from "@/components/sections/DynamicIntro";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
            About JaanRaksha
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Born from the urgent need to address India's animal welfare crisis, JaanRaksha represents 
            a revolutionary approach to connecting compassion with action.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              To create a unified ecosystem that empowers every Indian to contribute to animal welfare 
              through adoption, land donation, shelter support, and community engagement. We believe that 
              every life matters and every action counts.
            </p>
          </CardContent>
        </Card>

        {/* Why It Was Needed */}
        <DynamicIntro />

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Compassion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Treating every animal with the love and respect they deserve, regardless of their background.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Unity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bringing together individuals, shelters, and communities for a common cause.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Building a supportive network of animal lovers across India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rewarding and celebrating every contribution to animal welfare.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,847+</div>
              <div className="text-muted-foreground">Animals Rescued</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,956+</div>
              <div className="text-muted-foreground">Successful Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">156+</div>
              <div className="text-muted-foreground">Shelters Supported</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="text-muted-foreground mb-6">
            Every small action contributes to a larger change. Start making a difference today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="default" className="px-4 py-2">
              Adopt an Animal
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Donate Land
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Support Shelters
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Earn Points
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
