import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, LogOut, FileText, CreditCard, History, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface BusinessUser {
  email: string;
  businessName: string;
  loggedIn: boolean;
}

const BusinessDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<BusinessUser | null>(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("businessUser");
    if (!userData) {
      navigate("/business/auth");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("businessUser");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/business/auth");
  };

  const payments = [
    { id: "PAY001", date: "2025-01-15", category: "Business Permit", amount: "₦25,000", status: "Completed" },
    { id: "PAY002", date: "2025-01-10", category: "Market Levy", amount: "₦5,000", status: "Completed" },
    { id: "PAY003", date: "2024-12-28", category: "Development Fee", amount: "₦15,000", status: "Completed" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Abua/Odual LGA</h1>
              <p className="text-xs text-muted-foreground">Business Dashboard</p>
            </div>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome, {user.businessName}
            </h1>
            <p className="text-muted-foreground">Manage your payments and business profile</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">₦45,000</p>
                <p className="text-sm text-muted-foreground">Total Paid This Year</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <History className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">3</p>
                <p className="text-sm text-muted-foreground">Transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">3</p>
                <p className="text-sm text-muted-foreground">Receipts Available</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium text-foreground">{payment.category}</p>
                        <p className="text-sm text-muted-foreground">{payment.date} • {payment.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{payment.amount}</p>
                        <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{payment.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/payment">
                  <Button className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Make a Payment
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileText className="h-4 w-4" />
                  View All Receipts
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Bell className="h-4 w-4" />
                  Notification Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Payment Reminders
              </CardTitle>
              <CardDescription>
                Enable SMS and email notifications to never miss a payment deadline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Enable Notifications</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BusinessDashboard;
