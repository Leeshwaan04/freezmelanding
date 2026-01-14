import FormField from './FormField';

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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-2">
          Personal Information
        </h2>
        <p className="text-muted-foreground font-body">
          Let&apos;s start with the basics. All information is kept strictly confidential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={onChange}
          error={errors.fullName}
          required
          placeholder="Enter your full name"
        />

        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          error={errors.email}
          required
          placeholder="your.email@example.com"
        />

        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={onChange}
          error={errors.phone}
          required
          placeholder="+91 98765 43210"
        />

        <FormField
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={data.dateOfBirth}
          onChange={onChange}
          error={errors.dateOfBirth}
          required
        />

        <FormField
          label="Gender"
          name="gender"
          type="select"
          value={data.gender}
          onChange={onChange}
          error={errors.gender}
          required
          options={genderOptions}
        />

        <FormField
          label="City"
          name="city"
          type="select"
          value={data.city}
          onChange={onChange}
          error={errors.city}
          required
          options={cityOptions}
        />

        <FormField
          label="Profession"
          name="profession"
          value={data.profession}
          onChange={onChange}
          error={errors.profession}
          required
          placeholder="e.g., Software Engineer, Doctor"
        />

        <FormField
          label="Highest Education"
          name="education"
          value={data.education}
          onChange={onChange}
          error={errors.education}
          required
          placeholder="e.g., Bachelor's, Master's, PhD"
        />
      </div>
    </div>
  );
};

export default Step1Personal;