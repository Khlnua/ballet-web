'use client';

import React, { useState, useEffect } from 'react';
import { useLoading } from '@/contexts/loading-context';
import LoadingSpinner from './loading-spinner';

interface PageLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  children, 
  fallback 
}) => {
  const { isPageLoading } = useLoading();
  const [showLoader, setShowLoader] = useState(false);

  // Only show loader for a maximum of 3 seconds
  useEffect(() => {
    if (isPageLoading()) {
      setShowLoader(true);
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 3000); // Maximum 3 seconds loading screen

      return () => clearTimeout(timeout);
    } else {
      setShowLoader(false);
    }
  }, [isPageLoading]);

  const defaultFallback = (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" color="gold" />
        <p className="text-gold mt-4 text-lg font-medium">
          Loading Mongolian Dance Experience...
        </p>
        <div className="mt-2 text-gold/70 text-sm">
          Preparing cultural treasures for you
        </div>
      </div>
    </div>
  );

  if (showLoader && isPageLoading()) {
    return fallback || defaultFallback;
  }

  return <>{children}</>;
};

export default PageLoader;
