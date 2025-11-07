import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, LogOut, TrendingUp, Users, DollarSign, Activity, Download, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("adminUser");
    if (!userData) {
      navigate("/admin/login");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminUser");
    toast({
      title: "Logged Out",
      description: "Admin session ended",
    });
    navigate("/admin/login");
  };

  const stats = [
    { label: "Total Revenue", value: "₦12,450,000", change: "+12.5%", icon: DollarSign, color: "text-primary" },
    { label: "Transactions", value: "1,247", change: "+8.2%", icon: Activity, color: "text-accent" },
    { label: "Active Users", value: "856", change: "+15.3%", icon: Users, color: "text-primary" },
    { label: "This Month", value: "₦2,850,000", change: "+18.7%", icon: TrendingUp, color: "text-accent" }
  ];

  const recentTransactions = [
    { id: "TXN001", payer: "John Doe", category: "Market Levy", amount: "₦5,000", time: "2 hours ago", status: "Success" },
    { id: "TXN002", payer: "Jane Smith", category: "Business Permit", amount: "₦25,000", time: "3 hours ago", status: "Success" },
    { id: "TXN003", payer: "Mike Johnson", category: "Property Rate", amount: "₦15,000", time: "5 hours ago", status: "Success" },
    { id: "TXN004", payer: "Sarah Williams", category: "Development Fee", amount: "₦10,000", time: "6 hours ago", status: "Success" },
  ];

  const categoryRevenue = [
    { name: "Market Levies", percentage: 42, amount: "₦5,234,000" },
    { name: "Business Permits", percentage: 28, amount: "₦3,486,000" },
    { name: "Property Rates", percentage: 18, amount: "₦2,241,000" },
    { name: "Other", percentage: 12, amount: "₦1,489,000" },
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
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Revenue Dashboard</h1>
              <p className="text-muted-foreground">Real-time analytics and performance metrics</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Export Report
              </Button>
              <Button className="gap-2">
                <FileText className="h-4 w-4" /> Generate Report
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payments received</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((txn) => (
                    <div key={txn.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{txn.payer}</p>
                        <p className="text-sm text-muted-foreground">{txn.category} • {txn.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{txn.amount}</p>
                        <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{txn.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Category</CardTitle>
                <CardDescription>Distribution breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryRevenue.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{cat.name}</span>
                        <span className="font-medium text-foreground">{cat.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${idx % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                          style={{ width: `${cat.percentage}%` }} 
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{cat.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reports Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Revenue trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">January 2025</span>
                    <span className="font-semibold text-foreground">₦2,850,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">December 2024</span>
                    <span className="font-semibold text-foreground">₦2,410,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">November 2024</span>
                    <span className="font-semibold text-foreground">₦2,680,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Channel distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Online Payment</span>
                    <span className="font-semibold text-foreground">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bank Transfer</span>
                    <span className="font-semibold text-foreground">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">POS</span>
                    <span className="font-semibold text-foreground">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">USSD</span>
                    <span className="font-semibold text-foreground">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
