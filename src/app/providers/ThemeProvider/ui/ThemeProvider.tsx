import {
  FC, ReactElement, ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ProviderProps {
  children?: ReactElement | ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultOptions = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultOptions}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
