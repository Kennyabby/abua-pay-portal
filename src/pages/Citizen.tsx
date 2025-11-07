import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, History, FileText, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Citizen = () => {
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
              <p className="text-xs text-muted-foreground">Citizen Portal</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Citizen Portal</h1>
            <p className="text-muted-foreground">Manage your payments, receipts, and profile in one place</p>
          </div>

          {/* Login/Register Prompt */}
          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Sign In Required
              </CardTitle>
              <CardDescription>
                Create an account or sign in to access your payment history and manage your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1">
                Sign In
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Create Account
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  View all your past payments and download receipts anytime
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Receipts</CardTitle>
                <CardDescription>
                  Access and download all your payment receipts in one place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Profile Management</CardTitle>
                <CardDescription>
                  Update your personal information and contact details
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Payment Reminders</CardTitle>
                <CardDescription>
                  Get notified about upcoming payments and due dates via SMS/Email
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Quick Action */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Don't have time to register?</p>
            <Link to="/payment">
              <Button size="lg" variant="outline">
                Make a Quick Payment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Citizen;
