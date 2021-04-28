import React, {useMemo, useRef} from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import SHADOW from '../../Constants/SHADOW';
import Text from '../Typography/Text';


interface IButtonRoundedProps extends PressableProps {
  /**
   * Background color
   */
  color: string;
  /**
   * Label font color
   */
  fontColor: string;
  /**
   * Text shown in button
   */
  label: string;
  /**
   * Custom styles
   */
  stylesheet?: {
    container?: object;
    label?: object;
  };
  /**
   * Button type.
   * Outline will reverse color and fontColor
   */
  mode?: 'normal' | 'outline';
}

function ButtonRounded({mode = 'outline', ...props}: IButtonRoundedProps) {
  const styles = useMemo(() => {
    return styleSheet({
      color: props.color,
      fontColor: props.fontColor,
      mode: mode,
    });
  }, [props.color, props.fontColor, mode]);


  return (
    <Pressable
      style={[styles.container, props.stylesheet?.container]}
      android_ripple={{color: props.color}}
      android_disableSound={false}
      {...props}
    >
      <Text variant={'title'} numberOfLines={1} adjustsFontSizeToFit={true}  style={[styles.label, props.stylesheet?.label]}>
        {props.label}
      </Text>
    </Pressable>
  );
}

const styleSheet = ({color, fontColor, mode}: any) =>
  StyleSheet.create({
    container: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: mode === 'outline' ? fontColor : color,
      borderColor: mode === 'outline' ? color : undefined,
      borderWidth: mode === 'outline' ? 1 : 0,
      paddingVertical: 10,
      borderRadius: 25,
      ...SHADOW['2'],
    },
    label: {
      color: mode === 'outline' ? color : fontColor,
      paddingHorizontal: 30,
      paddingVertical: 5,
    },
  });

export default ButtonRounded;
