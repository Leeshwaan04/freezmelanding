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
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">1. Service Description & Philosophy</h2>
                        <p className="mb-4">
                            Freezme is not a typical dating app. We provide a human-curated Introduction service designed for "Slow Dating." This means we prioritize quality over quantity and depth over speed.
                        </p>
                        <p>
                            What this means for you:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>No Algorithms: You will not be matched by a computer code. A real human curator reads your story and hand-picks matches based on emotional intelligence and values.</li>
                            <li>Intentionality: This service is strictly for individuals seeking serious, long-term connections. Casual dating seekers are advised to look elsewhere.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">2. Application & Vetting Process</h2>
                        <p className="mb-4">
                            Access to Freezme is exclusive. Submitting an application does not guarantee membership.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Manual Review: Every profile is reviewed by our team within 24-48 hours.</li>
                            <li>Waitlist: If we believe we cannot currently serve you well (e.g., due to location or match availability), you may be placed on a waitlist. This is to ensure we don't waste your time.</li>
                            <li>Truthfulness: You agree that all information provided is accurate. Misrepresentation of age, marital status, or profession is grounds for immediate ban.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">3. Code of Conduct & "No Ghosting" Policy</h2>
                        <p className="mb-4">
                            We are building a community of emotionally mature adults. To remain a member, you must adhere to our "Gold Standard" of behavior:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Responsiveness: We have a strict "No Ghosting" policy. If you are not interested in a match, you are expected to communicate that politely ("Thank you, but I don't feel a connection"). Disappearing without a word is prohibited.</li>
                            <li>Respect: Harassment, hate speech, or rudeness will result in an immediate, permanent ban.</li>
                            <li>Privacy: You must respect the privacy of your matches. Sharing their profiles or private details publicly is strictly forbidden.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">4. Fees & Refund Policy</h2>
                        <p className="mb-4">
                            Please understand what your membership fee pays for: Human Time.
                        </p>
                        <p>
                            Unlike apps that charge for "access to a database," Freezme charges for the service of curation. Our team spends hours reviewing your profile, searching for matches, and facilitating introductions.
                        </p>
                        <div className="p-4 bg-muted/50 border border-border rounded-lg mt-4">
                            <p className="font-bold">Refund Policy:</p>
                            <p className="text-sm mt-1">
                                Because our work (the curation and assessment) begins immediately upon your payment, membership fees are non-refundable once the curation process has started. We cannot "return" the hours our curators have spent working on your profile.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">5. Safety & Liability (The "Offline Risk")</h2>
                        <div className="p-5 bg-destructive/5 border border-destructive/20 rounded-xl space-y-3">
                            <p className="font-bold text-destructive uppercase text-xs tracking-widest">Important Disclaimer</p>
                            <p>
                                We vet profiles, not people's entire lives.
                            </p>
                            <p>
                                While we screen for consistency and intent, Freezme cannot guarantee the criminal background or personal history of any member. When you agree to meet a match in person, you do so at your own risk.
                            </p>
                            <p>
                                Your Responsibility: You agree to take standard precautions:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Always meet in a public place for the first date.</li>
                                    <li>Tell a friend or family member where you are going.</li>
                                    <li>Trust your gut—if something feels off, leave.</li>
                                </ul>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
                        <p>
                            The Freezme brand, website content, and our unique "Alignment" methodology are the exclusive property of Freezme. You agree not to copy, distribute, or create derivative works from our content.
                        </p>
                    </section>

                    <section className="bg-muted p-6 rounded-lg border border-border">
                        <h2 className="font-headline text-xl font-semibold text-foreground mb-2">Contact Us</h2>
                        <p>
                            If you have questions about these terms or need to report a violation, please contact our Trust & Safety team directly at <a href="mailto:hello@freezme.in" className="text-primary font-medium hover:underline">hello@freezme.in</a>.
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
