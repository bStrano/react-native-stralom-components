import React, {useState} from 'react';
import {Platform, StyleProp, TextStyle} from "react-native";


export interface IPalletItem{
    color: string,
    font: string
}

export interface IPallet{
    light: IPalletItem,
    main: IPalletItem,
    dark: IPalletItem,
    textColor: string
}

export interface IFontFamily{
    regular: string,
    medium:  string,
    thin:    string,
    light:   string,
    bold:    string,
    semiBold: string
}



export interface ITypography {
    title:    StyleProp<TextStyle>,
    subtitle: StyleProp<TextStyle>,
    medium: StyleProp<TextStyle>,
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
    children: React.ReactNode
}



const initial = {
    primary: {
        light: {
            color: '#a6d4fa',
            font: "#000"
        },
        main: {
            color: '#90caf9',
            font: "#000"
        },
        dark: {
            color: '#648dae',
            font: "#fff"
        },
        textColor: '#000'
    },
    secondary:{
        light: {
            color: '#f6a5c0',
            font: '#000'
        },
        main: {
            color: '#f48fb1',
            font: '#000'
        },
        dark: {
            color: '#aa647b',
            font: '#000'
        },
        textColor: '#000'
    },
    error:{
        light: {
            color: '#e57373',
            font: '#fff'
        },
        main: {
            color: '#f44336',
            font: '#fff'
        },
        dark: {
            color: '#d32f2f',
            font: '#fff'
        },
        textColor: '#fff'
    },
    warning: {
        light: {
            color: '#ffb74d',
            font: '#fff'
        },
        main: {
            color: '#ff9800',
            font: '#fff'
        },
        dark: {
            color: '#f57c00',
            font: '#fff'
        },
        textColor: '#fff'
    },
    info: {
        light: {
            color: '#64b5f6',
            font: '#fff'
        },
        main: {
            color: '#2196f3',
            font: '#fff'
        },
        dark: {
            color: '#1976d2',
            font: '#fff'
        },
        textColor: '#fff'
    },
    success: {
        light: {
            color: '#81c784',
            font: '#fff'
        },
        main: {
            color: '#4caf50',
            font: '#fff'
        },
        dark: {
            color: '#388e3c',
            font: '#fff'
        },
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
        semiBold: Platform.OS === 'ios' ? "San Francisco" : "Roboto",
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
            fontFamily: initial.fontFamily.semiBold,
            fontSize: 12
        },
        medium: {
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
