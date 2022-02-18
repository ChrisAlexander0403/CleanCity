import { TOGGLE_THEME } from '../constants/themeConstants';

export const toggle = (data) => async (dispatch) => {
    dispatch({ type: TOGGLE_THEME, payload: !data });
    localStorage.setItem("isDark", JSON.stringify(!data));
}