import { SET_CURRENT_USER } from "../Reducers/root.reducer";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
