import React, {createContext, useState} from 'react';

const LanguageContext = createContext();

export function LanguageProvider({children}) {
  const [lang, setLang] = useState(['tr']);

  const values = {
    lang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
