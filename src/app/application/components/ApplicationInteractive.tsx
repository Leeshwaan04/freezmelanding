'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProgressBar from './ProgressBar';
import StepIndicator from './StepIndicator';
import Step1Personal from './Step1Personal';
import Step2Preferences from './Step2Preferences';
import Step3AboutYou from './Step3AboutYou';
import Step4Payment from './Step4Payment';
import Script from 'next/script';

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  profession: string;
  education: string;
  // Step 2
  ageRangeMin: string;
  ageRangeMax: string;
  heightPreference: string;
  religionPreference: string;
  educationPreference: string;
  smokingPreference: string;
  drinkingPreference: string;
  dietPreference: string;
  // Step 3
  aboutYourself: string;
  hobbies: string;
  relationshipGoals: string;
  dealBreakers: string;
  previousRelationships: string;
  familyValues: string;
  // Step 4
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

const ApplicationInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    city: '',
    profession: '',
    education: '',
    ageRangeMin: '',
    ageRangeMax: '',
    heightPreference: '',
    religionPreference: '',
    educationPreference: '',
    smokingPreference: '',
    drinkingPreference: '',
    dietPreference: '',
    aboutYourself: '',
    hobbies: '',
    relationshipGoals: '',
    dealBreakers: '',
    previousRelationships: '',
    familyValues: '',
    acceptTerms: false,
    acceptPrivacy: false,
    paymentMethod: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    // Load saved progress from localStorage
    const savedData = localStorage.getItem('freezme_application_progress');
    const savedStep = localStorage.getItem('freezme_application_step');

    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }

    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('freezme_application_progress', JSON.stringify(formData));
      localStorage.setItem('freezme_application_step', currentStep.toString());
    }
  }, [formData, currentStep, isHydrated]);

  const steps = [
    { number: 1, title: 'Personal Info', description: 'Basic details' },
    { number: 2, title: 'Preferences', description: 'Partner criteria' },
    { number: 3, title: 'About You', description: 'Your story' },
    { number: 4, title: 'Payment', description: 'Complete application' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
      if (!formData.education.trim()) newErrors.education = 'Education is required';
    } else if (step === 2) {
      if (!formData.ageRangeMin) newErrors.ageRangeMin = 'Minimum age is required';
      if (!formData.ageRangeMax) newErrors.ageRangeMax = 'Maximum age is required';
      if (parseInt(formData.ageRangeMin) > parseInt(formData.ageRangeMax))
        newErrors.ageRangeMax = 'Maximum age must be greater than minimum age';
      if (!formData.heightPreference) newErrors.heightPreference = 'Height preference is required';
      if (!formData.religionPreference) newErrors.religionPreference = 'Religion preference is required';
      if (!formData.educationPreference) newErrors.educationPreference = 'Education preference is required';
      if (!formData.smokingPreference) newErrors.smokingPreference = 'Smoking preference is required';
      if (!formData.drinkingPreference) newErrors.drinkingPreference = 'Drinking preference is required';
      if (!formData.dietPreference) newErrors.dietPreference = 'Diet preference is required';
    } else if (step === 3) {
      if (!formData.aboutYourself.trim()) newErrors.aboutYourself = 'Please tell us about yourself';
      else if (formData.aboutYourself.trim().split(/\s+/).length < 100)
        newErrors.aboutYourself = 'Please write at least 100 words';
      if (!formData.hobbies.trim()) newErrors.hobbies = 'Please share your hobbies';
      if (!formData.relationshipGoals) newErrors.relationshipGoals = 'Relationship goals are required';
      if (!formData.dealBreakers.trim()) newErrors.dealBreakers = 'Please specify your deal breakers';
      if (!formData.previousRelationships.trim())
        newErrors.previousRelationships = 'Please share your relationship history';
      if (!formData.familyValues) newErrors.familyValues = 'Family values preference is required';
    } else if (step === 4) {
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms of service';
      if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy';
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      // 1. Initialize Razorpay Payment
      const res = await new Promise((resolve, reject) => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
          amount: 500000, // 5000 INR in paise
          currency: 'INR',
          name: 'Freezme',
          description: 'Application Assessment Fee',
          image: '/assets/images/image-1768307203606.png',
          handler: function (response: any) {
            resolve(response);
          },
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: '#2C5F5D',
          },
          modal: {
            ondismiss: function () {
              reject(new Error('Payment cancelled'));
            }
          }
        };

        if (!(window as any).Razorpay) {
          reject(new Error('Razorpay SDK failed to load'));
          return;
        }

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      });

      // 2. Submit Data to API
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          paymentResponse: res
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save application data');
      }

      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Clear saved progress
      localStorage.removeItem('freezme_application_progress');
      localStorage.removeItem('freezme_application_step');
    } catch (error: any) {
      console.error('Submission error:', error);
      if (error.message !== 'Payment cancelled') {
        alert(error.message || 'There was an error processing your request.');
      }
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    window.location.href = '/';
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-muted-foreground">Loading application...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Razorpay Integration */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log('Razorpay SDK loaded')}
      />

      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-3">
            Start Your Journey
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Take your time with this application. We value thoughtful responses over quick submissions. Your information is secure and confidential.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar currentStep={currentStep} totalSteps={4} />
          <div className="flex justify-between mt-2 text-sm font-body text-muted-foreground">
            <span>Step {currentStep} of 4</span>
            <span>{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={currentStep} />

        {/* Form Content */}
        <div className="bg-card rounded-lg shadow-card p-6 md:p-8 mb-8">
          {currentStep === 1 && (
            <Step1Personal
              data={{
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                dateOfBirth: formData.dateOfBirth,
                gender: formData.gender,
                city: formData.city,
                profession: formData.profession,
                education: formData.education,
              }}
              errors={errors}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 2 && (
            <Step2Preferences
              data={{
                ageRangeMin: formData.ageRangeMin,
                ageRangeMax: formData.ageRangeMax,
                heightPreference: formData.heightPreference,
                religionPreference: formData.religionPreference,
                educationPreference: formData.educationPreference,
                smokingPreference: formData.smokingPreference,
                drinkingPreference: formData.drinkingPreference,
                dietPreference: formData.dietPreference,
              }}
              errors={errors}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 3 && (
            <Step3AboutYou
              data={{
                aboutYourself: formData.aboutYourself,
                hobbies: formData.hobbies,
                relationshipGoals: formData.relationshipGoals,
                dealBreakers: formData.dealBreakers,
                previousRelationships: formData.previousRelationships,
                familyValues: formData.familyValues,
              }}
              errors={errors}
              onChange={handleInputChange}
            />
          )}

          {currentStep === 4 && (
            <Step4Payment
              data={{
                acceptTerms: formData.acceptTerms,
                acceptPrivacy: formData.acceptPrivacy,
                paymentMethod: formData.paymentMethod,
              }}
              errors={errors}
              onChange={handleInputChange}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md font-body font-medium text-foreground hover:bg-muted transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronLeftIcon" size={20} variant="outline" />
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Next
              <Icon name="ChevronRightIcon" size={20} variant="outline" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-md font-headline font-semibold hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit & Pay ₹5,000
                  <Icon name="CheckCircleIcon" size={20} variant="solid" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Save Progress Note */}
        <div className="mt-6 text-center">
          <p className="text-sm font-body text-muted-foreground flex items-center justify-center gap-2">
            <Icon name="CloudArrowUpIcon" size={16} variant="outline" />
            Your progress is automatically saved. You can return anytime to complete your application.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-card max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-success" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-foreground mb-3">
              Application Submitted!
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Thank you for applying to Freezme. We&apos;ve received your application and payment. Our team will review your profile within 3-5 business days and reach out via email.
            </p>
            <div className="bg-muted/50 rounded-md p-4 mb-6 text-left">
              <p className="text-sm font-body text-foreground mb-2">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-sm font-body text-muted-foreground space-y-1">
                <li>• Profile review by our expert team</li>
                <li>• Personalized consultation call</li>
                <li>• Match curation begins</li>
                <li>• First introduction within 2-3 weeks</li>
              </ul>
            </div>
            <button
              onClick={handleCloseModal}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationInteractive;