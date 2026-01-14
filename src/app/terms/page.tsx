import Link from 'next/link';
import Header from '@/components/common/Header';

export default function TermsPage() {
    const lastUpdated = 'January 14, 2026';

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
                <h1 className="font-headline text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
                <p className="font-body text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

                <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">1. Service Description</h2>
                        <p>
                            Freezme provides a high-end, human-curated matchmaking service. Our objective is to facilitate introductions based on compatibility assessments performed by our expert curators. We do not use automated algorithms to guarantee matches.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">2. Assessment Fee</h2>
                        <p>
                            The <strong>₹5,000 assessment fee</strong> is a non-refundable payment for the manual review of your application, verification of details, and community fit assessment. Payment of this fee does not guarantee acceptance into the membership program or a specific number of introductions.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">3. Eligibility</h2>
                        <p>
                            You must be at least 21 years of age and legally single to use our services. By applying, you represent and warrant that you have never been convicted of a felony and that you are not required to register as a sex offender with any government entity.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">4. Human Curation & Accuracy</h2>
                        <p>
                            While we strive to provide accurate information about potential matches, we rely on information provided by members. We do not perform criminal background checks on all members and advise all users to exercise caution when meeting new people.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">5. Termination</h2>
                        <p>
                            We reserve the right to decline any application or terminate any membership at our sole discretion, without providing specific reasons, if we believe the member does not align with our community values.
                        </p>
                    </section>

                    <section className="bg-muted p-6 rounded-lg border border-border">
                        <h2 className="font-headline text-xl font-semibold text-foreground mb-2">Contact Us</h2>
                        <p>
                            If you have any questions regarding these terms, please contact us at <a href="mailto:hello@freezme.in" className="text-primary font-medium hover:underline">hello@freezme.in</a>.
                        </p>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/application" className="text-primary hover:underline font-medium">
                        Return to Application
                    </Link>
                </div>
            </div>
        </main>
    );
}
