export function authReducer(state, { type, payload }) {
    switch (type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        // Другие типы действий, если необходимо

        case 'SET_SELECTED_USER_PROFILE_SECTION':
            return { ...state, userProfileSectionSelected: payload };

        default:
            return state;
    }
}
