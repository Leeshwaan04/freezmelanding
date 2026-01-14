import Icon from '@/components/ui/AppIcon';

interface PaymentData {
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  paymentMethod: string;
}

interface Step4PaymentProps {
  data: PaymentData;
  errors: Partial<Record<keyof PaymentData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Step4Payment = ({ data, errors, onChange }: Step4PaymentProps) => {
  const paymentMethods = [
    { value: '', label: 'Select payment method' },
    { value: 'upi', label: 'UPI' },
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'netbanking', label: 'Net Banking' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-headline text-2xl font-semibold text-foreground mb-2">
          Assessment Fee & Confirmation
        </h2>
        <p className="text-muted-foreground font-body">
          Final step—review the service details and complete your application with the assessment fee.
        </p>
      </div>

      {/* Service Summary */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-headline text-lg font-semibold text-foreground">
          Service Summary
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success mt-0.5" />
            <div>
              <p className="font-body font-medium text-foreground">Comprehensive Profile Assessment</p>
              <p className="text-sm text-muted-foreground">Detailed evaluation by our expert team</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success mt-0.5" />
            <div>
              <p className="font-body font-medium text-foreground">Personalized Consultation</p>
              <p className="text-sm text-muted-foreground">One-on-one discussion about your preferences</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success mt-0.5" />
            <div>
              <p className="font-body font-medium text-foreground">Curated Match Selection</p>
              <p className="text-sm text-muted-foreground">Hand-picked introductions based on compatibility</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success mt-0.5" />
            <div>
              <p className="font-body font-medium text-foreground">Ongoing Support</p>
              <p className="text-sm text-muted-foreground">Guidance throughout your journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-accent/10 border border-accent rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Assessment Fee
            </h3>
            <p className="text-sm text-muted-foreground">Non-refundable application processing fee</p>
          </div>
          <div className="text-right">
            <p className="font-headline text-3xl font-bold text-primary">₹5,000</p>
            <p className="text-sm text-muted-foreground">One-time payment</p>
          </div>
        </div>
        <div className="bg-background/50 rounded-md p-4 space-y-2">
          <p className="text-sm font-body text-foreground">
            <strong>Note:</strong> This assessment fee covers the initial evaluation process. If accepted into our service, the full membership fee of ₹50,000 will be required before introductions begin.
          </p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <label htmlFor="paymentMethod" className="block font-body font-medium text-foreground">
          Payment Method <span className="text-destructive">*</span>
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={data.paymentMethod}
          onChange={onChange}
          required
          className={`w-full px-4 py-3 border rounded-md font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
            errors.paymentMethod ? 'border-destructive' : 'border-input'
          }`}
        >
          {paymentMethods.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
        {errors.paymentMethod && (
          <p className="text-sm text-destructive">{errors.paymentMethod}</p>
        )}
      </div>

      {/* Terms & Privacy */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={data.acceptTerms}
            onChange={onChange}
            required
            className="mt-1 w-5 h-5 text-primary border-input rounded focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="acceptTerms" className="font-body text-sm text-foreground">
            I accept the{' '}
            <a href="/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            and understand that the assessment fee is non-refundable. <span className="text-destructive">*</span>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-destructive ml-8">{errors.acceptTerms}</p>
        )}

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="acceptPrivacy"
            name="acceptPrivacy"
            checked={data.acceptPrivacy}
            onChange={onChange}
            required
            className="mt-1 w-5 h-5 text-primary border-input rounded focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="acceptPrivacy" className="font-body text-sm text-foreground">
            I have read and agree to the{' '}
            <a href="/privacy-and-security" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and consent to the processing of my personal information. <span className="text-destructive">*</span>
          </label>
        </div>
        {errors.acceptPrivacy && (
          <p className="text-sm text-destructive ml-8">{errors.acceptPrivacy}</p>
        )}
      </div>

      {/* Privacy Assurance */}
      <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-primary" />
          <h4 className="font-headline font-semibold text-foreground">Your Privacy is Protected</h4>
        </div>
        <ul className="space-y-2 text-sm font-body text-muted-foreground">
          <li className="flex items-start gap-2">
            <Icon name="LockClosedIcon" size={16} variant="solid" className="text-primary mt-0.5" />
            <span>All personal information is encrypted and stored securely</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="EyeSlashIcon" size={16} variant="solid" className="text-primary mt-0.5" />
            <span>Your profile is never shared without explicit consent</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="UserGroupIcon" size={16} variant="solid" className="text-primary mt-0.5" />
            <span>Only verified matches receive limited profile information</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Step4Payment;