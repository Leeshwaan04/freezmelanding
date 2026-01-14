'use client';
import React, { useState } from 'react';
import { ProfileFormData, GenderType, EducationLevelType, LifestyleType, SmokingPreference, DrinkingPreference } from '../../../types/matchmaking.types';

interface PartnerPreferencesStepProps {
  formData: Partial<ProfileFormData>;
  onChange: (field: keyof ProfileFormData, value: any) => void;
}

export default function PartnerPreferencesStep({ formData, onChange }: PartnerPreferencesStepProps) {
  const [newReligion, setNewReligion] = useState('');

  const genderOptions: { value: GenderType; label: string }[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'non_binary', label: 'Non-Binary' },
  ];

  const educationOptions: { value: EducationLevelType; label: string }[] = [
    { value: 'high_school', label: 'High School' },
    { value: 'bachelors', label: 'Bachelor\'s' },
    { value: 'masters', label: 'Master\'s' },
    { value: 'doctorate', label: 'Doctorate' },
    { value: 'other', label: 'Other' },
  ];

  const lifestyleOptions: { value: LifestyleType; label: string }[] = [
    { value: 'active', label: 'Active' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'relaxed', label: 'Relaxed' },
  ];

  const smokingOptions: { value: SmokingPreference; label: string }[] = [
    { value: 'never', label: 'Never' },
    { value: 'occasionally', label: 'Occasionally' },
    { value: 'regularly', label: 'Regularly' },
  ];

  const drinkingOptions: { value: DrinkingPreference; label: string }[] = [
    { value: 'never', label: 'Never' },
    { value: 'socially', label: 'Socially' },
    { value: 'regularly', label: 'Regularly' },
  ];

  const toggleArrayValue = (field: keyof ProfileFormData, value: any) => {
    const currentArray = (formData?.[field] as any[]) || [];
    const newArray = currentArray?.includes(value)
      ? currentArray?.filter(item => item !== value)
      : [...currentArray, value];
    onChange(field, newArray);
  };

  const addReligion = () => {
    if (newReligion?.trim()) {
      const currentReligions = formData?.preferredReligions || [];
      onChange('preferredReligions', [...currentReligions, newReligion.trim()]);
      setNewReligion('');
    }
  };

  const removeReligion = (index: number) => {
    const currentReligions = formData?.preferredReligions || [];
    onChange('preferredReligions', currentReligions?.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Preferences</h2>

      {/* Age Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Age Range *
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Min Age</label>
            <input
              type="number"
              value={formData?.preferredAgeMin || ''}
              onChange={(e) => onChange('preferredAgeMin', parseInt(e.target.value))}
              min="18"
              max="100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Max Age</label>
            <input
              type="number"
              value={formData?.preferredAgeMax || ''}
              onChange={(e) => onChange('preferredAgeMax', parseInt(e.target.value))}
              min="18"
              max="100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>

      {/* Preferred Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Gender *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {genderOptions?.map(option => (
            <label
              key={option?.value}
              className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                formData?.preferredGender?.includes(option?.value)
                  ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-200'
              }`}
            >
              <input
                type="checkbox"
                checked={formData?.preferredGender?.includes(option?.value)}
                onChange={() => toggleArrayValue('preferredGender', option?.value)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">{option?.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Distance */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Maximum Distance (miles) *
        </label>
        <input
          type="number"
          value={formData?.preferredLocationDistanceMiles || ''}
          onChange={(e) => onChange('preferredLocationDistanceMiles', parseInt(e.target.value))}
          min="1"
          max="500"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      {/* Education Levels */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Education Levels
        </label>
        <div className="grid grid-cols-2 gap-3">
          {educationOptions?.map(option => (
            <label
              key={option?.value}
              className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                formData?.preferredEducationLevels?.includes(option?.value)
                  ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-200'
              }`}
            >
              <input
                type="checkbox"
                checked={formData?.preferredEducationLevels?.includes(option?.value)}
                onChange={() => toggleArrayValue('preferredEducationLevels', option?.value)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">{option?.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Religions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Religions
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newReligion}
            onChange={(e) => setNewReligion(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addReligion())}
            placeholder="Add a religion preference"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addReligion}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData?.preferredReligions?.map((religion, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800"
            >
              {religion}
              <button
                type="button"
                onClick={() => removeReligion(index)}
                className="ml-2 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Lifestyle Preferences */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Lifestyle
        </label>
        <div className="grid grid-cols-3 gap-3">
          {lifestyleOptions?.map(option => (
            <label
              key={option?.value}
              className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                formData?.preferredLifestyle?.includes(option?.value)
                  ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-200'
              }`}
            >
              <input
                type="checkbox"
                checked={formData?.preferredLifestyle?.includes(option?.value)}
                onChange={() => toggleArrayValue('preferredLifestyle', option?.value)}
                className="sr-only"
              />
              <span className="text-sm font-medium text-gray-900">{option?.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Smoking & Drinking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preferred Smoking
          </label>
          <div className="space-y-2">
            {smokingOptions?.map(option => (
              <label
                key={option?.value}
                className={`flex items-center p-2 border rounded-lg cursor-pointer transition-colors ${
                  formData?.preferredSmoking?.includes(option?.value)
                    ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData?.preferredSmoking?.includes(option?.value)}
                  onChange={() => toggleArrayValue('preferredSmoking', option?.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-900">{option?.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preferred Drinking
          </label>
          <div className="space-y-2">
            {drinkingOptions?.map(option => (
              <label
                key={option?.value}
                className={`flex items-center p-2 border rounded-lg cursor-pointer transition-colors ${
                  formData?.preferredDrinking?.includes(option?.value)
                    ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData?.preferredDrinking?.includes(option?.value)}
                  onChange={() => toggleArrayValue('preferredDrinking', option?.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-900">{option?.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Children Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="preferredHasChildren"
            checked={formData?.preferredHasChildren || false}
            onChange={(e) => onChange('preferredHasChildren', e.target.checked)}
            className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="preferredHasChildren" className="ml-3 text-sm font-medium text-gray-700">
            Open to partners with children
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="preferredWantsChildren"
            checked={formData?.preferredWantsChildren || false}
            onChange={(e) => onChange('preferredWantsChildren', e.target.checked)}
            className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="preferredWantsChildren" className="ml-3 text-sm font-medium text-gray-700">
            Partner wants children
          </label>
        </div>
      </div>
    </div>
  );
}