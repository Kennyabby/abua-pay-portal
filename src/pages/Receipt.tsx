import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Receipt = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState<any>(null);
  const [receiptNumber] = useState(() => `IGR/${new Date().getFullYear()}/${Math.floor(Math.random() * 1000000)}`);

  useEffect(() => {
    const data = sessionStorage.getItem("paymentData");
    if (data) {
      const parsed = JSON.parse(data);
      setPaymentData(parsed);
      
      // Show SMS notification toast if phone number exists
      if (parsed.phone) {
        setTimeout(() => {
          toast({
            title: "Receipt SMS Sent",
            description: `Digital receipt sent to ${parsed.phone}`,
          });
        }, 1000);
      }
    } else {
      navigate("/payment");
    }
  }, [navigate, toast]);

  if (!paymentData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Abua/Odual LGA</h1>
              <p className="text-xs text-muted-foreground">Revenue Portal</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Receipt */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8 print:hidden">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground">Your payment has been received and processed</p>
          </div>

          {/* Receipt Card */}
          <Card className="border-border shadow-lg">
            <CardHeader className="border-b border-border bg-secondary/20">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Payment Receipt</CardTitle>
                  <CardDescription>Official Receipt - Abua/Odual LGA</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Receipt No.</p>
                  <p className="font-mono font-bold text-primary">{receiptNumber}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Payment Details */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Payment Information</h3>
                <div className="space-y-3">
                  {paymentData.rrr && (
                    <div className="flex justify-between py-2 border-b border-border bg-primary/5 px-2 rounded">
                      <span className="text-muted-foreground font-semibold">Remita RRR:</span>
                      <span className="font-bold text-primary">{paymentData.rrr}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="font-medium text-foreground">{paymentData.paymentMethod || 'Online'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Payment Category:</span>
                    <span className="font-medium text-foreground">{paymentData.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Amount Paid:</span>
                    <span className="font-bold text-xl text-primary">₦{Number(paymentData.amount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Payment Date:</span>
                    <span className="font-medium text-foreground">{new Date().toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Transaction Time:</span>
                    <span className="font-medium text-foreground">{new Date().toLocaleTimeString('en-GB')}</span>
                  </div>
                  {paymentData.description && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Description:</span>
                      <span className="font-medium text-foreground">{paymentData.description}</span>
                    </div>
                  )}
                  {paymentData.phone && (
                    <div className="flex justify-between py-2 bg-accent/5 px-2 rounded">
                      <span className="text-muted-foreground">SMS Notification:</span>
                      <span className="text-xs text-primary font-medium">✓ Sent to {paymentData.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Payer Details */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Payer Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Full Name:</span>
                    <span className="font-medium text-foreground">{paymentData.fullName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium text-foreground">{paymentData.email}</span>
                  </div>
                  {paymentData.phone && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium text-foreground">{paymentData.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-sm text-primary font-medium">
                  ✓ Payment Verified and Recorded
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 print:hidden">
                <Button onClick={handlePrint} size="lg" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Link to="/payment" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    Make Another Payment
                  </Button>
                </Link>
              </div>

              {/* Footer Note */}
              <div className="pt-4 text-center text-xs text-muted-foreground border-t border-border">
                <p>This is an official receipt from Abua/Odual Local Government Area</p>
                <p className="mt-1">For inquiries, contact: revenue@abuaodual.gov.ng</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Receipt;
