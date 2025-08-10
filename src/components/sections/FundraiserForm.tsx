'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Heart, DollarSign, Target, Users } from 'lucide-react';

interface FundraiserFormData {
  name: string;
  email: string;
  phone: string;
  amount: string;
  message: string;
  anonymous: boolean;
}

export function FundraiserForm() {
  const [formData, setFormData] = useState<FundraiserFormData>({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: '',
    anonymous: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Thank you for your support!",
        description: "Your donation will help us provide shelter for animals in need.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: '',
        message: '',
        anonymous: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FundraiserFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Support Our Shelter Fundraiser
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build safe havens for animals in need. Every contribution brings us closer to providing shelter for homeless animals across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  Our Goal
                </CardTitle>
                <CardDescription>
                  Help us raise ₹50,00,000 for animal shelter construction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised</span>
                    <span className="font-semibold">₹12,50,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    25% of ₹50,00,000 goal
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-pink-500" />
                  Community Impact
                </CardTitle>
                <CardDescription>
                  Together we can make a difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Animals Helped</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shelters Built</span>
                    <span className="font-semibold">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Donors</span>
                    <span className="font-semibold">1,200+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Make a Donation
              </CardTitle>
              <CardDescription>
                Your contribution will directly support animal shelter construction and maintenance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Donation Amount (₹) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="1000"
                      min="100"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any special message or dedication"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.anonymous}
                    onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="anonymous">
                    Make this donation anonymous
                  </Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleInputChange('amount', '500')}
                  >
                    ₹500
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleInputChange('amount', '1000')}
                  >
                    ₹1,000
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleInputChange('amount', '2000')}
                  >
                    ₹2,000
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Donate Now
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
