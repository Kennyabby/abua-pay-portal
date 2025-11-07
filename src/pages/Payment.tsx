import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    description: ""
  });

  const categories = [
    "Market Levy",
    "Business Permit",
    "Property Rate",
    "Development Fee",
    "Parking Fee",
    "Environmental Sanitation",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.category || !formData.fullName || !formData.email || !formData.amount) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Mock Remita Payment Gateway Integration
    toast({
      title: "Redirecting to Remita",
      description: "Please wait while we connect to Remita Payment Gateway...",
    });

    // Simulate Remita API call
    setTimeout(() => {
      const rrr = `REM${Math.floor(Math.random() * 1000000000)}`;
      
      toast({
        title: "Payment Gateway Ready",
        description: `RRR Generated: ${rrr}`,
      });

      // Mock SMS notification
      if (formData.phone) {
        setTimeout(() => {
          toast({
            title: "SMS Sent",
            description: `Payment notification sent to ${formData.phone}`,
          });
        }, 1000);
      }

      // Store payment data with RRR and navigate to receipt
      sessionStorage.setItem("paymentData", JSON.stringify({
        ...formData,
        rrr,
        paymentMethod: "Remita",
        timestamp: new Date().toISOString()
      }));
      
      setTimeout(() => navigate("/receipt"), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
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

      {/* Payment Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <CreditCard className="h-4 w-4" />
              Secure Payment Gateway
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Make a Payment</h1>
            <p className="text-muted-foreground">Complete the form below to process your payment</p>
          </div>

          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>All fields marked with * are required</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Payment Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select payment category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input 
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="08012345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₦) *</Label>
                  <Input 
                    id="amount"
                    type="number"
                    placeholder="5000"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Payment Description</Label>
                  <Input 
                    id="description"
                    placeholder="Additional details (optional)"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                {/* Payment Gateway Info */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Remita Payment Gateway</p>
                        <p className="text-xs text-muted-foreground">Secure & Trusted</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Available Payment Methods:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Remita Online Payment (Card, Bank Transfer)</li>
                      <li>• USSD (*737# GTBank, *894# FirstBank, etc.)</li>
                      <li>• Bank Branch Payment with RRR</li>
                      <li>• POS Payment at LGA Office</li>
                    </ul>
                    <p className="text-xs text-primary mt-3">✓ SMS notifications enabled</p>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full gap-2">
                  <CreditCard className="h-4 w-4" />
                  Proceed to Payment
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your payment is secured with bank-grade encryption. We do not store your card details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Payment;
