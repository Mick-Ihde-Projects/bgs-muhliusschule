'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

const ThemeContext = createContext<{ theme: Theme }>({ theme: 'light' });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
