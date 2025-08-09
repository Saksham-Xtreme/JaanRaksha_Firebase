'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, MapPin, Home, Camera, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ShelterFormData {
  ownerName: string;
  email: string;
  phone: string;
  landAddress: string;
  landSize: string;
  landType: string;
  currentUse: string;
  description: string;
  photos: File[];
  agreeToTerms: boolean;
}

export function ProvideShelter() {
  const [formData, setFormData] = useState<ShelterFormData>({
    ownerName: '',
    email: '',
    phone: '',
    landAddress: '',
    landSize: '',
    landType: '',
    currentUse: '',
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
      if (!formData.ownerName || !formData.email || !formData.phone || 
          !formData.landAddress || !formData.landSize || !formData.landType || 
          !formData.description || formData.photos.length === 0 || !formData.agreeToTerms) {
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
        title: "Shelter Application Submitted!",
        description: "Thank you for offering your land for animal shelter. We'll review and contact you soon.",
      });
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

  const handleInputChange = (field: keyof ShelterFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== index) }));
  };

  const landTypes = [
    "Agricultural Land",
    "Residential Plot",
    "Commercial Property",
    "Forest Land",
    "Rural Farm",
    "Other"
  ];

  const currentUses = [
    "Vacant",
    "Agricultural",
    "Residential",
    "Commercial",
    "Storage",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-headline mb-4">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground">
                Thank you for offering your land for animal shelter. Our team will review your application 
                and contact you within 3-5 business days.
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Application
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Provide Shelter for Animals</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Help us create safe havens for animals in need. Offer your land for shelter development 
            and make a lasting impact on animal welfare in India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Land Verification Form
              </CardTitle>
              <CardDescription>
                Please provide detailed information about your land and upload photos for verification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Full Name *</Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
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

                {/* Land Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Land Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="landAddress">Land Address *</Label>
                      <Textarea
                        id="landAddress"
                        value={formData.landAddress}
                        onChange={(e) => handleInputChange('landAddress', e.target.value)}
                        placeholder="Complete address of the land"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="landSize">Land Size (Acres) *</Label>
                        <Input
                          id="landSize"
                          type="number"
                          value={formData.landSize}
                          onChange={(e) => handleInputChange('landSize', e.target.value)}
                          placeholder="e.g., 5"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="landType">Land Type *</Label>
                        <Select value={formData.landType} onValueChange={(value) => handleInputChange('landType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select land type" />
                          </SelectTrigger>
                          <SelectContent>
                            {landTypes.map(type => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="currentUse">Current Use *</Label>
                        <Select value={formData.currentUse} onValueChange={(value) => handleInputChange('currentUse', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select current use" />
                          </SelectTrigger>
                          <SelectContent>
                            {currentUses.map(use => (
                              <SelectItem key={use} value={use}>{use}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Land Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe the land, its features, accessibility, water availability, etc."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Land Photos
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="photos">Upload Land Photos *</Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="cursor-pointer"
                      />
                      <p className="text-sm text-muted-foreground">
                        Upload multiple photos showing different angles and features of the land
                      </p>
                    </div>
                    
                    {formData.photos.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.photos.map((photo, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt={`Land photo ${index + 1}`}
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
                      I agree to the terms and conditions for land donation and shelter development
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
                      <Upload className="h-4 w-4" />
                      Submit Land for Verification
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
