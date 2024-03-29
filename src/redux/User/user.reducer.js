const INITIAL_STATE = { currentUser: null };
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                currentUser: action.payload
            };
    
        default:
            return state;
    }
};

export default userReducer;