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
      question: 'Is there an application fee?',
      answer: 'No. Applying to Freezme is completely complimentary. We believe in assessing potential compatibility before any financial commitment is made.',
    },
    {
      question: 'What is the selection criteria?',
      answer: 'We look for emotional maturity, relationship readiness, and genuine intent. Our community is curated to ensure that every member is serious about finding a life partner, not just a date.',
    },
    {
      question: 'How does the membership work?',
      answer: 'Membership is by invitation only. If your profile aligns with our community, we will invite you for a consultation to discuss the membership tier that best suits your relationship goals.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes. You can discuss upgrading your membership tier with your dedicated relationship manager at any point during your journey.',
    },
    {
      question: 'What happens after I apply?',
      answer: 'Our vetting team reviews every application manually. You will receive an email within 3-5 business days regarding the status of your application and potential next steps.',
    },
    {
      question: 'How long does the service last?',
      answer: 'Service duration depends on the membership tier you select, typically ranging from 6 to 12 months. We are committed to supporting you until you find a meaningful connection.',
    },
    {
      question: 'Is my data private?',
      answer: 'Absolutely. We operate with strict confidentiality. Your profile is never public, and your details are only shared with potential matches after we have verified mutual interest.',
    },
    {
      question: 'What if I don\'t connect with any introductions?',
      answer: 'We view every introduction as a learning opportunity. We gather detailed feedback to refine our search. Our goal is quality, and we will continue to curate matches within your membership period.',
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
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
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