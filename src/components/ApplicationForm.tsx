
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PaymentSection from './PaymentSection';

interface ApplicationFormProps {
  selectedCourse?: string;
  selectedLevel?: string;
}

const ApplicationForm = ({ selectedCourse, selectedLevel }: ApplicationFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    dateOfBirth: '',
    educationLevel: selectedLevel || '',
    course: selectedCourse || '',
    statement: '',
  });
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate basic information
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validate education details
      if (!formData.educationLevel || !formData.course || !formData.statement) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3 && paymentComplete) {
      // Final submission
      // In a real app, this would send the data to your backend
      toast({
        title: "Application Submitted!",
        description: "You will receive a confirmation email shortly.",
      });
      navigate('/application-success', { state: { email: formData.email } });
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentComplete(true);
    toast({
      title: "Payment Successful",
      description: "Your application fee has been processed.",
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-serif">Application Form</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {step === 1 && "Step 1: Personal Information"}
          {step === 2 && "Step 2: Academic Information"}
          {step === 3 && "Step 3: Application Fee Payment"}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="address" className="text-sm sm:text-base">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="city" className="text-sm sm:text-base">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="country" className="text-sm sm:text-base">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm sm:text-base">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="educationLevel" className="text-sm sm:text-base">Education Level *</Label>
                <Select
                  value={formData.educationLevel}
                  onValueChange={(value) => handleSelectChange("educationLevel", value)}
                >
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="Graduate">Graduate</SelectItem>
                    <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="course" className="text-sm sm:text-base">Course *</Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleSelectChange("course", value)}
                >
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="business-administration">Business Administration</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="law">Law</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="statement" className="text-sm sm:text-base">Personal Statement *</Label>
                <Textarea
                  id="statement"
                  name="statement"
                  value={formData.statement}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you're interested in this program..."
                  className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <PaymentSection onPaymentSuccess={handlePaymentSuccess} />
          )}

          <div className="flex justify-between pt-2">
            {step > 1 && (
              <button
                type="button"
                className="university-btn-outline text-xs sm:text-sm"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="university-btn text-xs sm:text-sm ml-auto"
              disabled={step === 3 && !paymentComplete}
            >
              {step < 3 ? 'Next' : 'Submit Application'}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
