'use client';
import React, { useState } from 'react';
import { ProfileFormData, LifestyleType, SmokingPreference, DrinkingPreference } from '../../../types/introduction.types';

interface LifestyleStepProps {
  formData: Partial<ProfileFormData>;
  onChange: (field: keyof ProfileFormData, value: any) => void;
}

export default function LifestyleStep({ formData, onChange }: LifestyleStepProps) {
  const [newHobby, setNewHobby] = useState('');
  const [newInterest, setNewInterest] = useState('');

  const lifestyleOptions: { value: LifestyleType; label: string }[] = [
    { value: 'active', label: 'Active' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'relaxed', label: 'Relaxed' },
  ];

  const smokingOptions: { value: SmokingPreference; label: string }[] = [
    { value: 'never', label: 'Never' },
    { value: 'occasionally', label: 'Occasionally' },
    { value: 'regularly', label: 'Regularly' },
    { value: 'prefer_not_to_say', label: 'Prefer Not to Say' },
  ];

  const drinkingOptions: { value: DrinkingPreference; label: string }[] = [
    { value: 'never', label: 'Never' },
    { value: 'socially', label: 'Socially' },
    { value: 'regularly', label: 'Regularly' },
    { value: 'prefer_not_to_say', label: 'Prefer Not to Say' },
  ];

  const addHobby = () => {
    if (newHobby?.trim()) {
      const currentHobbies = formData?.hobbies || [];
      onChange('hobbies', [...currentHobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  const removeHobby = (index: number) => {
    const currentHobbies = formData?.hobbies || [];
    onChange('hobbies', currentHobbies?.filter((_, i) => i !== index));
  };

  const addInterest = () => {
    if (newInterest?.trim()) {
      const currentInterests = formData?.interests || [];
      onChange('interests', [...currentInterests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const removeInterest = (index: number) => {
    const currentInterests = formData?.interests || [];
    onChange('interests', currentInterests?.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifestyle & Preferences</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lifestyle Activity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lifestyle Activity Level *
          </label>
          <select
            value={formData?.lifestyleActivity || ''}
            onChange={(e) => onChange('lifestyleActivity', e.target.value as LifestyleType)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >
            <option value="">Select activity level</option>
            {lifestyleOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Smoking */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Smoking *
          </label>
          <select
            value={formData?.smoking || ''}
            onChange={(e) => onChange('smoking', e.target.value as SmokingPreference)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >
            <option value="">Select smoking preference</option>
            {smokingOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Drinking */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Drinking *
          </label>
          <select
            value={formData?.drinking || ''}
            onChange={(e) => onChange('drinking', e.target.value as DrinkingPreference)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >
            <option value="">Select drinking preference</option>
            {drinkingOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Has Children */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="hasChildren"
            checked={formData?.hasChildren || false}
            onChange={(e) => onChange('hasChildren', e.target.checked)}
            className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="hasChildren" className="ml-3 text-sm font-medium text-gray-700">
            I have children
          </label>
        </div>

        {/* Wants Children */}
        <div className="flex items-center md:col-span-2">
          <input
            type="checkbox"
            id="wantsChildren"
            checked={formData?.wantsChildren || false}
            onChange={(e) => onChange('wantsChildren', e.target.checked)}
            className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="wantsChildren" className="ml-3 text-sm font-medium text-gray-700">
            I want children in the future
          </label>
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hobbies
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHobby())}
            placeholder="Add a hobby"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addHobby}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData?.hobbies?.map((hobby, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800"
            >
              {hobby}
              <button
                type="button"
                onClick={() => removeHobby(index)}
                className="ml-2 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interests
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
            placeholder="Add an interest"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addInterest}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData?.interests?.map((interest, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-800"
            >
              {interest}
              <button
                type="button"
                onClick={() => removeInterest(index)}
                className="ml-2 text-pink-600 hover:text-pink-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}