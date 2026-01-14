interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
  details: string[];
  isReversed?: boolean;
}

export default function ProcessStep({
  stepNumber,
  title,
  description,
  timeline,
  details,
  isReversed = false
}: ProcessStepProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Step Number Circle */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          <span className="font-headline text-4xl lg:text-5xl font-bold text-white">
            {stepNumber}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
          <span className="font-body text-sm font-medium text-accent">{timeline}</span>
        </div>
        <h3 className="font-headline text-2xl lg:text-3xl font-semibold text-foreground mb-4">
          {title}
        </h3>
        <p className="font-body text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-body text-base text-foreground flex-1">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}