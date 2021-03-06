import React, {useEffect, useRef, useState} from 'react';
import {Modal, Pressable, View} from 'react-native';
import FABGroup, {FABGroupRef, IFABGroupProps} from './FABGroup';

interface IFabGroupModalProps extends IFABGroupProps{

}

function FabGroupModal(props: IFabGroupModalProps) {
  const [active,setActive] = useState(false);
  const mainFabRef = useRef<FABGroupRef>();

  useEffect( () => {
    if(active){
      mainFabRef?.current?.toggleGroup()
    }
  }, [active])

  return (
    <View style={{flex: 1}}>
      <FABGroup {...props} customOnPress={ () => setActive(true)} />
      <Modal transparent={true} visible={active}  animationType={'fade'} style={{backgroundColor: 'black'}}>
        <Pressable onPress={mainFabRef.current?.toggleGroup} style={{flex: 1,backgroundColor: '#000000b3'}}>
          <View style={{flex: 1,bottom: 0, left: 180}}>

            <FABGroup {...props} ref={mainFabRef} onClose={() => setActive(false)}/>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

export default FabGroupModal;
