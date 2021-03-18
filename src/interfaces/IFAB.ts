import IIcon from './IIcon';

interface IFAB{
  /**
   * Action that the FAB will perform
   */
  onPress?: () => void,
  /**
   * Background color of the FAB
   */
  backgroundColor?: string,
  /**
   * Icon of the FAB
   */
  icon?: IIcon,
  /**
   * Custom styles
   */
  style?: {
    container?: object,
    fabContainer?: object,
    label?: object
  }
  /**
   * FAB size
   */
  size?: number
  /**
   * Action name, will be shown above the FAB
   */
  label?: string,
  position?: {bottom: number, left?: number, right: number, top?: number}
  /**
   * Specifies the initial and final position for the fab movement animation
   */
  animPositions?: {left: number, bottom: number }
  toggled?: boolean
}

export default IFAB;
