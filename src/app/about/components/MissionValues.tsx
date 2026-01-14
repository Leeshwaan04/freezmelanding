import Icon from '@/components/ui/AppIcon';

interface Value {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface MissionValuesProps {
  className?: string;
}

const MissionValues = ({ className = '' }: MissionValuesProps) => {
  const values: Value[] = [
    {
      id: 1,
      icon: "HeartIcon",
      title: "Human-Centered Approach",
      description: "We believe in the irreplaceable value of human judgment, empathy, and intuition in creating meaningful connections."
    },
    {
      id: 2,
      icon: "ShieldCheckIcon",
      title: "Radical Transparency",
      description: "We're honest about our limitations, our process, and what you can realistically expect from our service."
    },
    {
      id: 3,
      icon: "SparklesIcon",
      title: "Quality Over Quantity",
      description: "We prioritize thoughtful, compatible introductions over volume, ensuring each match receives careful consideration."
    },
    {
      id: 4,
      icon: "UserGroupIcon",
      title: "Emotional Intelligence",
      description: "We work exclusively with emotionally mature individuals who are genuinely ready for serious relationships."
    },
    {
      id: 5,
      icon: "LockClosedIcon",
      title: "Privacy & Discretion",
      description: "Your personal information and dating journey remain completely confidential and secure."
    },
    {
      id: 6,
      icon: "ClockIcon",
      title: "Intentional Pace",
      description: "We embrace the philosophy of 'intentional pause'—taking time to understand you before making introductions."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To provide a sanctuary from dating app fatigue by offering thoughtfully curated introductions for emotionally intelligent individuals seeking meaningful, long-term relationships.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h3 className="font-headline text-2xl lg:text-3xl font-semibold text-foreground text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                    <Icon name={value.icon as any} size={28} variant="solid" className="text-primary" />
                  </div>
                  <h4 className="font-headline text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {value.description}
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

export default MissionValues;