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
      className="space-y-6 md:space-y-10"
    >
      <div className="border-b border-border/20 pb-6">
        <h2 className="font-headline text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
          About You
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          This is where we get to know the real you. Be authentic—we value depth over perfection.
        </p>
      </div>

      <div className="space-y-6 md:space-y-10">
        <motion.div variants={itemVariants} className="relative">
          <FormField
            label="Tell us about yourself"
            name="aboutYourself"
            type="textarea"
            value={data.aboutYourself}
            onChange={onChange}
            error={errors.aboutYourself}
            required
            rows={5}
            placeholder="e.g., I'm a product designer who finds joy in creating meaningful experiences. I value deep conversations over small talk and believe in building a life rooted in curiosity, kindness, and adventure. On weekends, you'll find me exploring new hiking trails or trying out a new recipe in the kitchen."
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
            label="Hobbies & Interests"
            name="hobbies"
            type="textarea"
            value={data.hobbies}
            onChange={onChange}
            error={errors.hobbies}
            required
            rows={3}
            placeholder="e.g., I love photography, cooking Italian food, playing tennis on weekends, and I'm currently learning to play the guitar. I'm also passionate about sustainability and volunteer with local environmental groups."
            icon="HeartIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            label="What are you looking for?"
            name="relationshipGoals"
            type="select"
            value={data.relationshipGoals}
            onChange={onChange}
            error={errors.relationshipGoals}
            required
            options={relationshipGoalsOptions}
            icon="LifebuoyIcon"
            placeholder="Select your goal"
          />

          <FormField
            label="How important is family to you?"
            name="familyValues"
            type="select"
            value={data.familyValues}
            onChange={onChange}
            error={errors.familyValues}
            required
            options={familyValuesOptions}
            icon="UserGroupIcon"
            placeholder="Select importance"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Deal Breakers"
            name="dealBreakers"
            type="textarea"
            value={data.dealBreakers}
            onChange={onChange}
            error={errors.dealBreakers}
            required
            rows={3}
            placeholder="e.g., I need someone who values honesty and communication. Someone who isn't willing to compromise on mutual respect or who doesn't want children in the future wouldn't be right for me."
            icon="NoSymbolIcon"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormField
            label="Past Relationship Lessons (Optional)"
            name="previousRelationships"
            type="textarea"
            value={data.previousRelationships}
            onChange={onChange}
            error={errors.previousRelationships}
            required={false}
            rows={3}
            placeholder="e.g., I've learned that clear communication is essential for me, and I need a partner who can balance independence with togetherness. My past relationships taught me the importance of shared values."
            icon="HandThumbUpIcon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step3AboutYou;