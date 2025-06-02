import React, { useState } from 'react';
import { NicheData } from '../data/niches';

interface NicheCardProps {
  niche: NicheData;
  tagData: { tag: string; count: number }[];
}

const NicheCard: React.FC<NicheCardProps> = ({ niche, tagData }) => {
  const [showAllIdeas, setShowAllIdeas] = useState(false);
  const displayedIdeas = showAllIdeas ? niche.videoIdeas : niche.videoIdeas.slice(0, 3);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{niche.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{niche.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            Popular Themes
          </h4>
          <div className="flex flex-wrap gap-2">
            {niche.popularThemes.map((theme, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            Top Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {tagData.slice(0, 5).map((item, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              >
                {item.tag} ({item.count})
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            Video Ideas
          </h4>
          <ul className="space-y-3">
            {displayedIdeas.map((idea, index) => (
              <li key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p className="text-gray-900 dark:text-white font-medium mb-1">{idea.title}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {idea.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {idea.tags.length > 5 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      +{idea.tags.length - 5} more
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
          {niche.videoIdeas.length > 3 && (
            <button
              onClick={() => setShowAllIdeas(!showAllIdeas)}
              className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 focus:outline-none"
            >
              {showAllIdeas ? 'Show Less' : `Show All (${niche.videoIdeas.length})`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NicheCard;