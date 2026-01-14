'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  age: number;
  profession: string;
  location: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "After years of dating app fatigue, Freezme was a breath of fresh air. The person I was introduced to shared my values and life goals in ways no algorithm could have predicted. We're now planning our future together.",
      author: "Anonymous",
      age: 34,
      profession: "Marketing Director",
      location: "Mumbai",
    },
    {
      id: 2,
      quote: "I was skeptical about paying for a matchmaking service, but the quality of the introduction made it worth every rupee. Finally, someone who understood what I was actually looking for.",
      author: "Anonymous",
      age: 31,
      profession: "Software Engineer",
      location: "Bangalore",
    },
    {
      id: 3,
      quote: "The personal touch made all the difference. Sumit took the time to understand me beyond a profile, and the introduction he made was thoughtful and well-considered. This is how dating should be.",
      author: "Anonymous",
      age: 36,
      profession: "Financial Analyst",
      location: "Delhi",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Real experiences from our community members
              </p>
            </div>
            <div className="bg-popover p-8 rounded-lg shadow-sm min-h-[300px] flex items-center justify-center">
              <div className="animate-pulse text-center">
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Real experiences from our community members (names changed for privacy)
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-popover p-8 lg:p-12 rounded-lg shadow-md">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Icon name="ChatBubbleLeftIcon" size={48} variant="solid" className="text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <blockquote className="font-body text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    {currentTestimonial.author}, {currentTestimonial.age}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {currentTestimonial.profession} • {currentTestimonial.location}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <Icon name="ChevronLeftIcon" size={20} variant="outline" />
                  </button>
                  <span className="font-body text-sm text-muted-foreground px-2">
                    {currentIndex + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <Icon name="ChevronRightIcon" size={20} variant="outline" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="LockClosedIcon" size={16} variant="solid" className="text-primary" />
              All testimonials are shared with permission. Names and identifying details have been changed to protect privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;