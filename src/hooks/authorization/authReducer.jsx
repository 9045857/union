export function authReducer(state, { type, payload }) {
    switch (type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        // Другие типы действий, если необходимо
        default:
            return state;
    }
}
