import React, {useState} from 'react';
import {Platform, StyleProp, TextStyle} from "react-native";


export interface IPallet{
    light?: string,
    main: string,
    dark?: string,
    textColor?: string
}

export interface IFontFamily{
    regular: string,
    medium:  string,
    thin:    string,
    light:   string,
    bold:    string,
}



export interface ITypography {
    title:    StyleProp<TextStyle>,
    subtitle: StyleProp<TextStyle>,
    regular:  StyleProp<TextStyle>,
    caption:  StyleProp<TextStyle>
}

export interface ITheme{
    primary: IPallet,
    secondary: IPallet,
    error: IPallet,
    warning: IPallet,
    info: IPallet,
    success: IPallet,
    background: string,
    surface: string,
    border: string,
    fontFamily: IFontFamily,
    typography: ITypography
}

export interface IThemeProviderProps{
    initialTheme: ITheme,
    children: React.Component
}



const initial = {
    primary: {
        light: '#a6d4fa',
        main: '#90caf9',
        dark: '#648dae',
        textColor: '#000'
    },
    secondary:{
        light: '#f6a5c0',
        main: '#f48fb1',
        dark: '#aa647b',
        textColor: '#000'
    },
    error:{
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        textColor: '#fff'
    },
    warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        textColor: '#fff'
    },
    info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        textColor: '#fff'
    },
    success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        textColor: '#fff'
    },
    background:'#dcdcdc',
    surface:  '#fff',
    border: 'black',
    fontFamily: {
        regular: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
        medium: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
        thin: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
        light: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
        bold: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
    },
}

const initialTheme = {
    ...initial,
    typography: {
        title: {
            fontFamily: initial.fontFamily.bold,
            fontSize: 18,
        },
        subtitle: {
            fontFamily: initial.fontFamily.medium,
            fontSize: 12
        },
        regular: {
            fontFamily: initial.fontFamily.regular,
            fontSize: 14
        },
        caption: {
            fontFamily: initial.fontFamily.thin,
            fontSize: 12
        }
    }
}



export const ThemeContext = React.createContext(initialTheme)
function ThemeProvider(props:IThemeProviderProps) {
    const [theme, setTheme] = useState(props.initialTheme)

    // @ts-ignore
    return (
        <ThemeContext.Provider value={{...theme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
function createTheme(theme: ITheme){

}
export default ThemeProvider;
