'use client';

import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface PaymentData {
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}

interface Step4FinalizeProps {
  data: PaymentData;
  errors: Partial<Record<keyof PaymentData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Step4Finalize = ({ data, errors, onChange }: Step4FinalizeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="font-headline text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
          Final Verification
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          You&apos;re almost there. Review our commitment to your privacy and confirm your application to join our exclusive community.
        </p>
      </div>

      {/* Service Experience Summary */}
      <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 space-y-6">
        <h3 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="SparklesIcon" size={20} className="text-primary" />
          The Freezme Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg">
              <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-primary" />
            </div>
            <div>
              <p className="font-headline font-bold text-foreground text-sm uppercase tracking-wider">Profile Assessment</p>
              <p className="text-xs text-muted-foreground mt-1">Our experts manually review every detail to ensure high-quality standards.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg">
              <Icon name="UserCircleIcon" size={18} variant="solid" className="text-primary" />
            </div>
            <div>
              <p className="font-headline font-bold text-foreground text-sm uppercase tracking-wider">Human Curation</p>
              <p className="text-xs text-muted-foreground mt-1">No algorithms. Real people hand-picking your potential partners.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg">
              <Icon name="ShieldCheckIcon" size={18} variant="solid" className="text-primary" />
            </div>
            <div>
              <p className="font-headline font-bold text-foreground text-sm uppercase tracking-wider">Privacy First</p>
              <p className="text-xs text-muted-foreground mt-1">Your identity remains shielded until you choose to reveal it.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg">
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" className="text-primary" />
            </div>
            <div>
              <p className="font-headline font-bold text-foreground text-sm uppercase tracking-wider">Direct Support</p>
              <p className="text-xs text-muted-foreground mt-1">Concierge-level guidance throughout your dating journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Confirmation */}
      <div className="space-y-6">
        <div className="group flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-muted/30">
          <div className="relative flex items-center justify-center pt-1">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={data.acceptTerms}
              onChange={onChange}
              required
              className="w-6 h-6 rounded-lg border-2 border-border/50 bg-background transition-all checked:bg-primary checked:border-primary focus:ring-primary cursor-pointer appearance-none flex items-center justify-center before:content-['✓'] before:text-white before:opacity-0 checked:before:opacity-100 before:transition-opacity mt-1"
            />
          </div>
          <label htmlFor="acceptTerms" className="font-body text-sm text-foreground/80 cursor-pointer leading-relaxed">
            I agree to the{' '}
            <a href="/terms" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            and understand the application process. <span className="text-accent">*</span>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-xs font-bold text-destructive uppercase tracking-widest px-14">{errors.acceptTerms}</p>
        )}

        <div className="group flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-muted/30">
          <div className="relative flex items-center justify-center pt-1">
            <input
              type="checkbox"
              id="acceptPrivacy"
              name="acceptPrivacy"
              checked={data.acceptPrivacy}
              onChange={onChange}
              required
              className="w-6 h-6 rounded-lg border-2 border-border/50 bg-background transition-all checked:bg-primary checked:border-primary focus:ring-primary cursor-pointer appearance-none flex items-center justify-center before:content-['✓'] before:text-white before:opacity-0 checked:before:opacity-100 before:transition-opacity mt-1"
            />
          </div>
          <label htmlFor="acceptPrivacy" className="font-body text-sm text-foreground/80 cursor-pointer leading-relaxed">
            I have read and agree to the{' '}
            <a href="/privacy-and-security" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy & Security Policy
            </a>. <span className="text-accent">*</span>
          </label>
        </div>
        {errors.acceptPrivacy && (
          <p className="text-xs font-bold text-destructive uppercase tracking-widest px-14">{errors.acceptPrivacy}</p>
        )}
      </div>

      {/* Final Assurance */}
      <div className="flex items-center gap-4 px-6 py-4 bg-primary/5 border border-primary/20 rounded-2xl">
        <Icon name="LockClosedIcon" size={24} className="text-primary/40" />
        <p className="text-[11px] font-headline font-bold text-primary/60 uppercase tracking-[2px]">
          Encrypted Submission • Your data is secure
        </p>
      </div>
    </motion.div>
  );
};

export default Step4Finalize;