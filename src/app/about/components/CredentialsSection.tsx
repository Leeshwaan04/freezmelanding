import Icon from '@/components/ui/AppIcon';

interface Credential {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface CredentialsSectionProps {
  className?: string;
}

const CredentialsSection = ({ className = '' }: CredentialsSectionProps) => {
  const credentials: Credential[] = [
    {
      id: 1,
      icon: "AcademicCapIcon",
      title: "Psychology & Human Behavior",
      description: "Advanced training in relationship psychology and interpersonal dynamics"
    },
    {
      id: 2,
      icon: "ChatBubbleLeftRightIcon",
      title: "Professional Introduction Certification",
      description: "Certified by the International Introduction Institute"
    },
    {
      id: 3,
      icon: "UserCircleIcon",
      title: "10+ Years in Relationship Counseling",
      description: "Extensive experience understanding what makes relationships work"
    },
    {
      id: 4,
      icon: "CheckBadgeIcon",
      title: "Verified Success Track Record",
      description: "Documented successful introductions with long-term relationship outcomes"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      publication: "The Times of India",
      title: "Redefining Modern Introduction",
      date: "December 2025"
    },
    {
      id: 2,
      publication: "Hindustan Times",
      title: "The Human Touch in Digital Dating",
      date: "November 2025"
    },
    {
      id: 3,
      publication: "Economic Times",
      title: "Premium Introduction Services on the Rise",
      date: "October 2025"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Professional Credentials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Professional Credentials
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Expertise backed by training, certification, and real-world experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {credentials.map((credential) => (
                <div
                  key={credential.id}
                  className="flex items-start gap-6 bg-background p-6 rounded-lg hover:shadow-card transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full">
                      <Icon name={credential.icon as any} size={24} variant="solid" className="text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                      {credential.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Recognition */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Media Recognition
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Featured in leading publications for our innovative approach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mediaFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mb-4">
                    <Icon name="NewspaperIcon" size={32} variant="outline" className="text-primary" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                    {feature.publication}
                  </h3>
                  <p className="font-body text-base text-muted-foreground mb-2">
                    {feature.title}
                  </p>
                  <p className="font-body text-sm text-muted-foreground opacity-75">
                    {feature.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;