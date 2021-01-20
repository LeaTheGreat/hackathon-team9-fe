import Cookies from 'js-cookie'

export const initialState = {
    isAuthnticated: false,
    userId: Cookies.get('id') || null,
    role : Cookies.get('role') || null
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            Cookies.set('id', action.payload.id)
            Cookies.set('role', action.payload.role)
            return {
                ...state,
                isAuthnticated: true,
                userId: action.payload.id,
                role: action.payload.role
            };
        case 'LOGOUT':
            Cookies.remove('id');
            Cookies.remove('role');
            return {
                ...state,
                isAuthnticated: false,
                userId: null,
                role: null
            };
        default:
            return state;
    }
}