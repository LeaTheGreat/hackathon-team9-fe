import Cookies from 'js-cookie'

export const initialState = {
    isAuthnticated: false,
    userId: Cookies.get('uid') || null 
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            Cookies.set('uid', action.payload.uid)
            return {
                ...state,
                isAuthnticated: true,
                userId: action.payload.uid
            };
        case 'LOGOUT':
            Cookies.remove('uid');
            return {
                ...state,
                isAuthnticated: false,
                userId: null
            };
        default:
            return state;
    }
}