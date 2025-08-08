"use server";

import { z } from "zod";

const verificationSchema = z.object({
  userId: z.string(),
  animalId: z.string(),
  action: z.enum(['protect', 'pet', 'adopt']),
  verificationCode: z.string().optional(),
  location: z.string().optional(),
  timestamp: z.date(),
});

export async function verifyAnimalAction(values: z.infer<typeof verificationSchema>) {
  const parsed = verificationSchema.safeParse(values);
  
  if (!parsed.success) {
    return { success: false, message: "Invalid verification data." };
  }

  const { userId, animalId, action, verificationCode, location, timestamp } = parsed.data;

  // Simulate verification process
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate verification code if not provided
  const code = verificationCode || `VC${Date.now()}`;

  // Award points based on verified action
  let points = 0;
  switch (action) {
    case 'protect': points = 20; break;
    case 'pet': points = 20; break;
    case 'adopt': points = 50; break;
  }

  return {
    success: true,
    verificationCode: code,
    points: points,
    message: `Successfully verified ${action} action for animal ${animalId}`,
    timestamp: timestamp,
    location: location || "Unknown location"
  };
}

export async function generateQRCode(amount: number, purpose: string) {
  // Simulate QR code generation
  const qrData = {
    amount: amount,
    purpose: purpose,
    timestamp: new Date().toISOString(),
    transactionId: `TXN${Date.now()}`
  };

  return {
    success: true,
    qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(JSON.stringify(qrData))}`,
    transactionId: qrData.transactionId,
    amount: amount,
    purpose: purpose
  };
}

export async function verifyPayment(transactionId: string) {
  // Simulate payment verification
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    success: true,
    transactionId: transactionId,
    status: "completed",
    message: "Payment verified successfully"
  };
}
