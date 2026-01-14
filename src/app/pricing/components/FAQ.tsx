'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed through secure, PCI-compliant payment gateways.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes. We offer a 100% refund on the assessment fee within 7 days if you\'re not satisfied. For the introduction service, we guarantee at least 3 curated introductions within 6 months or extend your service period at no additional cost.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'Absolutely not. The prices listed are comprehensive and include all services mentioned in each tier. We believe in complete transparency—what you see is what you pay.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade from Essential to Premium at any time. We\'ll credit your initial payment toward the Premium tier, so you only pay the difference.',
    },
    {
      question: 'What happens after I pay?',
      answer: 'After payment, you\'ll receive a confirmation email with next steps. For the assessment fee, we\'ll schedule your in-depth consultation within 48 hours. For the introduction service, we begin the curation process immediately.',
    },
    {
      question: 'How long does the service last?',
      answer: 'The Essential tier provides service for 6 months, while Premium offers 12 months. Both include the specified number of introductions during this period. If we don\'t meet our commitment, we extend your service at no cost.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Currently, we require full payment upfront to ensure commitment from both sides. However, we occasionally offer seasonal promotions. Contact us to discuss your specific situation.',
    },
    {
      question: 'What if I don\'t connect with any introductions?',
      answer: 'We provide detailed feedback after each introduction and adjust our approach based on your experience. If you don\'t connect with the initial introductions, we continue working with you within your service period to find better matches.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pricing Questions Answered
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Everything you need to know about our pricing and payment process.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-hover"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-headline text-base md:text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    variant="outline"
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Still have questions about pricing?
            </p>
            <a
              href="/privacy-and-security"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-headline font-semibold rounded-md hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Our Team
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;