import FormField from './FormField';

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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-2">
          About You
        </h2>
        <p className="text-muted-foreground font-body">
          This is where we get to know the real you. Be authentic—we value depth over perfection.
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <FormField
            label="Tell us about yourself"
            name="aboutYourself"
            type="textarea"
            value={data.aboutYourself}
            onChange={onChange}
            error={errors.aboutYourself}
            required
            rows={5}
            placeholder="Share your story, values, and what makes you unique. What drives you? What brings you joy?"
          />
          <div className="absolute right-0 -bottom-6 text-xs font-body text-muted-foreground">
            {data.aboutYourself.trim() === '' ? 0 : data.aboutYourself.trim().split(/\s+/).length} / 100 words min
          </div>
        </div>

        <FormField
          label="Hobbies & Interests"
          name="hobbies"
          type="textarea"
          value={data.hobbies}
          onChange={onChange}
          error={errors.hobbies}
          required
          rows={4}
          placeholder="What do you love doing in your free time? Any passions or activities you're deeply involved in?"
        />

        <FormField
          label="Relationship Goals"
          name="relationshipGoals"
          type="select"
          value={data.relationshipGoals}
          onChange={onChange}
          error={errors.relationshipGoals}
          required
          options={relationshipGoalsOptions}
        />

        <FormField
          label="Deal Breakers"
          name="dealBreakers"
          type="textarea"
          value={data.dealBreakers}
          onChange={onChange}
          error={errors.dealBreakers}
          required
          rows={4}
          placeholder="What are absolute non-negotiables for you in a relationship? Be honest—this helps us avoid mismatches."
        />

        <FormField
          label="Previous Relationships"
          name="previousRelationships"
          type="textarea"
          value={data.previousRelationships}
          onChange={onChange}
          error={errors.previousRelationships}
          required
          rows={4}
          placeholder="Brief overview of your relationship history and what you've learned. This helps us understand your journey."
        />

        <FormField
          label="Family Values"
          name="familyValues"
          type="select"
          value={data.familyValues}
          onChange={onChange}
          error={errors.familyValues}
          required
          options={familyValuesOptions}
          helpText="How important is family in your life and decision-making?"
        />
      </div>
    </div>
  );
};

export default Step3AboutYou;