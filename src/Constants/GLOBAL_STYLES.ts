import {StyleSheet} from "react-native";
import SHADOW from "./SHADOW";
import {ITheme} from '../providers/ThemeProvider'
import styled from "styled-components/native";

export interface IGlobalStyles {
    containerCentered: object,
    card: object
}




const card = (theme :ITheme) => {
    return {
    borderRadius: 8,
    ...SHADOW['5'],
        padding: 8,
    backgroundColor: theme.background
}}

const globalStyles = (theme: ITheme) => StyleSheet.create({
    containerCentered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    card: card(theme)
})

export default globalStyles
