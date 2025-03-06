// src/theme/Root.tsx
import React from 'react';
import DefaultRoot from '@theme-original/Root';
import ProgressBar from '../components/ProgressBar';

const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <DefaultRoot>{children}</DefaultRoot>
    </>
  );
};

export default Root;
