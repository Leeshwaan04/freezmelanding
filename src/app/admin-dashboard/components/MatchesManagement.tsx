'use client';

import React, { useState, useEffect } from 'react';
import { adminService, MatchIntroduction } from '@/services/adminService';

interface MatchesManagementProps {
  onRefresh: () => void;
}

export default function MatchesManagement({ onRefresh }: MatchesManagementProps) {
  const [matches, setMatches] = useState<MatchIntroduction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    setLoading(true);
    const data = await adminService.getMatchIntroductions();
    setMatches(data);
    setLoading(false);
  };

  const handleStatusUpdate = async (matchId: string, status: string, outcome?: string) => {
    const success = await adminService.updateMatchStatus(matchId, status, outcome);
    if (success) {
      await loadMatches();
      onRefresh();
    }
  };

  const filteredMatches = matches.filter((match) => {
    return filterStatus === 'all' || match.status === filterStatus;
  });

  if (loading) {
    return <div className="text-center py-12">Loading matches...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Match Introductions</h2>
        <button
          onClick={loadMatches}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
        >
          Refresh
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
        >
          <option value="all">All Matches</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMatches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  match.status === 'active' ?'bg-green-100 text-green-800'
                    : match.status === 'completed' ?'bg-blue-100 text-blue-800'
                    : match.status === 'cancelled' ?'bg-red-100 text-red-800' :'bg-yellow-100 text-yellow-800'
                }`}
              >
                {match.status}
              </span>
              {match.matchScore && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Match Score:</span>
                  <span className="font-bold text-rose-600">{match.matchScore}%</span>
                </div>
              )}
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-lg mb-1">
                    {match.user1Name.charAt(0)}
                  </div>
                  <p className="font-medium text-sm">{match.user1Name}</p>
                </div>
                <span className="text-2xl">💑</span>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mb-1">
                    {match.user2Name.charAt(0)}
                  </div>
                  <p className="font-medium text-sm">{match.user2Name}</p>
                </div>
              </div>

              {match.introducerName && (
                <div className="text-center text-sm text-gray-600">
                  Introducer: <span className="font-medium">{match.introducerName}</span>
                </div>
              )}

              {match.notes && (
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-700">{match.notes}</p>
                </div>
              )}

              {match.outcome && (
                <div className="bg-green-50 p-3 rounded text-sm">
                  <p className="text-green-800 font-medium">Outcome: {match.outcome}</p>
                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <p className="text-xs text-gray-500 mb-3">
                Introduced: {new Date(match.introductionDate).toLocaleDateString()}
              </p>
              <div className="flex space-x-2">
                {match.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleStatusUpdate(match.id, 'active')}
                      className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                    >
                      Activate
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(match.id, 'cancelled')}
                      className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  </>
                )}
                {match.status === 'active' && (
                  <button
                    onClick={() => handleStatusUpdate(match.id, 'completed', 'success')}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-12 text-gray-500">No matches found.</div>
      )}
    </div>
  );
}