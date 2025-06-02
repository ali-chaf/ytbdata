import React, { useState } from 'react';
import { niches, getTagFrequency, getPopularityByNiche, getTagsByNiche, getVideoIdeasCount, getMostPopularTags, getEngagementPotentialByNiche } from '../data/niches';
import ChartCard from './ChartCard';
import NicheCard from './NicheCard';
import Header from './Header';

const Dashboard: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<string | null>(null);
  
  const tagFrequency = getTagFrequency();
  const nichePopularity = getPopularityByNiche();
  const tagsByNiche = getTagsByNiche();
  const totalVideoIdeas = getVideoIdeasCount();
  const topTags = getMostPopularTags();
  const engagementPotential = getEngagementPotentialByNiche();
  
  const filteredNiches = activeNiche 
    ? niches.filter(niche => niche.id === activeNiche) 
    : niches;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            YouTube Shorts Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore content ideas and analytics for industrial and tech YouTube Shorts
          </p>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Niches</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{niches.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Video Ideas</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{totalVideoIdeas}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Top Tag</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{tagFrequency[0]?.tag || 'N/A'}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Most Popular Niche</h3>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {nichePopularity.sort((a, b) => b.popularityScore - a.popularityScore)[0]?.niche.split(' ')[0] || 'N/A'}
            </p>
          </div>
        </div>
        
        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveNiche(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeNiche === null 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            All Niches
          </button>
          {niches.map(niche => (
            <button
              key={niche.id}
              onClick={() => setActiveNiche(niche.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeNiche === niche.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {niche.name}
            </button>
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard 
            title="Top Tags by Frequency"
            type="bar"
            data={{
              labels: tagFrequency.slice(0, 10).map(item => item.tag),
              datasets: [{
                label: 'Frequency',
                data: tagFrequency.slice(0, 10).map(item => item.count),
                backgroundColor: 'rgba(79, 70, 229, 0.8)'
              }]
            }}
          />
          <ChartCard 
            title="Niche Popularity"
            type="pie"
            data={{
              labels: nichePopularity.map(item => item.niche),
              datasets: [{
                data: nichePopularity.map(item => item.popularityScore),
                backgroundColor: [
                  'rgba(79, 70, 229, 0.8)',
                  'rgba(16, 185, 129, 0.8)',
                  'rgba(245, 158, 11, 0.8)',
                  'rgba(239, 68, 68, 0.8)',
                  'rgba(139, 92, 246, 0.8)',
                ]
              }]
            }}
          />
        </div>
        
        {/* Engagement Potential Chart */}
        <div className="mb-8">
          <ChartCard 
            title="Engagement Potential by Niche"
            type="bar"
            data={{
              labels: engagementPotential.map(item => item.niche),
              datasets: [{
                label: 'Engagement Potential (%)',
                data: engagementPotential.map(item => item.engagementPotential),
                backgroundColor: 'rgba(16, 185, 129, 0.8)'
              }]
            }}
          />
        </div>
        
        {/* Niche Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNiches.map(niche => (
            <NicheCard 
              key={niche.id} 
              niche={niche} 
              tagData={tagsByNiche.find(item => item.niche === niche.name)?.topTags || []}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>YouTube Shorts Analytics Dashboard for Industrial and Tech Content</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;