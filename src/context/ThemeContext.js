import React, {createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export function ThemeProvider({children}) {


  const [theme, setTheme] = React.useState();

  const values = {
    theme,
    setTheme,
  };

  AsyncStorage.setItem('thememode', theme);
  // console.log(AsyncStorage.getItem('thememode'));

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
