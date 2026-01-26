'use client';

import FormField from './FormField';
import PhoneInputField from './PhoneInputField';
import { motion } from 'framer-motion';

interface PersonalData {
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

  const heightOptions = [
    { value: '140-150', label: '140-150 cm (4\'7" - 4\'11")' },
    { value: '150-160', label: '150-160 cm (4\'11" - 5\'3")' },
    { value: '160-170', label: '160-170 cm (5\'3" - 5\'7")' },
    { value: '170-180', label: '170-180 cm (5\'7" - 5\'11")' },
    { value: '180-190', label: '180-190 cm (5\'11" - 6\'3")' },
    { value: '190+', label: '190+ cm (6\'3"+)' },
  ];

  const religionOptions = [
    { value: 'hindu', label: 'Hindu' },
    { value: 'muslim', label: 'Muslim' },
    { value: 'christian', label: 'Christian' },
    { value: 'sikh', label: 'Sikh' },
    { value: 'buddhist', label: 'Buddhist' },
    { value: 'jain', label: 'Jain' },
    { value: 'jewish', label: 'Jewish' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' },
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
      {/* Founder's Message - Human Touch */}
      <motion.div
        variants={itemVariants}
        className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8 flex items-start gap-4"
      >
        <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-headline font-bold text-xl">
          S
        </div>
        <div>
          <h4 className="font-headline font-semibold text-primary mb-1">A Note from Sumit</h4>
          <p className="font-body text-sm text-foreground/80 leading-relaxed italic">
            &quot;I created Freezme because I saw how swiping culture was burning out good people. My team and I manually review every application to protect the quality of this community. Take your time—we&apos;re looking for depth, not just data.&quot;
          </p>
        </div>
      </motion.div>

      <div className="border-b border-border/20 pb-6">
        <h2 className="font-headline text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
          Personal Information
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Let&apos;s start with the basics. Your information is encrypted and visible only to our relationship experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10">
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
          <PhoneInputField
            label="Phone Number"
            name="phone"
            value={data.phone}
            countryCode={data.countryCode}
            onChange={onChange}
            error={errors.phone}
            required
            placeholder="00000 00000"
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
            label="Your Height"
            name="height"
            type="select"
            value={data.height}
            onChange={onChange}
            error={errors.height}
            required
            options={heightOptions}
            icon="ArrowsPointingOutIcon"
            placeholder="Select your height"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Religion"
            name="religion"
            type="select"
            value={data.religion}
            onChange={onChange}
            error={errors.religion}
            required
            options={religionOptions}
            icon="SparklesIcon"
            placeholder="Your faith"
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