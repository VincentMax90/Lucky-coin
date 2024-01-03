import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const userInitialState = {
  nameAndLastname: null,
  email: null,
  operador: null,
};

const reducerUser = createReducer(userInitialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default reducerUser;
