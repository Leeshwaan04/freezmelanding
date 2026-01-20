'use client';

import FormField from './FormField';
import { motion } from 'framer-motion';

interface PersonalData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  profession: string;
  education: string;
}

interface Step1PersonalProps {
  data: PersonalData;
  errors: Partial<Record<keyof PersonalData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Step1Personal = ({ data, errors, onChange }: Step1PersonalProps) => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const cityOptions = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'other', label: 'Other' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <div className="border-b border-border/20 pb-6">
        <h2 className="font-headline text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
          Personal Information
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Let&apos;s start with the basics. Your information is encrypted and visible only to our relationship experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <motion.div variants={itemVariants}>
          <FormField
            label="Full Name"
            name="fullName"
            value={data.fullName}
            onChange={onChange}
            error={errors.fullName}
            required
            placeholder="John Doe"
            icon="UserIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            error={errors.email}
            required
            placeholder="john@example.com"
            icon="EnvelopeIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={onChange}
            error={errors.phone}
            required
            placeholder="+91 00000 00000"
            icon="PhoneIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={onChange}
            error={errors.dateOfBirth}
            required
            icon="CalendarDaysIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Gender"
            name="gender"
            type="select"
            value={data.gender}
            onChange={onChange}
            error={errors.gender}
            required
            options={genderOptions}
            icon="UserCircleIcon"
            placeholder="Identity"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Current City"
            name="city"
            type="select"
            value={data.city}
            onChange={onChange}
            error={errors.city}
            required
            options={cityOptions}
            icon="MapPinIcon"
            placeholder="Where do you live?"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Profession"
            name="profession"
            value={data.profession}
            onChange={onChange}
            error={errors.profession}
            required
            placeholder="e.g., Venture Capitalist"
            icon="BriefcaseIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Education"
            name="education"
            value={data.education}
            onChange={onChange}
            error={errors.education}
            required
            placeholder="e.g., Stanford MBA"
            icon="AcademicCapIcon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step1Personal;