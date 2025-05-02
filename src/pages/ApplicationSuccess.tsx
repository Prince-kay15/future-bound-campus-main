
import React, { useEffect } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Check } from 'lucide-react';

interface LocationState {
  email?: string;
}

const ApplicationSuccess = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  useEffect(() => {
    // Simulate sending an email notification
    if (state?.email) {
      console.log(`Auto message sent to ${state.email}: Your admission application will be reviewed`);
    }
  }, [state]);
  
  // If user navigated directly to this page without submitting application, redirect to apply
  if (!state?.email) {
    return <Navigate to="/apply" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-serif text-green-700">Application Submitted Successfully!</CardTitle>
              <CardDescription>Thank you for applying to Future Bound Campus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-600">
                Your application has been received and is being processed by our admissions team.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-4">
                <div className="flex items-start">
                  <div className="bg-university-100 p-2 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-university-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Confirmation Email</h3>
                    <p className="text-sm text-gray-600">
                      We've sent a confirmation to <span className="font-medium">{state.email}</span> with details about your application.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-university-100 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-university-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Next Steps</h3>
                    <p className="text-sm text-gray-600">
                      Your application will be reviewed within the next 24 hours. 
                      You'll receive an admission decision letter via email.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  If you have any questions about your application, please contact our admissions team 
                  at <a href="mailto:admissions@futurebound.edu" className="text-university-500 hover:text-university-600">admissions@futurebound.edu</a>
                </p>
                <Link to="/" className="university-btn">
                  Return to Homepage
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationSuccess;
