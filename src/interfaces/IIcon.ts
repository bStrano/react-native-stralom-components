import {GestureResponderEvent} from 'react-native';

interface IIcon {
  name: string,
  class: string,
  size?: number,
  color?: string,
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined,
  container?: object
}

export default IIcon;
