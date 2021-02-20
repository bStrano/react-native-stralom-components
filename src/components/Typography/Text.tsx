import React, {useMemo} from "react";
import {StyleSheet, Text as ReactText, TextProps} from 'react-native'
import useTheme from "../../hooks/useTheme";

interface ITextProps extends TextProps{
    variant: "title" | "subtitle" | "regular" | "caption",
    children: any
}

function Text({variant,children,...props} :ITextProps) {
    const theme = useTheme()

    const style = useMemo(() => {
        switch (variant) {
            case 'title':
                return theme.typography.title
            case 'subtitle':
                return theme.typography.subtitle
            case 'regular':
                return theme.typography.regular
            case 'caption':
                return theme.typography.caption
            default:
                return theme.typography.title
        }
    }, [theme.typography,variant])
    return (
        <ReactText style={style} {...props}>{children}</ReactText>
    )
}

const styles = StyleSheet.create({
    title: {

    },

})

export default Text;
