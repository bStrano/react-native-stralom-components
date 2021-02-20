import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from "./Icon";
import IFAB from '../interfaces/IFAB';


const FAB = ({
  backgroundColor = "blue",
  icon = {name: 'plus', class: "MaterialCommunityIcons", color: 'white'},
  onPress,
  style,
  ...props
             }: IFAB) => {
  const styles = styleSheet({backgroundColor});
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, style?.container]}>
      <Icon
        size={26}
        {...icon}
      />
    </TouchableOpacity>
  )
}

const styleSheet = (props: IFAB) => StyleSheet.create({
  container: {
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
  }
})


export default FAB;

FAB.propTypes = {
    onPress: PropTypes.func,
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
