import { TOGGLE_THEME } from '../constants/themeConstants';

export const toggle = (isDark) => async (dispatch) => {
    dispatch({ type: TOGGLE_THEME, payload: !isDark });
}