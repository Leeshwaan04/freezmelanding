import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  service: string;
  monthlyCost: string;
  yearlyTotal: string;
  timeInvested: string;
  successRate: string;
}

interface CostComparisonProps {
  className?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({ className = '' }) => {
  const comparisonData: ComparisonItem[] = [
    {
      service: 'Dating Apps (Premium)',
      monthlyCost: '₹2,500',
      yearlyTotal: '₹30,000',
      timeInvested: '200+ hours',
      successRate: '2-5%',
    },
    {
      service: 'Speed Dating Events',
      monthlyCost: '₹3,000',
      yearlyTotal: '₹36,000',
      timeInvested: '150+ hours',
      successRate: '5-10%',
    },
    {
      service: 'Traditional Introducers',
      monthlyCost: '₹15,000',
      yearlyTotal: '₹1,80,000',
      timeInvested: '50+ hours',
      successRate: '15-25%',
    },
  ];

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Real Cost of Finding Love
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              When you factor in time, emotional energy, and actual results, Freezme offers exceptional value for serious relationship seekers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-card">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-headline text-sm font-semibold text-foreground">
                    Service Type
                  </th>
                  <th className="px-6 py-4 text-left font-headline text-sm font-semibold text-foreground">
                    Monthly Cost
                  </th>
                  <th className="px-6 py-4 text-left font-headline text-sm font-semibold text-foreground">
                    Yearly Total
                  </th>
                  <th className="px-6 py-4 text-left font-headline text-sm font-semibold text-foreground">
                    Time Invested
                  </th>
                  <th className="px-6 py-4 text-left font-headline text-sm font-semibold text-foreground">
                    Success Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors duration-200">
                    <td className="px-6 py-4 font-body text-sm text-foreground font-medium">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                      {item.monthlyCost}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                      {item.yearlyTotal}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                      {item.timeInvested}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted-foreground">
                      {item.successRate}
                    </td>
                  </tr>
                ))}
                <tr className="bg-accent/10 hover:bg-accent/20 transition-colors duration-200">
                  <td className="px-6 py-4 font-body text-sm text-foreground font-bold">
                    Freezme Premium
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-foreground font-semibold">
                    Flexible
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-foreground font-semibold">
                    By Application
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-foreground font-semibold">
                    10-20 hours
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-success font-bold">
                    30-45%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-accent/10 rounded-lg p-6 border-l-4 border-accent">
            <div className="flex items-start gap-3">
              <Icon name="LightBulbIcon" size={24} variant="solid" className="text-accent mt-1" />
              <div>
                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                  ROI Perspective
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  The average person spends 2-3 years on dating apps before finding a serious relationship. That's ₹60,000-₹90,000 in subscriptions alone, plus 400-600 hours of your time. Freezme offers a more efficient path with higher success rates and significantly less emotional exhaustion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;