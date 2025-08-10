'use client';

import { useState } from 'react';
import { FundraiserForm } from '@/components/sections/FundraiserForm';
import { ProvideShelter } from '@/components/sections/ProvideShelter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Home, ArrowRight } from 'lucide-react';

export default function ProvideShelterPage() {
  const { user } = useAuth();
  const [showFundraiser, setShowFundraiser] = useState(true);
  const [showLandForm, setShowLandForm] = useState(false);

  const handleFundraiserComplete = () => {
    setShowFundraiser(false);
    setShowLandForm(true);
  };

  const handleSkipFundraiser = () => {
    setShowFundraiser(false);
    setShowLandForm(true);
  };

  if (showFundraiser) {
    return (
      <div>
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                  Support Our Mission
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Before you offer your land for shelter, consider supporting our fundraising campaign. 
                  Every contribution helps us build better facilities for animals in need.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      Support Fundraiser
                    </CardTitle>
                    <CardDescription>
                      Help us raise funds for animal shelter construction
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your donation will directly support the construction and maintenance of animal shelters across India.
                    </p>
                    <Button 
                      onClick={handleFundraiserComplete}
                      className="w-full"
                    >
                      Continue to Fundraiser
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-green-500" />
                      Skip to Land Form
                    </CardTitle>
                    <CardDescription>
                      Proceed directly to offer your land
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you prefer to skip the fundraiser and directly offer your land for shelter development.
                    </p>
                    <Button 
                      onClick={handleSkipFundraiser}
                      variant="outline"
                      className="w-full"
                    >
                      Skip to Land Form
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <FundraiserForm />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (showLandForm) {
    return <ProvideShelter />;
  }

  return null;
}
