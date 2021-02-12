import {Pressable, PressableProps, StyleSheet} from "react-native";
import React from "react";
import useTheme from "../hooks/useTheme";
import styled from 'styled-components/native'
import Text from "../Typography/Text";

interface ButtonWBProps extends PressableProps{
    /**
     * Background color of the container. If null will use the primary from ThemeProvider
     */
    backgroundColor?: string
    /**
     * Text of the button
     */
    label: string
}




function ButtonWB({backgroundColor,label,...props}:ButtonWBProps) {
    const theme = useTheme();
    const styles = styleSheet({theme,backgroundColor})
    console.log(backgroundColor)
    return (
        <Pressable
            style={styles.container}
            onPress={props.onPress}
            {...props}>
            <Text variant={"title"}>{label}</Text>
        </Pressable>
    )
}


const styleSheet = ({theme,backgroundColor}:any)  => StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor ? backgroundColor : theme?.primary.main,
            borderRadius: 10,
            padding: 10,
            marginVertical: 15,
            marginHorizontal: '10%',
        }
})

export default ButtonWB;
