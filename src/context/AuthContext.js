import { createContext, useContext, useReducer } from 'react';
import { initialState, userReducer } from '../reducers/userReducer';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [auth, dispatch] = useReducer(userReducer, initialState);

    const value = {
        auth,
        dispatch
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}