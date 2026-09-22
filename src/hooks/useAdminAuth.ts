import { useState, useEffect } from 'react';

export interface AdminAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const ADMIN_AUTH_KEY = 'sss_admin_authenticated';
const ADMIN_SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

// Hardcoded credentials for development
const VALID_USER_ID = 'SuperAdmin';
const VALID_PASSWORD = 'sssitsaas';

export const useAdminAuth = () => {
  const [authState, setAuthState] = useState<AdminAuthState>({
    isAuthenticated: false,
    isLoading: true,
  });

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem(ADMIN_AUTH_KEY);
      if (stored) {
        try {
          const data = JSON.parse(stored);
          const isExpired = Date.now() - data.timestamp > ADMIN_SESSION_TIMEOUT;
          
          if (!isExpired) {
            setAuthState({
              isAuthenticated: true,
              isLoading: false,
            });
            return;
          } else {
            // Session expired
            localStorage.removeItem(ADMIN_AUTH_KEY);
          }
        } catch {
          localStorage.removeItem(ADMIN_AUTH_KEY);
        }
      }
      
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
      });
    };

    checkAuth();
  }, []);

  const login = (userId: string, password: string): boolean => {
    // Validate credentials
    if (userId === VALID_USER_ID && password === VALID_PASSWORD) {
      // Authentication successful
      const authData = {
        authenticated: true,
        timestamp: Date.now(),
      };
      localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(authData));
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    }
    // Authentication failed
    return false;
  };

  const logout = () => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
};
