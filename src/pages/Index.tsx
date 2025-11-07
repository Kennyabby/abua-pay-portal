import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Smartphone, TrendingUp, Users, FileText, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const revenueCategories = [
    { title: "Market Levies", icon: Users, description: "Daily and monthly market fees" },
    { title: "Business Permits", icon: FileText, description: "Permits and licenses" },
    { title: "Property Rates", icon: TrendingUp, description: "Land and property taxes" },
    { title: "Development Fees", icon: CreditCard, description: "Construction and development" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade encryption and secure payment processing"
    },
    {
      icon: Smartphone,
      title: "Multiple Channels",
      description: "Pay via web, mobile, POS, bank transfer or USSD"
    },
    {
      icon: FileText,
      title: "Instant Receipts",
      description: "Get digital receipts and payment confirmations instantly"
    },
    {
      icon: TrendingUp,
      title: "Real-time Tracking",
      description: "Track all your payments and download statements anytime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Abua/Odual LGA</h1>
              <p className="text-xs text-muted-foreground">Revenue Portal</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/citizen" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Citizen Portal
            </Link>
            <Link to="/admin" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Admin
            </Link>
            <Button variant="default">Make Payment</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Secure • Transparent • Efficient
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Digital Revenue Collection for
            <span className="text-primary"> Modern Governance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pay your taxes, levies, and fees securely online. Fast, transparent, and convenient payment solutions for all citizens of Abua/Odual Local Government Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/payment">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Make a Payment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/citizen">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Citizen Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Revenue Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Payment Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select from our range of revenue services and make secure payments instantly
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {revenueCategories.map((category, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Use Our Portal?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience seamless, secure, and transparent revenue collection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 border-0 text-primary-foreground">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Payment?</CardTitle>
            <CardDescription className="text-primary-foreground/90 text-lg">
              Join thousands of citizens using our secure digital payment platform
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <Link to="/payment">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                Start Payment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Abua/Odual Local Government Area. All rights reserved.</p>
          <p className="mt-2">Powered by Secure Digital Revenue Solutions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
