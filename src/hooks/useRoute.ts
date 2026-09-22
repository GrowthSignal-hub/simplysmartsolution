import { useState, useEffect } from 'react';

export type Route = 'home' | 'admin';

export const useRoute = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      
      if (hash === '#/admin' || hash === '#admin') {
        setCurrentRoute('admin');
      } else {
        setCurrentRoute('home');
      }
    };

    // Check initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: Route) => {
    if (route === 'admin') {
      window.location.hash = '#/admin';
    } else {
      window.location.hash = '#/';
    }
  };

  return {
    currentRoute,
    navigateTo,
  };
};
