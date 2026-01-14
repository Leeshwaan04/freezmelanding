import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

interface PaymentSecurityProps {
  className?: string;
}

const PaymentSecurity: React.FC<PaymentSecurityProps> = ({ className = '' }) => {
  const securityFeatures: SecurityFeature[] = [
    {
      icon: 'LockClosedIcon',
      title: 'SSL Encryption',
      description: 'All payment data is encrypted with 256-bit SSL security.',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'PCI Compliant',
      description: 'We follow Payment Card Industry Data Security Standards.',
    },
    {
      icon: 'CreditCardIcon',
      title: 'Secure Gateway',
      description: 'Payments processed through trusted Indian payment gateways.',
    },
    {
      icon: 'DocumentCheckIcon',
      title: 'Invoice & Receipt',
      description: 'Detailed invoices and receipts for all transactions.',
    },
  ];

  const paymentMethods = [
    'Credit/Debit Cards',
    'UPI',
    'Net Banking',
    'Digital Wallets',
  ];

  return (
    <section className={`py-16 md:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Secure Payment Processing
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Your financial information is protected with bank-level security. We never store your payment details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={24} variant="solid" className="text-success" />
                </div>
                <h3 className="font-headline text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
                  Accepted Payment Methods
                </h3>
                <ul className="space-y-2">
                  {paymentMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                      <span className="font-body text-sm text-foreground">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex flex-col gap-4">
                  <div className="flex items-center gap-3 justify-center md:justify-end">
                    <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-primary" />
                    <span className="font-headline text-sm font-semibold text-foreground">
                      100% Secure Payments
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground max-w-xs">
                    Protected by industry-leading security standards and Indian payment regulations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSecurity;