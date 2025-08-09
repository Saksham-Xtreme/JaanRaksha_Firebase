'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, MapPin, Heart, Camera, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProtectAnimalFormData {
  reporterName: string;
  email: string;
  phone: string;
  animalType: string;
  animalCount: string;
  location: string;
  situation: string;
  urgency: string;
  description: string;
  photos: File[];
  agreeToTerms: boolean;
}

export function ProtectAnimal() {
  const [formData, setFormData] = useState<ProtectAnimalFormData>({
    reporterName: '',
    email: '',
    phone: '',
    animalType: '',
    animalCount: '',
    location: '',
    situation: '',
    urgency: '',
    description: '',
    photos: [],
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.reporterName || !formData.email || !formData.phone || 
          !formData.animalType || !formData.animalCount || !formData.location || 
          !formData.situation || !formData.urgency || !formData.description || 
          formData.photos.length === 0 || !formData.agreeToTerms) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields and upload at least one photo.",
          variant: "destructive",
        });
        return;
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      toast({
        title: "Animal Protection Report Submitted!",
        description: "Thank you for reporting animals in need. Our team will review and take action soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ProtectAnimalFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== index) }));
  };

  const animalTypes = [
    "Dog",
    "Cat",
    "Cow",
    "Goat",
    "Horse",
    "Bird",
    "Wild Animal",
    "Other"
  ];

  const situations = [
    "Injured",
    "Sick",
    "Abandoned",
    "Stray",
    "Abused",
    "Trapped",
    "Lost",
    "Other"
  ];

  const urgencyLevels = [
    "Low - Can wait a few days",
    "Medium - Needs attention within 24 hours",
    "High - Emergency situation",
    "Critical - Immediate attention required"
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-headline mb-4">Report Submitted Successfully!</h2>
              <p className="text-muted-foreground">
                Thank you for reporting animals in need. Our team will review your report 
                and take appropriate action. You'll receive updates via email.
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)}>
              Report Another Animal
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Protect Animals in Need</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Report animals that need help, protection, or rescue. Your reports help us 
            coordinate rescue efforts and provide timely assistance to animals in distress.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Animal Protection Report
              </CardTitle>
              <CardDescription>
                Please provide detailed information about the animals in need and upload photos for verification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Reporter Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Reporter Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reporterName">Full Name *</Label>
                      <Input
                        id="reporterName"
                        value={formData.reporterName}
                        onChange={(e) => handleInputChange('reporterName', e.target.value)}
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
                  </div>
                </div>

                {/* Animal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Animal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="animalType">Animal Type *</Label>
                      <Select value={formData.animalType} onValueChange={(value) => handleInputChange('animalType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select animal type" />
                        </SelectTrigger>
                        <SelectContent>
                          {animalTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="animalCount">Number of Animals *</Label>
                      <Input
                        id="animalCount"
                        type="number"
                        value={formData.animalCount}
                        onChange={(e) => handleInputChange('animalCount', e.target.value)}
                        placeholder="e.g., 1"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map(level => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Textarea
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Complete address or location description"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="situation">Situation *</Label>
                    <Select value={formData.situation} onValueChange={(value) => handleInputChange('situation', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select situation" />
                      </SelectTrigger>
                      <SelectContent>
                        {situations.map(situation => (
                          <SelectItem key={situation} value={situation}>{situation}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe the animals' condition, behavior, and any other relevant details"
                      required
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Animal Photos
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="photos">Upload Animal Photos *</Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="cursor-pointer"
                      />
                      <p className="text-sm text-muted-foreground">
                        Upload photos showing the animals' condition and location
                      </p>
                    </div>
                    
                    {formData.photos.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.photos.map((photo, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt={`Animal photo ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1 h-6 w-6 p-0"
                              onClick={() => removePhoto(index)}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="rounded"
                      required
                    />
                    <Label htmlFor="agreeToTerms">
                      I agree to the terms and conditions for animal protection reporting
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Submit Protection Report
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
