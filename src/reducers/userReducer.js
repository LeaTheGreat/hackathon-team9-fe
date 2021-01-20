import Cookies from 'js-cookie'

export const initialState = {
    isAuthnticated: false,
    userId: Cookies.get('id') || null
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            Cookies.set('id', action.payload.id)
            return {
                ...state,
                isAuthnticated: true,
                userId: action.payload.id
            };
        case 'LOGOUT':
            Cookies.remove('id');
            return {
                ...state,
                isAuthnticated: false,
                userId: null
            };
        default:
            return state;
    }
}