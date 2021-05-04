import {View, Text, StyleSheet, TextProps, ViewProps} from 'react-native';
import React, {useCallback} from 'react';
import Icon from "../Icon";

import IIcon from '../../interfaces/IIcon';

export interface IHeaderProps {
  iconLeft?: IIcon
  actionButtons?: IIcon[]
  fontColor: string
  fontFamily: string
  title: string
  backgroundColor: string
  styles?: {
    title?: TextProps,
    container?: ViewProps,
    titleContainer?: ViewProps,
    navigationContainer?: ViewProps,
  }
}

function Header(props: IHeaderProps) {

  const renderNavigationContent = useCallback( () => {
    if (props.iconLeft) {
      return (
        <Icon
          size={20}
          container={{style: {marginLeft:  10} }}
          color={props.fontColor}
          {...props.iconLeft}
        />
      );
    }
  }, [props.iconLeft,props.fontColor])

  const renderAdditionalButtons = useCallback( () => {
    if(!props.actionButtons) return null;
    return props.actionButtons.map( item => {
      return (
        <Icon
          container={{ style: {marginLeft: 10}}}
          color={props.fontColor}
          {...item}
        />
      );
    });
  }, [props.actionButtons, props.fontColor])


  const renderTitleContent = useCallback( () => {
    return (
      <Text
        style={[
          styles.title,
          {
            fontFamily: props.fontFamily,
            color: props.fontColor,
          },
          props.styles?.title,
        ]}>
        {props.title}
      </Text>
    );
  },[props.title,props.styles?.title,props.fontColor,props.fontFamily])

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: props.backgroundColor},
        props.styles?.container,
      ]}>
      <View style={props.styles?.navigationContainer}>
        {renderNavigationContent()}
      </View>
      <View style={[{flex: 1}, props.styles?.titleContainer]}>{renderTitleContent()}</View>
      {renderAdditionalButtons()}
    </View>
  );
}

export default Header;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        backgroundColor: 'red',
        elevation: 2,
    },
    navigationContainer: {
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        paddingHorizontal: 10
    },
});

Header.defaultProps = {
    backgroundColor: 'white',
    fontColor: 'black',
};
