import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from "./Icon";


const FAB = props => (
    <TouchableOpacity
        style={{
            height: 56,
            width: 56,
            backgroundColor: props.backgroundColor,
            position: 'absolute',
            borderRadius: 56,
            bottom: 26,
            right: 26,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4,
        }}>
        <Icon
            color={props.iconColor}
            size={26}
            class={props.iconClass}
            name={props.iconName}
        />
    </TouchableOpacity>
);

export default FAB;

FAB.propTypes = {
    backgroundColor: PropTypes.string,
    iconClass: PropTypes.string,
    iconColor: PropTypes.string,
    iconName: PropTypes.string,
};

FAB.defaultProps = {
    backgroundColor: 'blue',
    iconClass: 'MaterialCommunityIcons',
    iconColor: 'white',
    iconName: 'plus',
};
