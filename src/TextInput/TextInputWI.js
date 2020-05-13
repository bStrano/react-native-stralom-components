
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from "react-native";
import Icon, {ICON_CLASS} from "../Icon";
import Dimensions from "../Constants/Dimensions";

const TextInputWI = props => {
    const styles = Styles(props);
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.inputContainer, styles.iconContainer]}>
                <Icon
                    class={props.iconClass}
                    name={props.iconName}
                    color={props.color}
                    size={props.iconSize}
                />
            </View>
            <TextInput
                {...props}
                value={props.value}
                placeholderTextColor={props.color}
                onChangeText={text => props.onChangeText(text)}
                style={[styles.inputContainer, styles.textContainer]}
            />
        </View>
    );
};

export default TextInputWI;

TextInputWI.propTypes = {
    height: PropTypes.height,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    iconClass: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.string,

    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
};

TextInputWI.defaultProps = {
    color: 'white',
    iconSize: 22,
    height: 60,
    iconClass: ICON_CLASS.MaterialIcons,
};

const Styles = props => {
    return StyleSheet.create({
        mainContainer: {
            height: props.height,
            flexDirection: 'row',
            margin: 8,
        },
        inputContainer: {
            backgroundColor: 'rgba(52,52,52,0.8)',
            opacity: 1,
            borderColor: 'grey',
            borderWidth: 1,
        },
        iconContainer: {
            width: 22 * 3,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            borderRightWidth: 1,
            alignItems: 'center',
        },
        textContainer: {
            width: Dimensions.width * 0.7,
            borderTopRightRadius: 10,
            padding: 10,
            color: 'white',
            borderBottomRightRadius: 10,
        },
    });
};
