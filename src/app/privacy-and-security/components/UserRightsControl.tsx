import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface UserRight {
  id: number;
  icon: string;
  title: string;
  description: string;
  action: string;
}

interface UserRightsControlProps {
  className?: string;
}

const UserRightsControl: React.FC<UserRightsControlProps> = ({ className = '' }) => {
  const userRights: UserRight[] = [
    {
      id: 1,
      icon: 'DocumentTextIcon',
      title: 'Right to Access',
      description: 'Request a complete copy of all personal data we hold about you in a structured, machine-readable format.',
      action: 'Request Data Export'
    },
    {
      id: 2,
      icon: 'PencilSquareIcon',
      title: 'Right to Rectification',
      description: 'Update, correct, or modify any inaccurate or incomplete personal information in your profile.',
      action: 'Update Profile'
    },
    {
      id: 3,
      icon: 'TrashIcon',
      title: 'Right to Erasure',
      description: 'Request permanent deletion of your account and all associated personal data from our systems.',
      action: 'Delete Account'
    },
    {
      id: 4,
      icon: 'ArrowDownTrayIcon',
      title: 'Right to Portability',
      description: 'Export your personal data in a commonly used format to transfer to another service provider.',
      action: 'Download Data'
    },
    {
      id: 5,
      icon: 'NoSymbolIcon',
      title: 'Right to Object',
      description: 'Opt-out of specific data processing activities, including marketing communications and analytics.',
      action: 'Manage Preferences'
    },
    {
      id: 6,
      icon: 'PauseIcon',
      title: 'Right to Restriction',
      description: 'Request temporary suspension of data processing while we verify accuracy or address concerns.',
      action: 'Restrict Processing'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Your Rights & Control
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete control over your personal information with easy-to-use tools and transparent processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {userRights.map((right) => (
              <div
                key={right.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={right.icon as any} size={24} variant="outline" className="text-accent" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                  {right.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {right.description}
                </p>
                <button className="font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1">
                  {right.action}
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="ClockIcon" size={28} variant="outline" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  Response Timeline
                </h3>
                <p className="font-body text-base text-muted-foreground">
                  We are committed to responding to all data rights requests promptly and transparently:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="BoltIcon" size={20} variant="solid" className="text-success" />
                  <span className="font-headline text-lg font-semibold text-foreground">24 Hours</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">Initial acknowledgment of your request</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CalendarDaysIcon" size={20} variant="solid" className="text-primary" />
                  <span className="font-headline text-lg font-semibold text-foreground">7 Days</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">Data access and export requests</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-headline text-lg font-semibold text-foreground">30 Days</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">Complete deletion and complex requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRightsControl;