'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProgressBar from './ProgressBar';
import StepIndicator from './StepIndicator';
import Step1Personal from './Step1Personal';
import Step2Preferences from './Step2Preferences';
import Step3AboutYou from './Step3AboutYou';
import Step4Finalize from './Step4Finalize';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  dateOfBirth: string;
  gender: string;
  height: string;
  religion: string;
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
  wantsChildren: string;
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
    countryCode: '+91', // Default to India
    dateOfBirth: '',
    gender: '',
    height: '',
    religion: '',
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
    wantsChildren: '',
    aboutYourself: '',
    hobbies: '',
    relationshipGoals: '',
    dealBreakers: '',
    previousRelationships: '',
    familyValues: '',
    acceptTerms: false,
    acceptPrivacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    // Load saved progress from localStorage
    try {
      const savedData = localStorage.getItem('freezme_application_progress');
      const savedStep = localStorage.getItem('freezme_application_step');

      if (savedData) {
        const parsed = JSON.parse(savedData);
        // Ensure the parsed data has the expected structure
        if (parsed && typeof parsed === 'object') {
          setFormData(parsed);
        }
      }

      if (savedStep) {
        const stepNum = parseInt(savedStep, 10);
        if (stepNum >= 1 && stepNum <= 4) {
          setCurrentStep(stepNum);
        }
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
      // Clear corrupted data
      localStorage.removeItem('freezme_application_progress');
      localStorage.removeItem('freezme_application_step');
    }
  }, []);

  // Save progress to localStorage (debounced)
  useEffect(() => {
    if (!isHydrated) return;

    setIsSaving(true);
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('freezme_application_progress', JSON.stringify(formData));
        localStorage.setItem('freezme_application_step', currentStep.toString());
        setIsSaving(false);
      } catch (error) {
        console.error('Error saving data:', error);
        setIsSaving(false);
      }
    }, 500); // Reduced from 1000ms to 500ms for faster saves

    return () => {
      clearTimeout(timer);
      setIsSaving(false);
    };
  }, [formData, currentStep, isHydrated]);

  const steps = [
    { number: 1, title: 'Identity', description: 'The foundational details' },
    { number: 2, title: 'The Compass', description: 'Your vision for a partner' },
    { number: 3, title: 'The Deep Dive', description: 'Values, legacy & story' },
    { number: 4, title: 'Finalize', description: 'Review & submit application' },
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
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      } else {
        const dob = new Date(formData.dateOfBirth);
        const today = new Date();
        const age = Math.floor((today.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

        if (dob > today) {
          newErrors.dateOfBirth = 'Date of birth cannot be in the future';
        } else if (age < 18) {
          newErrors.dateOfBirth = 'You must be at least 18 years old';
        } else if (age > 100) {
          newErrors.dateOfBirth = 'Please enter a valid date of birth';
        }
      }
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.height) newErrors.height = 'Height is required';
      if (!formData.religion) newErrors.religion = 'Religion is required';
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
      if (!formData.wantsChildren) newErrors.wantsChildren = 'Children preference is required';
    } else if (step === 3) {
      if (!formData.aboutYourself.trim()) newErrors.aboutYourself = 'Please tell us about yourself';
      else if (formData.aboutYourself.trim().split(/\s+/).length < 20)
        newErrors.aboutYourself = 'Please write at least 20 words';
      if (!formData.hobbies.trim()) newErrors.hobbies = 'Please share your hobbies';
      if (!formData.relationshipGoals) newErrors.relationshipGoals = 'Relationship goals are required';
      if (!formData.dealBreakers.trim()) newErrors.dealBreakers = 'Please specify your deal breakers';
      // previousRelationships is now optional
      if (!formData.familyValues) newErrors.familyValues = 'Family values preference is required';
    } else if (step === 4) {
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms of service';
      if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If validation fails, scroll to top so user sees the errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      // Submit Data to API directly
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadSource: 'website_application'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2C5F5D', '#D9A174', '#F8F1EB']
      });

      // Clear saved progress
      localStorage.removeItem('freezme_application_progress');
      localStorage.removeItem('freezme_application_step');
    } catch (error: any) {
      console.error('Submission error:', error);
      alert(error.message || 'There was an error processing your request.');
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
        {/* Form Content */}
        <div className="relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 100 : -100,
                  opacity: 0,
                  filter: 'blur(10px)'
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                  filter: 'blur(0px)'
                },
                exit: (direction: number) => ({
                  zIndex: 0,
                  x: direction < 0 ? 100 : -100,
                  opacity: 0,
                  filter: 'blur(10px)'
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl shadow-2xl p-5 md:p-10 mb-8 transform-gpu"
            >
              {currentStep === 1 && (
                <Step1Personal
                  data={{
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    countryCode: formData.countryCode,
                    dateOfBirth: formData.dateOfBirth,
                    gender: formData.gender,
                    height: formData.height,
                    religion: formData.religion,
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
                    wantsChildren: formData.wantsChildren,
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
                <Step4Finalize
                  data={{
                    acceptTerms: formData.acceptTerms,
                    acceptPrivacy: formData.acceptPrivacy,
                  }}
                  errors={errors}
                  onChange={handleInputChange}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-2">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/50 rounded-2xl font-body font-medium text-foreground hover:bg-muted/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            <motion.div whileHover={{ x: -4 }}>
              <Icon name="ChevronLeftIcon" size={20} variant="outline" />
            </motion.div>
            Previous
          </button>

          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 bg-primary text-primary-foreground rounded-2xl font-headline font-bold text-lg hover:shadow-[0_10px_30px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Next Step</span>
                <motion.div className="relative z-10" whileHover={{ x: 4 }}>
                  <Icon name="ChevronRightIcon" size={20} variant="outline" />
                </motion.div>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-14 py-4 bg-accent text-accent-foreground rounded-2xl font-headline font-bold text-xl hover:shadow-[0_10px_30px_rgba(var(--accent),0.3)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Icon name="CheckCircleIcon" size={22} variant="solid" />
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            )}

            {/* Auto-save status */}
            <AnimatePresence mode="wait">
              {isSaving ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs font-body text-muted-foreground/60 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Saving progress...
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-body text-muted-foreground/40"
                >
                  Last saved: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              Thank you for applying to Freezme. We&apos;ve received your application. Our team will review your profile and reach out within 3-5 business days.
            </p>
            <div className="bg-muted/50 rounded-md p-4 mb-6 text-left">
              <p className="text-sm font-body text-foreground mb-2">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-sm font-body text-muted-foreground space-y-1">
                <li>• Profile review by our expert team</li>
                <li>• Personalized consultation call</li>
                <li>• Introduction curation begins</li>
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
      {/* Version Marker for debugging */}
      <div className="text-center mt-8 pb-4 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-mono text-muted-foreground">Freezme App v1.1 (Mobile Fixes Live)</p>
      </div>
    </div>
  );
};

export default ApplicationInteractive;