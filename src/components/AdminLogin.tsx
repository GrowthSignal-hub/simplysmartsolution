import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface AdminLoginProps {
  onLogin: (userId: string, password: string) => boolean;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate fields are not empty
    if (!userId.trim()) {
      setError('User ID is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate authentication delay
      setTimeout(() => {
        try {
          // Call onLogin with credentials - it will handle validation
          const success = onLogin(userId, password);
          
          if (!success) {
            // Authentication failed
            setError('Incorrect User ID or Password.');
            setPassword('');
            setUserId('');
          }
          // If success, App.tsx will handle navigation
        } catch (err) {
          setError('Unable to verify credentials. Please try again.');
          console.error('Login error:', err);
        } finally {
          setIsLoading(false);
        }
      }, 500);
    } catch (err) {
      setError('Unable to verify credentials. Please try again.');
      console.error('Login error:', err);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#1a3a5a] to-[#0B1F3A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <BrandLogo size="large" className="mb-4" alt="Simply Smart Solution - Admin Login" />
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Simply Smart <span className="text-[#1769E0]">Solution</span>
          </h1>
          <p className="text-slate-300 text-sm font-medium mt-2">Admin Control Center</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Admin Login</h2>
          <p className="text-slate-500 text-sm mb-6">Enter your credentials to access the control panel</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User ID Input */}
            <div>
              <label htmlFor="userId" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  setError('');
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading && userId && password) {
                    handleSubmit(e as any);
                  }
                }}
                placeholder="Enter User ID"
                disabled={isLoading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769E0] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading && userId && password) {
                    handleSubmit(e as any);
                  }
                }}
                placeholder="Enter password"
                disabled={isLoading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769E0] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <i className="fa-solid fa-exclamation-circle text-red-600 mt-0.5 text-sm flex-shrink-0"></i>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !userId.trim() || !password}
              className="w-full bg-[#1769E0] hover:bg-[#1354b8] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner text-sm animate-spin"></i>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-sign-in-alt text-sm"></i>
                  <span>Login to Admin Panel</span>
                </>
              )}
            </button>
          </form>

          {/* Info Footer */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              This admin panel is password-protected. Only authorized administrators can access the control center.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-xs">
          <p>© 2024 Simply Smart Solution. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
