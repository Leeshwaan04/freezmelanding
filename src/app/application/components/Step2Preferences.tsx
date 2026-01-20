'use client';

import FormField from './FormField';
import { motion } from 'framer-motion';

interface PreferencesData {
  ageRangeMin: string;
  ageRangeMax: string;
  heightPreference: string;
  religionPreference: string;
  educationPreference: string;
  smokingPreference: string;
  drinkingPreference: string;
  dietPreference: string;
}

interface Step2PreferencesProps {
  data: PreferencesData;
  errors: Partial<Record<keyof PreferencesData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Step2Preferences = ({ data, errors, onChange }: Step2PreferencesProps) => {
  const heightOptions = [
    { value: 'any', label: 'No Preference' },
    { value: '150-160', label: '150-160 cm' },
    { value: '160-170', label: '160-170 cm' },
    { value: '170-180', label: '170-180 cm' },
    { value: '180-190', label: '180-190 cm' },
    { value: '190+', label: '190+ cm' },
  ];

  const religionOptions = [
    { value: 'any', label: 'No Preference' },
    { value: 'hindu', label: 'Hindu' },
    { value: 'muslim', label: 'Muslim' },
    { value: 'christian', label: 'Christian' },
    { value: 'sikh', label: 'Sikh' },
    { value: 'buddhist', label: 'Buddhist' },
    { value: 'jain', label: 'Jain' },
    { value: 'other', label: 'Other' },
  ];

  const educationOptions = [
    { value: 'any', label: 'No Preference' },
    { value: 'bachelors', label: "Bachelor\'s Degree" },
    { value: 'masters', label: "Master\'s Degree" },
    { value: 'phd', label: 'PhD' },
    { value: 'professional', label: 'Professional Degree' },
  ];

  const lifestyleOptions = [
    { value: 'any', label: 'No Preference' },
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'occasionally', label: 'Occasionally' },
  ];

  const dietOptions = [
    { value: 'any', label: 'No Preference' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non-vegetarian', label: 'Non-Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'eggetarian', label: 'Eggetarian' },
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
          Partner Preferences
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Help us understand what you&apos;re looking for. Be authentic—this helps our experts curate the most compatible introductions for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <motion.div variants={itemVariants}>
          <FormField
            label="Min Age Preference"
            name="ageRangeMin"
            type="number"
            value={data.ageRangeMin}
            onChange={onChange}
            error={errors.ageRangeMin}
            required
            placeholder="25"
            icon="ArrowsPointingInIcon"
            helpText="The lower bound of your biological age preference."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Max Age Preference"
            name="ageRangeMax"
            type="number"
            value={data.ageRangeMax}
            onChange={onChange}
            error={errors.ageRangeMax}
            required
            placeholder="35"
            icon="ArrowsPointingOutIcon"
            helpText="The upper bound of your biological age preference."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Height Alignment"
            name="heightPreference"
            type="select"
            value={data.heightPreference}
            onChange={onChange}
            error={errors.heightPreference}
            required
            options={heightOptions}
            icon="Bars3Icon"
            placeholder="Search criteria"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Spiritual & Cultural Background"
            name="religionPreference"
            type="select"
            value={data.religionPreference}
            onChange={onChange}
            error={errors.religionPreference}
            required
            options={religionOptions}
            icon="SparklesIcon"
            placeholder="Alignment"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Educational Prowess"
            name="educationPreference"
            type="select"
            value={data.educationPreference}
            onChange={onChange}
            error={errors.educationPreference}
            required
            options={educationOptions}
            icon="AcademicCapIcon"
            placeholder="Minimum expectation"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Lifestyle Sync: Tobacco"
            name="smokingPreference"
            type="select"
            value={data.smokingPreference}
            onChange={onChange}
            error={errors.smokingPreference}
            required
            options={lifestyleOptions}
            icon="NoSymbolIcon"
            placeholder="Preference"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Lifestyle Sync: Alcohol"
            name="drinkingPreference"
            type="select"
            value={data.drinkingPreference}
            onChange={onChange}
            error={errors.drinkingPreference}
            required
            options={lifestyleOptions}
            icon="InformationCircleIcon"
            placeholder="Social preferences"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Dietary Philosophy"
            name="dietPreference"
            type="select"
            value={data.dietPreference}
            onChange={onChange}
            error={errors.dietPreference}
            required
            options={dietOptions}
            icon="FaceSmileIcon"
            placeholder="Daily values"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step2Preferences;