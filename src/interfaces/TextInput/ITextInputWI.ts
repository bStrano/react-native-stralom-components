import IIcon from '../IIcon';
import {TextInputProps} from 'react-native';

export interface ITextInputWI extends TextInputProps{
  /**
   * Icon that will be rendered before the TextInput
   */
  icon?: IIcon,
  /**
   * The string that will be rendered on top of the input
   */
  label?: string,
  /**
   * The string that will be rendered before text input has been entered
   */
  value: string,
  /**
   * The height of the TextInput
   */
  height?: number,
  /**
   The width of the TextInput
   */
  width?: number,
  /**
   * The border color of the input
   */
  borderColor?: string,
  /**
   * The background color of the input
   */
  backgroundColor?: string,
  /**
   * Customize the individual parts of the component
   */
  styles?: {
    textInput?: object,
    container?: object,
    label?: object
  }
  /**
   * Defines if the input will be a password.
   * Password inputs will have an icon for toggle the secureTextEntry.
   */
  isPassword?: boolean
  /**
   * Defines the color of the icon that toggles the password secureTextEntry
   */
  iconPasswordColor?: string
}

export default ITextInputWI
