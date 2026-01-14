import FormField from './FormField';

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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-2">
          Partner Preferences
        </h2>
        <p className="text-muted-foreground font-body">
          Help us understand what you&apos;re looking for in a potential match. Be honest—this helps us curate better introductions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Preferred Age Range (Min)"
          name="ageRangeMin"
          type="number"
          value={data.ageRangeMin}
          onChange={onChange}
          error={errors.ageRangeMin}
          required
          placeholder="25"
          helpText="Minimum age preference"
        />

        <FormField
          label="Preferred Age Range (Max)"
          name="ageRangeMax"
          type="number"
          value={data.ageRangeMax}
          onChange={onChange}
          error={errors.ageRangeMax}
          required
          placeholder="35"
          helpText="Maximum age preference"
        />

        <FormField
          label="Height Preference"
          name="heightPreference"
          type="select"
          value={data.heightPreference}
          onChange={onChange}
          error={errors.heightPreference}
          required
          options={heightOptions}
        />

        <FormField
          label="Religion Preference"
          name="religionPreference"
          type="select"
          value={data.religionPreference}
          onChange={onChange}
          error={errors.religionPreference}
          required
          options={religionOptions}
        />

        <FormField
          label="Education Preference"
          name="educationPreference"
          type="select"
          value={data.educationPreference}
          onChange={onChange}
          error={errors.educationPreference}
          required
          options={educationOptions}
        />

        <FormField
          label="Smoking Preference"
          name="smokingPreference"
          type="select"
          value={data.smokingPreference}
          onChange={onChange}
          error={errors.smokingPreference}
          required
          options={lifestyleOptions}
        />

        <FormField
          label="Drinking Preference"
          name="drinkingPreference"
          type="select"
          value={data.drinkingPreference}
          onChange={onChange}
          error={errors.drinkingPreference}
          required
          options={lifestyleOptions}
        />

        <FormField
          label="Diet Preference"
          name="dietPreference"
          type="select"
          value={data.dietPreference}
          onChange={onChange}
          error={errors.dietPreference}
          required
          options={dietOptions}
        />
      </div>
    </div>
  );
};

export default Step2Preferences;