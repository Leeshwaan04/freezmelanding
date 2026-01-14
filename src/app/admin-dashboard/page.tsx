'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import { supabase } from '@/lib/supabase';
import Icon from '@/components/ui/AppIcon';

export default function AdminDashboard() {
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchApplications() {
            try {
                const { data, error } = await supabase
                    .from('applications')
                    .select('*')
                    .order('submitted_at', { ascending: false });

                if (error) throw error;
                setApplications(data || []);
            } catch (err: any) {
                console.error('Error fetching applications:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchApplications();
    }, []);

    return (
        <main className="min-h-screen bg-muted/30">
            <Header />
            <div className="pt-24 pb-16 container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="font-headline text-3xl font-bold text-foreground">Admin Dashboard</h1>
                        <p className="font-body text-muted-foreground">Manage and review your matchmaking applications</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-body font-medium">
                        {applications.length} Applications Total
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : error ? (
                    <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg text-destructive text-center">
                        <p className="font-headline font-semibold mb-2">Error connecting to database</p>
                        <p className="text-sm font-body">{error}</p>
                        <p className="mt-4 text-xs">Note: Ensure your Supabase URL and Keys are set in environment variables.</p>
                    </div>
                ) : applications.length === 0 ? (
                    <div className="bg-white border border-border p-12 rounded-lg text-center shadow-sm">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="UserIcon" size={32} variant="outline" className="text-muted-foreground" />
                        </div>
                        <h2 className="font-headline text-xl font-semibold text-foreground mb-2">No Applications Yet</h2>
                        <p className="font-body text-muted-foreground">When people apply through the form, they will appear here.</p>
                    </div>
                ) : (
                    <div className="bg-white border border-border rounded-lg shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-muted/50 border-b border-border">
                                    <tr>
                                        <th className="px-6 py-4 font-headline font-semibold text-sm">Date</th>
                                        <th className="px-6 py-4 font-headline font-semibold text-sm">Name</th>
                                        <th className="px-6 py-4 font-headline font-semibold text-sm">Location</th>
                                        <th className="px-6 py-4 font-headline font-semibold text-sm">Profession</th>
                                        <th className="px-6 py-4 font-headline font-semibold text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {applications.map((app) => (
                                        <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4 font-body text-sm">
                                                {new Date(app.submitted_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-body font-medium text-foreground">{app.full_name}</p>
                                                <p className="text-xs text-muted-foreground">{app.email}</p>
                                            </td>
                                            <td className="px-6 py-4 font-body text-sm text-foreground">
                                                {app.city}
                                            </td>
                                            <td className="px-6 py-4 font-body text-sm text-foreground">
                                                {app.profession}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-primary hover:text-primary/80 font-body text-sm font-medium">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}