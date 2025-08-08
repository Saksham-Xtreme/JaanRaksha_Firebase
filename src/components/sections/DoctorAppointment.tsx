'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Phone, MapPin, Stethoscope, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DoctorAppointmentProps {
  animalId?: string;
  animalName?: string;
}

interface AppointmentData {
  petName: string;
  petType: string;
  ownerName: string;
  phone: string;
  email: string;
  appointmentDate: string;
  appointmentTime: string;
  serviceType: string;
  symptoms: string;
  emergency: boolean;
}

export function DoctorAppointment({ animalId, animalName }: DoctorAppointmentProps) {
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    petName: animalName || '',
    petType: '',
    ownerName: '',
    phone: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceType: '',
    symptoms: '',
    emergency: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!appointmentData.petName || !appointmentData.ownerName || !appointmentData.phone || 
          !appointmentData.appointmentDate || !appointmentData.appointmentTime || !appointmentData.serviceType) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Simulate appointment booking
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      toast({
        title: "Appointment Booked!",
        description: "Your veterinary appointment has been scheduled successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AppointmentData, value: string | boolean) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
  };

  const availableDoctors = [
    { id: "dr-sharma", name: "Dr. Priya Sharma", specialization: "General Veterinary", experience: "8 years" },
    { id: "dr-patel", name: "Dr. Rajesh Patel", specialization: "Surgery", experience: "12 years" },
    { id: "dr-verma", name: "Dr. Anjali Verma", specialization: "Emergency Care", experience: "10 years" },
    { id: "dr-kumar", name: "Dr. Amit Kumar", specialization: "Dermatology", experience: "6 years" },
  ];

  const serviceTypes = [
    "General Checkup",
    "Vaccination",
    "Surgery",
    "Emergency Care",
    "Dental Care",
    "Grooming",
    "Behavioral Consultation",
    "Nutrition Consultation",
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                  <h2 className="text-2xl font-bold">Appointment Confirmed!</h2>
                  <p className="text-muted-foreground">
                    Your appointment has been successfully scheduled. We'll send you a confirmation email with details.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg w-full">
                    <h3 className="font-semibold mb-2">Appointment Details:</h3>
                    <div className="text-sm space-y-1">
                      <p><strong>Pet:</strong> {appointmentData.petName}</p>
                      <p><strong>Date:</strong> {appointmentData.appointmentDate}</p>
                      <p><strong>Time:</strong> {appointmentData.appointmentTime}</p>
                      <p><strong>Service:</strong> {appointmentData.serviceType}</p>
                    </div>
                  </div>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Book Another Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Veterinary Care
            </h2>
            <p className="text-lg text-muted-foreground">
              Book an appointment with our experienced veterinarians
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Available Doctors */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Our Veterinarians
                  </CardTitle>
                  <CardDescription>
                    Experienced professionals dedicated to animal care
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availableDoctors.map((doctor) => (
                    <div key={doctor.id} className="border rounded-lg p-3">
                      <h3 className="font-semibold text-sm">{doctor.name}</h3>
                      <p className="text-xs text-muted-foreground">{doctor.specialization}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {doctor.experience} experience
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </CardTitle>
                  <CardDescription>
                    Schedule a visit for your pet's health checkup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Pet Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Pet Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="petName">Pet Name *</Label>
                          <Input
                            id="petName"
                            value={appointmentData.petName}
                            onChange={(e) => handleInputChange('petName', e.target.value)}
                            placeholder="Enter pet's name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="petType">Pet Type *</Label>
                          <Select value={appointmentData.petType} onValueChange={(value) => handleInputChange('petType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pet type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dog">Dog</SelectItem>
                              <SelectItem value="cat">Cat</SelectItem>
                              <SelectItem value="bird">Bird</SelectItem>
                              <SelectItem value="rabbit">Rabbit</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Owner Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Owner Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ownerName">Owner Name *</Label>
                          <Input
                            id="ownerName"
                            value={appointmentData.ownerName}
                            onChange={(e) => handleInputChange('ownerName', e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={appointmentData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={appointmentData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Appointment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="appointmentDate">Date *</Label>
                          <Input
                            id="appointmentDate"
                            type="date"
                            value={appointmentData.appointmentDate}
                            onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="appointmentTime">Time *</Label>
                          <Select value={appointmentData.appointmentTime} onValueChange={(value) => handleInputChange('appointmentTime', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select value={appointmentData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service} value={service}>{service}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Symptoms */}
                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Symptoms or Concerns</Label>
                      <Textarea
                        id="symptoms"
                        value={appointmentData.symptoms}
                        onChange={(e) => handleInputChange('symptoms', e.target.value)}
                        placeholder="Describe any symptoms or concerns about your pet"
                        rows={3}
                      />
                    </div>

                    {/* Emergency Checkbox */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="emergency"
                        checked={appointmentData.emergency}
                        onChange={(e) => handleInputChange('emergency', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="emergency" className="text-sm">
                        This is an emergency appointment
                      </Label>
                    </div>

                    {appointmentData.emergency && (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Emergency appointments will be prioritized. Please call our emergency line if immediate assistance is needed.
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? "Booking Appointment..." : "Book Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
