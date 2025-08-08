import { QRPayment } from "@/components/sections/QRPayment";

export default function PaymentPage() {
  return (
    <div className="min-h-screen">
      <QRPayment purpose="Animal Welfare Donation" defaultAmount={500} />
    </div>
  );
}
