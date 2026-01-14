'use client';


import Script from 'next/script';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';

interface Introduction {
  id: string;
  name: string;
  age: number;
  profession: string;
  city: string;
  image: string;
  alt: string;
  matchScore: number;
  status: 'pending' | 'unlocked' | 'declined';
  price: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload" />


      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-2">
            Member Portal
          </h1>
          <p className="font-body text-muted-foreground">
            Welcome back! View your curated introductions and payment history.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border mb-8">
          <button
            onClick={() => setActiveTab('introductions')}
            className={`px-6 py-3 font-body font-medium transition-all duration-200 border-b-2 ${
            activeTab === 'introductions' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
            }>

            Curated Introductions
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-body font-medium transition-all duration-200 border-b-2 ${
            activeTab === 'history' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
            }>

            Payment History
          </button>
        </div>

        {/* Introductions Tab */}
        {activeTab === 'introductions' &&
        <div className="grid md:grid-cols-2 gap-6">
            {introductions.map((intro) =>
          <div
            key={intro.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-200">

                <div className="relative h-64">
                  <img
                src={intro.image}
                alt={intro.alt}
                className="w-full h-full object-cover" />

                  {intro.status === 'pending' &&
              <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm flex items-center justify-center">
                      <Icon
                  name="LockClosedIcon"
                  size={48}
                  variant="solid"
                  className="text-background" />

                    </div>
              }
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {intro.matchScore}% Match
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    {intro.status === 'pending' ? intro.name : intro.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="font-body text-muted-foreground flex items-center gap-2">
                      <Icon name="BriefcaseIcon" size={16} variant="outline" />
                      {intro.profession}
                    </p>
                    <p className="font-body text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPinIcon" size={16} variant="outline" />
                      {intro.city}
                    </p>
                    <p className="font-body text-muted-foreground flex items-center gap-2">
                      <Icon name="CakeIcon" size={16} variant="outline" />
                      {intro.age} years old
                    </p>
                  </div>

                  {intro.status === 'pending' &&
              <button
                onClick={() => handleUnlockIntroduction(intro)}
                disabled={isProcessing}
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-md font-body font-semibold hover:-translate-y-0.5 hover:shadow-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">

                      {isProcessing ? 'Processing...' : `Unlock for ₹${intro.price}`}
                    </button>
              }

                  {intro.status === 'unlocked' &&
              <div className="bg-success/10 border border-success rounded-md p-4 text-center">
                      <Icon
                  name="CheckCircleIcon"
                  size={24}
                  variant="solid"
                  className="text-success mx-auto mb-2" />

                      <p className="font-body text-success font-medium">
                        Introduction Unlocked
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Check your email for contact details
                      </p>
                    </div>
              }
                </div>
              </div>
          )}
          </div>
        }

        {/* Payment History Tab - Placeholder */}
        {activeTab === 'history' &&
        <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Icon
            name="ClockIcon"
            size={48}
            variant="outline"
            className="text-muted-foreground mx-auto mb-4" />

            <p className="font-body text-muted-foreground">
              Payment history will be displayed here
            </p>
          </div>
        }
      </div>
    </div>);

};

