"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark'; // Default to dark mode
  } catch {
    return 'dark';
  }
}

const DEFAULT_THEME: Theme = 'dark';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start from the server-rendered default. Reading localStorage during
  // the first render would make the client HTML disagree with the server HTML
  // (the Navbar renders a different icon per theme), which breaks hydration.
  // The blocking inline script in the root layout has already applied the
  // correct class before paint, so there is no flash of the wrong theme.
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const hasAdoptedStoredTheme = useRef(false);

  // Adopt the visitor's saved theme once mounted. The ref guard keeps the read
  // to a single occurrence even if effects are re-run (React StrictMode).
  useEffect(() => {
    if (hasAdoptedStoredTheme.current) return;
    hasAdoptedStoredTheme.current = true;

    const stored = getInitialTheme();
    if (stored !== DEFAULT_THEME) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}