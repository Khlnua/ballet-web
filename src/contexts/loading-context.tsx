'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LoadingState {
  isLoading: boolean;
  loadingItems: Set<string>;
  errorItems: Set<string>;
}

interface LoadingContextType {
  loadingState: LoadingState;
  startLoading: (itemId: string) => void;
  stopLoading: (itemId: string) => void;
  setError: (itemId: string) => void;
  clearError: (itemId: string) => void;
  isItemLoading: (itemId: string) => boolean;
  hasItemError: (itemId: string) => boolean;
  isPageLoading: () => boolean;
  clearAllLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    loadingItems: new Set(),
    errorItems: new Set(),
  });

  // Auto-clear loading after 10 seconds to prevent infinite loading
  React.useEffect(() => {
    if (loadingState.isLoading) {
      const timeout = setTimeout(() => {
        console.log('Auto-clearing loading state after timeout');
        setLoadingState(prev => ({
          isLoading: false,
          loadingItems: new Set(),
          errorItems: prev.errorItems,
        }));
      }, 10000); // 10 second timeout

      return () => clearTimeout(timeout);
    }
  }, [loadingState.isLoading]);

  const startLoading = useCallback((itemId: string) => {
    setLoadingState(prev => ({
      isLoading: true,
      loadingItems: new Set([...prev.loadingItems, itemId]),
      errorItems: new Set([...prev.errorItems].filter(id => id !== itemId)),
    }));
  }, []);

  const stopLoading = useCallback((itemId: string) => {
    setLoadingState(prev => {
      const newLoadingItems = new Set(prev.loadingItems);
      newLoadingItems.delete(itemId);
      
      return {
        isLoading: newLoadingItems.size > 0,
        loadingItems: newLoadingItems,
        errorItems: prev.errorItems,
      };
    });
  }, []);

  const setError = useCallback((itemId: string) => {
    setLoadingState(prev => {
      const newLoadingItems = new Set(prev.loadingItems);
      newLoadingItems.delete(itemId);
      
      return {
        isLoading: newLoadingItems.size > 0,
        loadingItems: newLoadingItems,
        errorItems: new Set([...prev.errorItems, itemId]),
      };
    });
  }, []);

  const clearError = useCallback((itemId: string) => {
    setLoadingState(prev => ({
      ...prev,
      errorItems: new Set([...prev.errorItems].filter(id => id !== itemId)),
    }));
  }, []);

  const isItemLoading = useCallback((itemId: string) => {
    return loadingState.loadingItems.has(itemId);
  }, [loadingState.loadingItems]);

  const hasItemError = useCallback((itemId: string) => {
    return loadingState.errorItems.has(itemId);
  }, [loadingState.errorItems]);

  const isPageLoading = useCallback(() => {
    return loadingState.isLoading;
  }, [loadingState.isLoading]);

  const clearAllLoading = useCallback(() => {
    setLoadingState({
      isLoading: false,
      loadingItems: new Set(),
      errorItems: new Set(),
    });
  }, []);

  const value: LoadingContextType = {
    loadingState,
    startLoading,
    stopLoading,
    setError,
    clearError,
    isItemLoading,
    hasItemError,
    isPageLoading,
    clearAllLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
