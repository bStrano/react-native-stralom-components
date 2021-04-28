import React, {useState} from 'react';

export default interface ILocale {
  commons: ILocaleCommons;
}


export  interface ILocaleCommons {
  common: object;
  validation: object;
  glossary: object;
}

interface ILocaleProvider

export const ThemeContext = React.createContext([])
function LocaleProvider(props:ILocaleProvider) {
  const [theme, setTheme] = useState(props.initialTheme)

  // @ts-ignore
  return (
    <ThemeContext.Provider value={{...theme}}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default LocaleProvider;
