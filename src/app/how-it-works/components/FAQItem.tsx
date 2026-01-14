'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-primary transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-headline text-lg font-semibold text-foreground flex-1">
          {question}
        </span>
        <Icon
          name="ChevronDownIcon"
          size={24}
          variant="outline"
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}