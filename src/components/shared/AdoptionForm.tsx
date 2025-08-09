'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, User, MapPin, Phone, Mail, Home, Heart, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Animal } from "@/lib/types";

interface AdoptionFormProps {
  animal: Animal;
  onClose: () => void;
  onSubmit: (formData: AdoptionFormData) => void;
}

export interface AdoptionFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  occupation: string;
  experience: string;
  familyMembers: string;
  hasPets: boolean;
  petExperience: string;
  reasonForAdoption: string;
  howDidYouHear: string;
  agreeToTerms: boolean;
}

export function AdoptionForm({ animal, onClose, onSubmit }: AdoptionFormProps) {
  const [formData, setFormData] = useState<AdoptionFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    occupation: '',
    experience: '',
    familyMembers: '',
    hasPets: false,
    petExperience: '',
    reasonForAdoption: '',
    howDidYouHear: '',
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.agreeToTerms) {
        toast({
          title: "Terms Not Accepted",
          description: "Please accept the terms and conditions.",
          variant: "destructive",
        });
        return;
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      onSubmit(formData);
      
      toast({
        title: "Adoption Application Submitted!",
        description: `Thank you for your interest in adopting ${animal.name}. We'll contact you within 24 hours.`,
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AdoptionFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Adopt {animal.name}
              </CardTitle>
              <CardDescription>
                Please provide your information to start the adoption process
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Animal Info */}
            <div className="bg-secondary/50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <img 
                  src={animal.photos[0]} 
                  alt={animal.name}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="font-semibold">{animal.name}</h3>
                  <p className="text-sm text-muted-foreground">{animal.species}</p>
                  <Badge variant="outline" className="mt-1">{animal.status}</Badge>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    placeholder="Your profession"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Address Information
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="House/Flat number, Street, Area"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="123456"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Pet Experience & Family
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="familyMembers">Family Members</Label>
                  <Input
                    id="familyMembers"
                    value={formData.familyMembers}
                    onChange={(e) => handleInputChange('familyMembers', e.target.value)}
                    placeholder="Number of family members"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience with Animals</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No experience</SelectItem>
                      <SelectItem value="some">Some experience</SelectItem>
                      <SelectItem value="experienced">Experienced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasPets"
                    checked={formData.hasPets}
                    onCheckedChange={(checked) => handleInputChange('hasPets', checked as boolean)}
                  />
                  <Label htmlFor="hasPets">Do you currently have pets?</Label>
                </div>
                
                {formData.hasPets && (
                  <div className="space-y-2">
                    <Label htmlFor="petExperience">Tell us about your current pets</Label>
                    <Textarea
                      id="petExperience"
                      value={formData.petExperience}
                      onChange={(e) => handleInputChange('petExperience', e.target.value)}
                      placeholder="Types of pets, ages, etc."
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Adoption Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Adoption Details</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reasonForAdoption">Why do you want to adopt {animal.name}? *</Label>
                  <Textarea
                    id="reasonForAdoption"
                    value={formData.reasonForAdoption}
                    onChange={(e) => handleInputChange('reasonForAdoption', e.target.value)}
                    placeholder="Tell us about your motivation for adoption"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                  <Select value={formData.howDidYouHear} onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the terms and conditions *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    By checking this box, you agree to provide a loving home, regular veterinary care, 
                    and commit to the animal's well-being for their entire life.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
