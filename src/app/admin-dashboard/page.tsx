'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Icon from '@/components/ui/AppIcon';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type Application = {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    gender: string;
    city: string;
    profession: string;
    education: string;
    submitted_at: string;
    dob: string;
    preferences: {
        age_range: string;
        height: string;
        religion: string;
        education: string;
        smoking: string;
        drinking: string;
        diet: string;
    };
    about: {
        bio: string;
        hobbies: string;
        goals: string;
        deal_breakers: string;
        history: string;
        family_values: string;
    };
};

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);
    const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) return;

        async function fetchApplications() {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('applications')
                    .select('*')
                    .order('submitted_at', { ascending: false });

                if (error) throw error;
                setApplications(data || []);
                setError(null);
            } catch (err: any) {
                console.error('Error fetching applications:', err);
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        }

        fetchApplications();
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === 'freezme2026') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const handleDelete = async (id: number) => {
        setDeleting(true);
        try {
            const { error } = await supabase
                .from('applications')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setApplications(applications.filter(app => app.id !== id));
            setDeleteConfirm(null);
        } catch (err: any) {
            console.error('Error deleting application:', err);
            alert('Failed to delete: ' + (err.message || 'Unknown error'));
        } finally {
            setDeleting(false);
        }
    };

    const [sortConfig, setSortConfig] = useState<{ key: keyof Application | string, direction: 'asc' | 'desc' }>({ key: 'submitted_at', direction: 'desc' });

    const filteredApps = applications.filter(app =>
        (app.full_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (app.email?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (app.city?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    );

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedApps = [...filteredApps].sort((a, b) => {
        if (sortConfig.key === 'submitted_at') {
            const dateA = new Date(a.submitted_at).getTime();
            const dateB = new Date(b.submitted_at).getTime();
            return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
        }
        if (sortConfig.key === 'full_name') {
            const nameA = a.full_name?.toLowerCase() || '';
            const nameB = b.full_name?.toLowerCase() || '';
            if (nameA < nameB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (nameA > nameB) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        }
        return 0;
    });

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card p-10 rounded-3xl shadow-2xl w-full max-w-md border border-border/50 backdrop-blur-md"
                >
                    <div className="text-center mb-10">
                        <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Icon name="LockClosedIcon" size={40} className="text-primary" />
                        </div>
                        <h1 className="font-headline text-3xl font-bold text-foreground">Admin Sanctuary</h1>
                        <p className="font-body text-sm text-muted-foreground mt-3">Access the inner circle of Freezme</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <Icon name="KeyIcon" size={20} variant="outline" />
                            </div>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                                placeholder="Enter assessment key"
                                autoFocus
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-headline font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                        >
                            Unlock Dashboard
                        </button>
                    </form>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-40 shadow-sm">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <div>
                                <h1 className="font-headline text-xl font-bold text-foreground leading-none">Freezme</h1>
                                <p className="text-[10px] text-muted-foreground font-headline font-bold uppercase tracking-widest mt-1">Curator Panel</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center bg-card/50 px-4 py-2 rounded-2xl border border-border/50">
                                <span className="text-xs text-muted-foreground font-body font-bold uppercase tracking-tighter">Live Applications:</span>
                                <span className="text-sm font-bold text-primary ml-3">{applications.length}</span>
                            </div>
                            <button
                                onClick={() => setIsAuthenticated(false)}
                                className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all font-headline uppercase tracking-widest border border-transparent hover:border-destructive/20"
                            >
                                <Icon name="ArrowRightOnRectangleIcon" size={18} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="pt-28 pb-16 container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <h2 className="font-headline text-4xl font-bold text-foreground mb-3">Applicants Intake</h2>
                        <p className="font-body text-muted-foreground text-lg">
                            Review the narratives and alignments of potential members.
                        </p>
                    </div>

                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
                            <Icon name="MagnifyingGlassIcon" size={20} variant="outline" />
                        </div>
                        <input
                            type="text"
                            placeholder="Filter by name, email, or city..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-card/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm shadow-sm font-body transition-all"
                        />
                    </div>
                </div>

                <div className="bg-card/40 border border-border/50 rounded-3xl shadow-2xl overflow-hidden min-h-[500px] backdrop-blur-md">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-80">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6" />
                            <p className="text-muted-foreground font-body font-medium animate-pulse">Accessing archives...</p>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                            <div className="bg-destructive/10 p-6 rounded-full mb-6">
                                <Icon name="ExclamationTriangleIcon" size={48} className="text-destructive" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-foreground mb-3">Intake Disturbance</h3>
                            <p className="font-body text-muted-foreground max-w-md mb-8">{error}</p>
                            <button onClick={() => window.location.reload()} className="px-8 py-3 bg-primary text-white rounded-xl font-bold">Try Reconnecting</button>
                        </div>
                    ) : filteredApps.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-20 text-center">
                            <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mb-6">
                                <Icon name="UserIcon" size={40} className="text-muted-foreground/30" />
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-foreground">No matches in queue</h3>
                            <p className="font-body text-muted-foreground mt-2 max-w-sm mx-auto">
                                {searchQuery ? "Your filter didn't yield any results." : "The gates are open but the path is currently quiet."}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-muted/30 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                                    <tr>
                                        <th className="px-8 py-6 cursor-pointer hover:bg-muted/50 transition-colors group" onClick={() => handleSort('full_name')}>
                                            <div className="flex items-center gap-2">
                                                Applicant Node
                                                <div className="flex flex-col">
                                                    <Icon name="ChevronUpIcon" size={10} className={`${sortConfig.key === 'full_name' && sortConfig.direction === 'asc' ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                                    <Icon name="ChevronDownIcon" size={10} className={`-mt-1 ${sortConfig.key === 'full_name' && sortConfig.direction === 'desc' ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="px-8 py-6">Identity details</th>
                                        <th className="px-8 py-6 cursor-pointer hover:bg-muted/50 transition-colors group" onClick={() => handleSort('submitted_at')}>
                                            <div className="flex items-center gap-2">
                                                Submission cycle
                                                <div className="flex flex-col">
                                                    <Icon name="ChevronUpIcon" size={10} className={`${sortConfig.key === 'submitted_at' && sortConfig.direction === 'asc' ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                                    <Icon name="ChevronDownIcon" size={10} className={`-mt-1 ${sortConfig.key === 'submitted_at' && sortConfig.direction === 'desc' ? 'text-primary' : 'text-muted-foreground/30'}`} />
                                                </div>
                                            </div>
                                        </th>
                                        <th className="px-8 py-6 text-center">Narrative</th>
                                        <th className="px-8 py-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/30">
                                    {sortedApps.map((app) => (
                                        <tr key={app.id} className="hover:bg-primary/5 transition-all group cursor-pointer" onClick={() => setSelectedApp(app)}>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary font-headline font-bold text-lg group-hover:scale-110 transition-transform">
                                                        {app.full_name?.[0]?.toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="font-headline font-bold text-foreground text-lg leading-none mb-1">{app.full_name}</p>
                                                        <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">{app.gender} • {app.city}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="space-y-1">
                                                    <p className="font-body text-sm font-bold text-foreground/80">{app.profession}</p>
                                                    <p className="font-body text-xs text-muted-foreground">{app.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <Icon name="CalendarIcon" size={14} className="text-muted-foreground/50" />
                                                    <div>
                                                        <p className="font-body text-sm font-bold text-foreground/80">
                                                            {new Date(app.submitted_at).toLocaleDateString(undefined, {
                                                                month: 'short', day: 'numeric'
                                                            })}
                                                        </p>
                                                        <p className="font-body text-xs text-muted-foreground uppercase tracking-tighter">
                                                            {new Date(app.submitted_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedApp(app);
                                                    }}
                                                    className="inline-flex items-center gap-2 text-primary font-headline font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary hover:text-white"
                                                >
                                                    View Depth
                                                    <Icon name="ChevronRightIcon" size={14} />
                                                </button>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                                    <button
                                                        onClick={() => setSelectedApp(app)}
                                                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                        title="Edit / Details"
                                                    >
                                                        <Icon name="PencilSquareIcon" size={18} />
                                                    </button>
                                                    {deleteConfirm === app.id ? (
                                                        <div className="flex items-center gap-1">
                                                            <button
                                                                onClick={() => handleDelete(app.id)}
                                                                disabled={deleting}
                                                                className="p-2 bg-destructive text-white rounded-lg hover:bg-destructive/80 transition-all disabled:opacity-50"
                                                                title="Confirm Delete"
                                                            >
                                                                <Icon name="CheckIcon" size={18} />
                                                            </button>
                                                            <button
                                                                onClick={() => setDeleteConfirm(null)}
                                                                className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-all"
                                                                title="Cancel"
                                                            >
                                                                <Icon name="XMarkIcon" size={18} />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={() => setDeleteConfirm(app.id)}
                                                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-all"
                                                            title="Delete"
                                                        >
                                                            <Icon name="TrashIcon" size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* --- Details Modal --- */}
            <AnimatePresence>
                {selectedApp && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedApp(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-card rounded-[32px] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative z-10 border border-border/50 flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-border/50 flex justify-between items-start bg-gradient-to-r from-primary/5 to-transparent">
                                <div className="flex gap-6 items-center">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-3xl font-headline font-bold">
                                        {selectedApp.full_name?.[0]?.toUpperCase()}
                                    </div>
                                    <div>
                                        <h2 className="font-headline text-3xl font-bold text-foreground mb-1">{selectedApp.full_name}</h2>
                                        <p className="font-body text-muted-foreground flex items-center gap-4">
                                            <span className="flex items-center gap-1.5"><Icon name="EnvelopeIcon" size={16} /> {selectedApp.email}</span>
                                            <span className="flex items-center gap-1.5"><Icon name="PhoneIcon" size={16} /> {selectedApp.phone}</span>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className="p-2 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground transition-all"
                                >
                                    <Icon name="XMarkIcon" size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
                                {/* Grid Layout for Core Identity */}
                                <section>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-1.5 h-6 bg-primary rounded-full" />
                                        <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-foreground/50 text-sm">Vital Identity</h3>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                        <DetailItem label="Born" value={selectedApp.dob ? new Date(selectedApp.dob).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown'} icon="CalendarIcon" />
                                        <DetailItem label="Biological" value={selectedApp.gender} icon="UserIcon" />
                                        <DetailItem label="Location" value={selectedApp.city} icon="MapPinIcon" />
                                        <DetailItem label="Education" value={selectedApp.education} icon="AcademicCapIcon" />
                                    </div>
                                    <div className="mt-10 p-6 bg-muted/30 rounded-2xl border border-border/30 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Path & Purpose</p>
                                            <p className="font-headline text-xl font-bold text-foreground">{selectedApp.profession}</p>
                                        </div>
                                        <Icon name="BriefcaseIcon" size={32} className="text-primary/20" />
                                    </div>
                                </section>

                                {/* Narrative Depth */}
                                {selectedApp.about && (
                                    <section className="space-y-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-6 bg-accent rounded-full" />
                                            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-foreground/50 text-sm">The Narrative Deep Dive</h3>
                                        </div>

                                        <DetailBlock label="The Narrative of You" value={selectedApp.about.bio} icon="FingerPrintIcon" />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <MiniBlock label="Relationship Vision" value={selectedApp.about.goals} icon="LifebuoyIcon" />
                                            <MiniBlock label="Legacy & Family" value={selectedApp.about.family_values} icon="UserGroupIcon" />
                                        </div>

                                        <DetailBlock label="Curiosity & Passions" value={selectedApp.about.hobbies} icon="HeartIcon" />
                                        <DetailBlock label="The Non-Negotiables" value={selectedApp.about.deal_breakers} icon="NoSymbolIcon" highlight />
                                        <DetailBlock label="Wisdom from the Past" value={selectedApp.about.history} icon="HandThumbUpIcon" />
                                    </section>
                                )}

                                {/* Alignment Data */}
                                {selectedApp.preferences && (
                                    <section className="bg-primary/5 p-8 rounded-[32px] border border-primary/10">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-1.5 h-6 bg-primary/50 rounded-full" />
                                            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-primary/60 text-sm">The Compass Alignment</h3>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
                                            {Object.entries(selectedApp.preferences).map(([key, value]) => (
                                                <div key={key} className="flex flex-col gap-1">
                                                    <span className="font-headline text-[10px] font-bold text-primary/40 uppercase tracking-widest">{key.replace(/_/g, ' ')}</span>
                                                    <span className="font-body font-bold text-foreground text-sm">{String(value)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="p-8 border-t border-border/50 bg-background flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className="px-8 py-3 text-muted-foreground font-bold font-headline uppercase tracking-widest hover:text-foreground transition-colors"
                                >
                                    Back to Queue
                                </button>
                                <a
                                    href={`mailto:${selectedApp.email}`}
                                    className="px-10 py-4 bg-primary text-white font-headline font-bold uppercase tracking-widest rounded-2xl hover:shadow-[0_10px_30px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all flex items-center gap-3"
                                >
                                    Initiate Contact
                                    <Icon name="PaperPlaneIcon" size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

// --- Helper Components ---

function DetailItem({ label, value, icon }: { label: string, value: string, icon: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 text-primary/30"><Icon name={icon} size={18} variant="outline" /></div>
            <div>
                <p className="font-headline text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="font-body font-bold text-foreground">{value || '-'}</p>
            </div>
        </div>
    );
}

function MiniBlock({ label, value, icon }: { label: string, value: string, icon: string }) {
    return (
        <div className="p-5 bg-card/50 rounded-2xl border border-border/30 flex items-start gap-4">
            <div className="p-2 bg-muted rounded-xl text-primary"><Icon name={icon} size={20} variant="outline" /></div>
            <div>
                <p className="font-headline text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="font-body text-sm font-bold text-foreground">{value || '-'}</p>
            </div>
        </div>
    );
}

function DetailBlock({ label, value, icon, highlight = false }: { label: string, value: string, icon: string, highlight?: boolean }) {
    if (!value) return null;
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Icon name={icon} size={16} className="text-primary/40" />
                <p className="font-headline text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
            </div>
            <div className={`p-6 rounded-2xl border ${highlight ? 'bg-destructive/5 border-destructive/20' : 'bg-muted/30 border-border/30'} backdrop-blur-sm shadow-inner`}>
                <p className={`font-body text-sm leading-relaxed whitespace-pre-wrap ${highlight ? 'text-foreground font-medium' : 'text-foreground/70'}`}>
                    {value}
                </p>
            </div>
        </div>
    );
}