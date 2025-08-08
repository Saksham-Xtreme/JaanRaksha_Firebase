'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { QrCode, CreditCard, IndianRupee, CheckCircle } from "lucide-react";
import { generateQRCode, verifyPayment } from "@/app/actions/verification";
import { useToast } from "@/hooks/use-toast";

interface QRPaymentProps {
  purpose?: string;
  defaultAmount?: number;
}

export function QRPayment({ purpose = "Donation", defaultAmount = 100 }: QRPaymentProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const handleGenerateQR = async () => {
    setIsLoading(true);
    try {
      const result = await generateQRCode(amount, purpose);
      if (result.success) {
        setQrCodeUrl(result.qrCodeUrl);
        setTransactionId(result.transactionId);
        toast({
          title: "QR Code Generated",
          description: `Scan to pay ₹${amount} for ${purpose}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyPayment = async () => {
    if (!transactionId) return;
    
    setIsLoading(true);
    try {
      const result = await verifyPayment(transactionId);
      if (result.success) {
        setIsVerified(true);
        toast({
          title: "Payment Verified!",
          description: "Thank you for your contribution to animal welfare!",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify payment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Support Animal Welfare
            </h2>
            <p className="text-lg text-muted-foreground">
              Scan QR code to make a secure payment and help animals in need
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-6 w-6 text-green-600" />
                Quick Payment
              </CardTitle>
              <CardDescription>
                Choose amount and scan QR code to donate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Selection */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Enter amount"
                  className="text-lg"
                />
              </div>

              {/* Purpose Display */}
              <div className="flex items-center gap-2">
                <Badge variant="outline">{purpose}</Badge>
                <span className="text-sm text-muted-foreground">
                  Your contribution will help animals in need
                </span>
              </div>

              {/* Generate QR Button */}
              <Button 
                onClick={handleGenerateQR} 
                disabled={isLoading || amount <= 0}
                className="w-full"
                size="lg"
              >
                <QrCode className="mr-2 h-5 w-5" />
                {isLoading ? "Generating..." : "Generate QR Code"}
              </Button>

              {/* QR Code Display */}
              {qrCodeUrl && (
                <div className="text-center space-y-4">
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <img 
                      src={qrCodeUrl} 
                      alt="Payment QR Code" 
                      className="w-48 h-48"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Scan with any UPI app to pay ₹{amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Transaction ID: {transactionId}
                    </p>
                  </div>
                  
                  {/* Verify Payment Button */}
                  <Button 
                    onClick={handleVerifyPayment}
                    disabled={isLoading || isVerified}
                    variant="outline"
                    className="w-full"
                  >
                    {isVerified ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                        Payment Verified
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-5 w-5" />
                        {isLoading ? "Verifying..." : "Verify Payment"}
                      </>
                    )}
                  </Button>
                </div>
              )}

              {/* Payment Methods */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Supported Payment Methods</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Google Pay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>PhonePe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Paytm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>BHIM UPI</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
