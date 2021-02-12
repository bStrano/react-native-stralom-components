import useTheme from "./useTheme";
import {ITheme} from "../providers/ThemeProvider";
import StyleConstant, {IGlobalStyles} from "../Constants/GLOBAL_STYLES";

function useGlobalStyles() {
    const theme: ITheme = useTheme()
    return <IGlobalStyles> StyleConstant(theme)
}

export default useGlobalStyles;
