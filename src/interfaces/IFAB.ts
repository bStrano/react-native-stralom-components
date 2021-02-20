import IIcon from './IIcon';

interface IFAB{
  /**
   * Action that the FAB will perform
   */
  onPress: () => void,
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
    container?: object
  }
}

export default IFAB;
