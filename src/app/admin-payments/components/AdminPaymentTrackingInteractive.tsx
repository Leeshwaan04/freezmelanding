'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';

interface PaymentRecord {
  orderId: string;
  paymentId: string;
  amount: number;
  currency: string;
  status: string;
  email: string;
  name: string;
  purpose: 'assessment' | 'introduction' | 'membership';
  createdAt: string;
  metadata?: Record<string, any>;
}

const AdminPaymentTrackingInteractive = () => {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterPurpose, setFilterPurpose] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchAllPayments();
  }, []);

  const fetchAllPayments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/payments/history?admin=true');
      const data = await response.json();

      if (data.success) {
        setPayments(data.payments);
      } else {
        setError(data.error || 'Failed to fetch payments');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch payments');
    } finally {
      setIsLoading(false);
    }
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPurposeLabel = (purpose: string) => {
    const labels: Record<string, string> = {
      assessment: 'Assessment',
      introduction: 'Introduction',
      membership: 'Membership',
    };
    return labels[purpose] || purpose;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      captured: 'bg-success/10 text-success border-success',
      authorized: 'bg-primary/10 text-primary border-primary',
      created: 'bg-muted text-muted-foreground border-border',
      failed: 'bg-destructive/10 text-destructive border-destructive',
    };
    return colors[status] || 'bg-muted text-muted-foreground border-border';
  };

  // Filter and search logic
  const filteredPayments = payments.filter((payment) => {
    const matchesPurpose = filterPurpose === 'all' || payment.purpose === filterPurpose;
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    const matchesSearch =
      searchQuery === '' ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.paymentId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesPurpose && matchesStatus && matchesSearch;
  });

  // Calculate statistics
  const totalRevenue = payments
    .filter((p) => p.status === 'captured' || p.status === 'authorized')
    .reduce((sum, p) => sum + p.amount, 0);

  const assessmentRevenue = payments
    .filter((p) => p.purpose === 'assessment' && (p.status === 'captured' || p.status === 'authorized'))
    .reduce((sum, p) => sum + p.amount, 0);

  const introductionRevenue = payments
    .filter((p) => p.purpose === 'introduction' && (p.status === 'captured' || p.status === 'authorized'))
    .reduce((sum, p) => sum + p.amount, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-body text-muted-foreground">Loading payment data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-2">
            Admin Payment Tracking
          </h1>
          <p className="font-body text-muted-foreground">
            Monitor all payment transactions and revenue analytics
          </p>
        </div>

        {/* Revenue Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="CurrencyRupeeIcon" size={24} variant="outline" className="text-primary" />
              <h3 className="font-body text-sm font-medium text-muted-foreground">Total Revenue</h3>
            </div>
            <p className="font-headline text-2xl font-bold text-primary">
              {formatAmount(totalRevenue, 'INR')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="DocumentCheckIcon" size={24} variant="outline" className="text-accent" />
              <h3 className="font-body text-sm font-medium text-muted-foreground">Assessments</h3>
            </div>
            <p className="font-headline text-2xl font-bold text-accent">
              {formatAmount(assessmentRevenue, 'INR')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="UserGroupIcon" size={24} variant="outline" className="text-success" />
              <h3 className="font-body text-sm font-medium text-muted-foreground">Introductions</h3>
            </div>
            <p className="font-headline text-2xl font-bold text-success">
              {formatAmount(introductionRevenue, 'INR')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="DocumentTextIcon" size={24} variant="outline" className="text-foreground" />
              <h3 className="font-body text-sm font-medium text-muted-foreground">Total Transactions</h3>
            </div>
            <p className="font-headline text-2xl font-bold text-foreground">{payments.length}</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Search
              </label>
              <div className="relative">
                <Icon
                  name="MagnifyingGlassIcon"
                  size={20}
                  variant="outline"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search by email, name, or payment ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Purpose
              </label>
              <select
                value={filterPurpose}
                onChange={(e) => setFilterPurpose(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-md font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Purposes</option>
                <option value="assessment">Assessment</option>
                <option value="introduction">Introduction</option>
                <option value="membership">Membership</option>
              </select>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-md font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Statuses</option>
                <option value="captured">Captured</option>
                <option value="authorized">Authorized</option>
                <option value="created">Created</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-destructive/10 border border-destructive rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3">
              <Icon name="ExclamationTriangleIcon" size={24} variant="outline" className="text-destructive" />
              <p className="font-body text-destructive">{error}</p>
            </div>
          </div>
        )}

        {/* Payment Table */}
        {filteredPayments.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Icon
              name="DocumentTextIcon"
              size={64}
              variant="outline"
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
              No Payments Found
            </h3>
            <p className="font-body text-muted-foreground">
              {searchQuery || filterPurpose !== 'all' || filterStatus !== 'all' ?'Try adjusting your filters or search query' :'Payment transactions will appear here once users make payments'}
            </p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left font-body text-sm font-semibold text-foreground">
                      Payment ID
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredPayments.map((payment) => (
                    <tr key={payment.paymentId} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-body font-medium text-foreground">{payment.name}</p>
                          <p className="text-sm text-muted-foreground">{payment.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-body text-foreground">
                          {getPurposeLabel(payment.purpose)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-body font-semibold text-foreground">
                          {formatAmount(payment.amount, payment.currency)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase border ${getStatusColor(
                            payment.status
                          )}`}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-body text-sm text-muted-foreground">
                          {formatDate(payment.createdAt)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-xs text-muted-foreground">
                          {payment.paymentId}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Showing {filteredPayments.length} of {payments.length} transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPaymentTrackingInteractive;
