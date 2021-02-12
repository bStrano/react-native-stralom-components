import {useContext} from "react";
import {ITheme, ThemeContext} from "../providers/ThemeProvider";

function useTheme(){
    return <ITheme> useContext(ThemeContext);
}

export default useTheme;
