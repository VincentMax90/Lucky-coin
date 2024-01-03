import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const logoutUser = createAction("LOGOUT_USER")

export const userInitialState = {
  nameAndLastname: null,
  email: null,
  operator: null,
};
const reducerUser = createReducer(userInitialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    return { ...state, ...action.payload };
  });

  builder.addCase(logoutUser, (state) => {
    return { ...userInitialState };
  });
});
export default reducerUser;
