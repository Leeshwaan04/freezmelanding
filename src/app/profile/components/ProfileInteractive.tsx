'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';

export default function ProfileInteractive() {
  const router = useRouter();
  const { user, loading: authLoading, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user, authLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setUpdating(true);

    const result = await updateProfile({ name: formData.name });

    if (result.success) {
      setSuccess('Profile updated successfully');
      setIsEditing(false);
      setTimeout(() => setSuccess(''), 3000);
    } else {
      setError(result.error || 'Update failed');
    }

    setUpdating(false);
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Icon name="ArrowPathIcon" size={40} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Header />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Profile Header */}
          <div className="bg-card rounded-lg shadow-card p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h1 className="font-headline text-3xl font-bold text-primary mb-1">
                    {user.name}
                  </h1>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors flex items-center gap-2"
              >
                <Icon name={isEditing ? 'XMarkIcon' : 'PencilIcon'} size={16} />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {/* Success/Error Messages */}
            {success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3">
                <Icon name="CheckCircleIcon" size={20} className="text-green-600" />
                <p className="text-sm text-green-800 font-medium">{success}</p>
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3">
                <Icon name="ExclamationCircleIcon" size={20} className="text-red-600" />
                <p className="text-sm text-red-800 font-medium">{error}</p>
              </div>
            )}

            {/* Edit Form */}
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full px-4 py-3 border border-border rounded-md bg-muted cursor-not-allowed"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Email cannot be changed
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={updating}
                  className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:shadow-hover transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {updating ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Icon name="CheckIcon" size={20} />
                      Save Changes
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                  <p className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Status</p>
                  <p className="font-medium text-green-600">Active</p>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>
    </div>
  );
}