import React, {useCallback, useRef, useState, forwardRef, useImperativeHandle, Ref} from "react";
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import FAB from './FAB';
import IIcon from '../../interfaces/IIcon';
import IFAB from '../../interfaces/IFAB';
import {useTheme} from '../../../index';


interface IFABAction {
  /**
   * Label with the name of the action that will be shown under the FAB
   */
  label?: string
  /**
   * Icon of the FAB
   */
  icon: IIcon,
  /**
   * Background color of the FAB
   */
  color: string
  /**
   * Callback that will be execute on press
   */
  onPress: () => void
  /**
   * Position
   */
  position: {bottom: number, left: number}
}

export interface IFABGroupProps{
  mode: "circular-180" | 'line-vertical'
  actions: IFABAction[],
  fab: IFAB,
  customOnPress?: () => void,
  extraOnActionPress?: () => void,
  onClose?: () => void,
}

export interface FABGroupRef {
  toggleGroup: () => void
}

function FABGroup(props: IFABGroupProps, ref:Ref<FABGroupRef> ){
  const theme = useTheme();
  const [active,setActive] = useState(false);
  const [visible,setVisible] = useState(false)
  const styles = styleSheet({theme})

  useImperativeHandle(ref, () => ({
      toggleGroup: () => {
        toggleGroup()
      }
  }))

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startToggleGroupAnim = ((value:number) => {
    setVisible(true)
    Animated.timing(rotateAnim, {
      toValue: value,
      duration: 400,
      useNativeDriver: true
    }).start(() => {
      if(active){
        setVisible(false)
        if(props.onClose) props.onClose();
      }
    })
  })

  const spin = rotateAnim.interpolate({
    inputRange: [0,45],
    outputRange: ['0deg', '45deg']
  })

  const toggleGroup = useCallback(() => {
    startToggleGroupAnim(!active ? 45 : 0)
    setActive(!active)
  },[active])


  const onPress = useCallback( () => {
    if(props.customOnPress){
      props.customOnPress()
    } else {
      toggleGroup();
    }
  },[ toggleGroup, props.customOnPress]);


  const fabSize = props.fab.size ? props.fab.size : 56;

  const renderFABGroup = useCallback(() => {
    return (
      <View style={{flex: 1}}>
        {
          props.actions.map( (item,index) => {
            if(!visible) return  null;
            return (
              <FAB
                style={
                  {
                    label: styles.label,
                    container: {
                      zIndex: 1
                    }}}
                size={54}
                toggled={active}
                position={{bottom: -fabSize/2, left: -fabSize/2}}
                animPositions={{left: item.position.left - fabSize/2, bottom: item.position.bottom + fabSize/2}}
                onPress={() => {
                  setActive(false)
                  item.onPress();
                  if(props.extraOnActionPress) props.extraOnActionPress()
                }}
                key={index} backgroundColor={item.color} icon={item.icon} label={item.label}/>
            )
          })

        }
      </View>
    )
  },[props.actions,visible])
  return (
    <View style={{flex: 1}}>
      {/*{*/}
      {/*  visible &&*/}
      {/*  <Pressable onPressIn={onPress} style={styles.blurContainer}/>*/}
      {/*}*/}
      <FAB    onPress={onPress}
        style={{container: {zIndex: 2}, fabContainer:  {transform: [{rotate: spin}]}}}
              {...props.fab}
      />
      {renderFABGroup()}
    </View>
  )
}

const styleSheet = (props: any) => StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    flex: 1,
    left: -(Dimensions.get('window').width/2-25),
    backgroundColor: '#000000b3',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  label: {
    fontSize: 13,
    fontFamily:  props.theme.fontFamily.regular
  }
})

export default forwardRef(FABGroup);
