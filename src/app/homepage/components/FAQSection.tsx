'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How is Freezme different from dating apps?',
      answer: 'Unlike dating apps that rely on algorithms and endless swiping, Freezme offers human-curated introductions. Our founder personally reviews every profile and makes thoughtful introduction decisions based on genuine compatibility, values, and relationship goals—not just superficial criteria.',
    },
    {
      id: 2,
      question: 'How long does the process take?',
      answer: 'Quality takes time. After your application is approved, finding the right introduction can take anywhere from a few weeks to several months. We prioritize quality over speed, ensuring each introduction is thoughtfully considered.',
    },
    {
      id: 3,
      question: "What if I don't connect with my introduction?",
      answer: "That's completely normal and expected. Not every introduction will lead to a relationship, and that's okay. We provide honest feedback and continue working to find compatible candidates. There's no pressure or rush.",
    },
    {
      id: 4,
      question: 'Is my information kept private?',
      answer: 'Absolutely. Your profile is never made public, and your information is only shared with carefully selected potential candidates. We take privacy seriously and never share your data with third parties.',
    },
    {
      id: 5,
      question: 'Who is Freezme right for?',
      answer: 'Freezme is ideal for emotionally mature professionals (typically 28-40) who are serious about finding a meaningful relationship, frustrated with dating apps, and willing to invest in quality over quantity. If you value depth, authenticity, and human judgment, this service is for you.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Everything you need to know about Freezme
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-card rounded-lg shadow-sm border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-headline text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    variant="outline"
                    className={`text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* More Questions CTA */}
          <div className="mt-12 text-center bg-card p-8 rounded-lg shadow-sm">
            <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="font-body text-base text-muted-foreground mb-6">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200"
            >
              Learn More About Our Process
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;