// //src/components/ProgressBar.tsx
// src/components/ProgressBar.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import sidebars from '../../sidebars'; // Adjust the import path if necessary
import './ProgressBar.css';

// Recursive function to extract all doc IDs from sidebar config
const extractDocIds = (items: any[]): string[] => {
  return items.flatMap(item => {
    if (item.type === 'doc') {
      return item.id; // Return doc ID
    } else if (item.type === 'category' && item.items) {
      return extractDocIds(item.items); // Recurse into categories
    }
    return [];
  });
};

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [visitedItems, setVisitedItems] = useState<Set<string>>(new Set());
  const location = useLocation();

  // Extract doc pages from sidebar
  const docPages = extractDocIds(Array.isArray(sidebars.tutorialSidebar) ? sidebars.tutorialSidebar : []);
  const totalItems = docPages.length;

  useEffect(() => {
    const currentPath = location.pathname;

    setVisitedItems(prevVisited => {
      const newVisited = new Set(prevVisited);
      newVisited.add(currentPath);

      // Count visited doc pages
      const visitedCount = docPages.filter(id => newVisited.has(`/docs/${id}`)).length;
      const calculatedProgress = totalItems > 0 ? (visitedCount / totalItems) * 100 : 0;

      setProgress(Math.min(calculatedProgress, 100)); // Cap at 100%
      return newVisited;
    });
  }, [location.pathname, totalItems]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;



