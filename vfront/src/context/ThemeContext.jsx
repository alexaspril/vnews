import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);

    const applyTheme = (theme) => {
      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.className = systemPrefersDark ? 'light' : 'dark';
      } else {
        root.className = theme;
      }
    };

    applyTheme(savedTheme);

    // Listener for system theme changes
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        root.className = e.matches ? 'dark' : 'light';
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  const toggleTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);

    const root = document.documentElement;
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.className = systemPrefersDark ? 'dark' : 'light';
    } else {
      root.className = newTheme;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
