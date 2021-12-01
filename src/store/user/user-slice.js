import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./utils";

const initialState = {
	email: "",
	username: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUsername(state, action) {
			state.username = action.payload.username;
		},
		setEmail(state, action) {
			state.email = action.payload.email;
		},
		login(state, action) {
			state.email = login(action.payload.email, action.payload.pass);
		},
		register(state, action) {
			state.email = register(action.payload.email, action.payload.pass);
		},
		signOut: (state) => initialState
	},
});
export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
