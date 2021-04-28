import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import PropTypes from 'prop-types';

export interface IDividerProps {
    style?: StyleProp<ViewStyle>
    width?: number | string;
}

const Divider = (props: IDividerProps) => {
    return <View style={[styles.separator, {width: props.width}, props.style]}/>
};
export default Divider;

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10
    },
});

Divider.propTypes = {
    style: PropTypes.object,
    width: PropTypes.string
};


Divider.defaultProps = {
    width: '100%',
};

