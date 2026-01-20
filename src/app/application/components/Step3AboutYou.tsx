'use client';

import FormField from './FormField';
import { motion } from 'framer-motion';

interface AboutYouData {
  aboutYourself: string;
  hobbies: string;
  relationshipGoals: string;
  dealBreakers: string;
  previousRelationships: string;
  familyValues: string;
}

interface Step3AboutYouProps {
  data: AboutYouData;
  errors: Partial<Record<keyof AboutYouData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Step3AboutYou = ({ data, errors, onChange }: Step3AboutYouProps) => {
  const relationshipGoalsOptions = [
    { value: 'marriage', label: 'Marriage within 1-2 years' },
    { value: 'serious', label: 'Serious relationship leading to marriage' },
    { value: 'exploring', label: 'Exploring with marriage as eventual goal' },
    { value: 'companionship', label: 'Long-term companionship' },
  ];

  const familyValuesOptions = [
    { value: 'very-important', label: 'Very Important' },
    { value: 'important', label: 'Important' },
    { value: 'somewhat-important', label: 'Somewhat Important' },
    { value: 'not-priority', label: 'Not a Priority' },
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
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-10"
    >
      <div className="border-b border-border/20 pb-6">
        <h2 className="font-headline text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
          About You
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          This is where we get to know the real you. Be authentic—we value depth over perfection.
        </p>
      </div>

      <div className="space-y-10">
        <motion.div variants={itemVariants} className="relative">
          <FormField
            label="The Narrative of You"
            name="aboutYourself"
            type="textarea"
            value={data.aboutYourself}
            onChange={onChange}
            error={errors.aboutYourself}
            required
            rows={5}
            placeholder="Go beyond the resume. Describe your internal compass, your values, and the experiences that shaped the person you are today."
            icon="FingerPrintIcon"
          />
          <div className="absolute right-0 -bottom-7 text-[10px] font-headline font-bold uppercase tracking-widest text-muted-foreground/40 flex space-x-6">
            <span>
              {data.aboutYourself.trim() === '' ? 0 : data.aboutYourself.trim().split(/\s+/).filter(word => word.length > 0).length} / 20 words min
            </span>
            <span>
              {data.aboutYourself.length} characters
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Intellectual & Physical Curiosity"
            name="hobbies"
            type="textarea"
            value={data.hobbies}
            onChange={onChange}
            error={errors.hobbies}
            required
            rows={3}
            placeholder="What pursuits currently consume your curiosity or keep you active? We value passion over a list of generic activities."
            icon="HeartIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            label="Vision for Partnership"
            name="relationshipGoals"
            type="select"
            value={data.relationshipGoals}
            onChange={onChange}
            error={errors.relationshipGoals}
            required
            options={relationshipGoalsOptions}
            icon="LifebuoyIcon"
            placeholder="Primary objective"
          />

          <FormField
            label="Legacy & Family Values"
            name="familyValues"
            type="select"
            value={data.familyValues}
            onChange={onChange}
            error={errors.familyValues}
            required
            options={familyValuesOptions}
            icon="UserGroupIcon"
            placeholder="Core connection"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="The Non-Negotiables"
            name="dealBreakers"
            type="textarea"
            value={data.dealBreakers}
            onChange={onChange}
            error={errors.dealBreakers}
            required
            rows={3}
            placeholder="What specific traits or life-paths would make a long-term partnership impossible for you? Clarity here ensures better matching."
            icon="NoSymbolIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Wisdom from the Past"
            name="previousRelationships"
            type="textarea"
            value={data.previousRelationships}
            onChange={onChange}
            error={errors.previousRelationships}
            required
            rows={3}
            placeholder="Reflect on your relationship history. What were the most significant lessons learned about yourself and your needs?"
            icon="HandThumbUpIcon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step3AboutYou;