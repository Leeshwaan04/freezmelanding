'use client';

import { useEffect, useState } from 'react';
import ProcessStep from './ProcessStep';
import PricingCard from './PricingCard';
import TestimonialCard from './TestimonialCard';
import FAQItem from './FAQItem';
import Footer from '@/components/common/Footer';

interface ProcessStepData {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
  details: string[];
}

interface PricingData {
  title: string;
  amount: string;
  description: string;
  features: string[];
  ctaText: string;
  isHighlighted?: boolean;
}

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  image: string;
  alt: string;
}

interface FAQData {
  question: string;
  answer: string;
}

export default function HowItWorksInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const processSteps: ProcessStepData[] = [
    {
      stepNumber: 1,
      title: "Submit Your Application",
      description: "Begin your journey with a thoughtful application that helps us understand who you are, what you value, and what you're seeking in a meaningful relationship.",
      timeline: "15-20 minutes",
      details: [
        "Complete our comprehensive questionnaire covering values, lifestyle, and relationship goals",
        "Share your authentic self through open-ended responses",
        "No initial fees required to apply",
        "Receive confirmation within 24 hours"]

    },
    {
      stepNumber: 2,
      title: "Human Curation & Assessment",
      description: "Our team carefully reviews your application using emotional intelligence and years of introduction experience—not algorithms. We assess compatibility potential, relationship readiness, and alignment with our community.",
      timeline: "3-5 business days",
      details: [
        "Detailed review by experienced introduction professionals",
        "Assessment of emotional maturity and relationship readiness",
        "Evaluation of compatibility with existing member pool",
        "Honest feedback regardless of acceptance decision"]

    },
    {
      stepNumber: 3,
      title: "Consultation & Membership",
      description: "If accepted, we invite you for a personal consultation to discuss membership options tailored to your needs. This is where we align on your journey and investment in finding the right partner.",
      timeline: "60-minute call",
      details: [
        "One-on-one session with a relationship expert",
        "Discussion of membership tiers and curated matching plans",
        "Mutual agreement on expectations and timelines",
        "Formal onboarding into the Freezme community"]

    },
    {
      stepNumber: 4,
      title: "Your Journey Begins",
      description: "Once onboarded, we begin the search. We provide support and guidance as we present hand-selected introductions. The connection is yours to nurture, but you are never alone in the process.",
      timeline: "Ongoing",
      details: [
        "Receive detailed profiles of potential matches",
        "Connect directly after mutual consent",
        "Optional check-ins and relationship guidance available",
        "Feedback loops to refine future introductions"]

    }];


  const pricingOptions: PricingData[] = [
    {
      title: "The Assessment",
      amount: "Complimentary",
      description: "Zero-cost entry point",
      features: [
        "Professional profile review",
        "Compatibility potential score",
        "Community fit assessment",
        "Database inclusion (Passive)"],

      ctaText: "Start Free Assessment"
    },
    {
      title: "Verified Access",
      amount: "Verified",
      description: "One-time verification",
      features: [
        "Human Verification check",
        "Verified Profile Badge",
        "Priority visibility in search",
        "Pay-per-match introductions"],

      ctaText: "Apply for Verification",
      isHighlighted: true
    },
    {
      title: "Personal Introducer",
      amount: "By Application",
      description: "Human-led service",
      features: [
        "Dedicated Relationship Manager",
        "Proactive candidate search",
        "Hand-picked introductions",
        "Date arrangement & feedback"],

      ctaText: "Request Consultation"
    }];


  const testimonials: TestimonialData[] = [
    {
      quote: "After years of mindless swiping, Freezme was a breath of fresh air. The introduction I received was so thoughtfully considered—they truly understood what I was looking for. We've been together for 8 months now.",
      author: "Priya M.",
      role: "Marketing Director, Mumbai",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d576aab7-1763295526435.png",
      alt: "Professional Indian woman with long dark hair wearing white blouse smiling warmly at camera"
    },
    {
      quote: "The transparency about the process and honest assessment of my application built immediate trust. Even though my first introduction didn't work out, the support and guidance I received was invaluable.",
      author: "Rahul K.",
      role: "Software Engineer, Bangalore",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_112da7240-1763294160138.png",
      alt: "Young Indian man with short black hair and beard wearing navy blue shirt with confident smile"
    },
    {
      quote: "What sets Freezme apart is the human touch. They don't just match profiles—they understand people. The introduction came with context that made our first conversation feel natural and meaningful.",
      author: "Ananya S.",
      role: "Architect, Delhi",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_103114392-1763294966758.png",
      alt: "Indian woman with shoulder-length hair wearing elegant black top with gentle smile"
    }];


  const faqs: FAQData[] = [
    {
      question: "How long does the entire process take?",
      answer: "The assessment phase takes 3-5 business days after application submission. Introduction timing varies based on suitable match availability—we prioritize quality over speed. Some members receive introductions within weeks, others may wait 2-3 months for the right match. We believe patience leads to better outcomes."
    },
    {
      question: "What happens if I'm not accepted?",
      answer: "We provide honest, constructive feedback explaining our decision. Common reasons include misalignment with our community values, insufficient relationship readiness, or limited compatibility with current member pool. You can reapply after 6 months using the same assessment fee if you've addressed the feedback."
    },
    {
      question: "How do you ensure privacy and security?",
      answer: "We never share your information without explicit consent. All data is encrypted and stored securely. Contact details are only exchanged after both parties agree to the introduction. We have strict confidentiality protocols and never sell or share member data with third parties."
    },
    {
      question: "What makes your curation process different from algorithms?",
      answer: "Algorithms optimize for engagement and surface-level compatibility. We use human judgment to assess emotional intelligence, relationship readiness, communication styles, and deeper value alignment. Our team brings years of relationship expertise that no algorithm can replicate."
    },
    {
      question: "Can I request specific preferences or deal-breakers?",
      answer: "Absolutely. Your application includes detailed sections for preferences, values, and non-negotiables. We respect your boundaries while also challenging superficial criteria that might limit meaningful connections. Our goal is finding genuine compatibility, not checking boxes."
    },
    {
      question: "What support do you provide after an introduction?",
      answer: "We offer guidance on navigating early conversations, optional check-ins to address concerns, and resources for building healthy relationships. However, we don't micromanage your connection—we believe in empowering you to develop the relationship authentically."
    },
    {
      question: "Is there a refund policy?",
      answer: "Assessment fees are non-refundable as they cover our team's time reviewing your application. Introduction fees are refundable if we're unable to provide a suitable introduction within 6 months. We're committed to transparency and fairness in all financial matters."
    },
    {
      question: "How many introductions can I expect?",
      answer: "This varies significantly based on your preferences, location, and our current member pool. We don't guarantee a specific number—we guarantee thoughtful curation. Some members find their match with the first introduction, others benefit from multiple introductions over time."
    }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {[1, 2, 3, 4].map((i) =>
                <div key={i} className="h-64 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl lg:text-6xl font-bold text-foreground mb-6">
              How Freezme Works
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A transparent, human-curated process designed for intentional daters seeking quality over quantity. No algorithms, no endless swiping—just thoughtful introductions based on genuine compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
            {processSteps.map((step, index) =>
              <ProcessStep
                key={step.stepNumber}
                {...step}
                isReversed={index % 2 !== 0} />

            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Membership Tiers
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe in honest service for honest investment. No hidden fees, no subscription traps—just clear value in your relationship journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingOptions.map((pricing, index) =>
                <PricingCard key={index} {...pricing} />
              )}
            </div>

            <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <p className="font-body text-sm text-foreground text-center">
                <strong>Our Commitment:</strong> We invest heavily in understanding you before we ever accept you as a member. If we don't believe we can genuinely serve you with high-quality options, we won't waste your time or money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Real Stories, Real Connections
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from members who chose intentional dating over endless swiping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) =>
                <TestimonialCard key={index} {...testimonial} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Everything you need to know about our process, pricing, and philosophy.
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-md border border-border">
              {faqs.map((faq, index) =>
                <FAQItem key={index} {...faq} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Join a community of intentional daters who value quality connections over endless options. Start with a thoughtful application—no commitment required until you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/application"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-headline font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200">

                Start Your Application
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-headline font-semibold rounded-md border-2 border-border hover:border-primary hover:text-primary transition-all duration-200">

                Learn Our Philosophy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>);

}