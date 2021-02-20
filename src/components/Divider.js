import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';


const Divider = (props) => {
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

