import { TOGGLE_THEME } from "../constants/themeConstants";

export const toggleThemeReducer = (state, action) => {
    switch(action.type){
        case TOGGLE_THEME:
            return { isDark: action.payload };
        default: 
            return state;
    }
}