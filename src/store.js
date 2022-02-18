import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { toggleThemeReducer } from './redux/reducers/themeReducer';
import { userSignupReducer, userSigninReducer } from './redux/reducers/userReducers';

const initialState = {
    userSignin : {
        userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
    },
    toggleTheme: {
        isDark: localStorage.getItem('isDark') 
        ? JSON.parse(localStorage.getItem('isDark'))
        : false
    }
};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    toggleTheme: toggleThemeReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;