import PropTypes from 'prop-types';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icon from '../Icon';
import IFAB from '../../interfaces/IFAB';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);



const FAB = ({
               backgroundColor = "blue",
               icon = {name: 'plus', class: "MaterialCommunityIcons", color: 'white'},
               onPress,
               size  = 56,
               style,
               label,
                position=  {bottom: 28, left: 28},
               animPositions,
              toggled,
             }: IFAB) => {
  const styles = styleSheet({backgroundColor,label,size})
  const didMountRef = useRef<boolean>(false);
  const positionBottomAnim = useRef(new Animated.Value(position.bottom)).current
  const positionLeftAnim = useRef(new Animated.Value(position.left)).current
  const startPositionAnimation = () => {
    if(animPositions){
      Animated.parallel([
        Animated.timing(positionBottomAnim, {
          toValue: !toggled ? position.bottom : animPositions.bottom,
          duration: 400,
          useNativeDriver: false
        }),
        Animated.timing(positionLeftAnim, {
          toValue: !toggled ? position.left : animPositions.left,
          duration: 400,
          useNativeDriver: false
        })
      ]).start()
    }
  }

    useEffect( () => {
        if(didMountRef){
          startPositionAnimation();
        } else {
          if(didMountRef.current){
            didMountRef.current = true;
          }
        }
    }, [toggled]);
    return (
    <Animated.View style={[styles.container, style?.container,{position:'absolute',bottom: positionBottomAnim, left:positionLeftAnim}]}>
      <AnimatedPressable
        onPress={onPress}
        style={[styles.fabContainer,style?.fabContainer]}>
        <Icon
          size={24}
          {...icon}
        />
      </AnimatedPressable>
      {
        label && toggled &&
        <Text style={[styles.label,style?.label]} numberOfLines={1}>{label}</Text>
      }

    </Animated.View>
  )
}

const styleSheet = (props: any) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: props.label ? props.size*2 : props.size
  },
  fabContainer: {
    height: props.size,
    width: props.size,
    backgroundColor: props.backgroundColor,
    borderRadius: props.size,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  label: {alignSelf: 'center', flex: 1, fontSize: 16, paddingVertical: 10, color: 'white'}
})



  export default FAB;
