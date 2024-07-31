import { createSlice } from "@reduxjs/toolkit";
import { APPLICATION_MODEL } from "../../constants";

const initialState = {
	application: APPLICATION_MODEL,
	canEdit: true,
	isLoading: false,
};

const applicationSlice = createSlice({
	name: "application",
	initialState,
	reducers: {
		setApplication(state, action) {
			state.application = action.payload;
		},
		setCanEdit(state, action) {
			state.canEdit = action.payload;
		},
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
		addSection(state, action) {
			const { field, model } = action.payload;
			if (state.application[field].length < 10) {
				state.application[field].push(model);
			}
		},
		removeSection(state, action) {
			const { field, index } = action.payload;
			const arr = state.application[field];
			if (index >= 0 && index < arr.length) {
				state.application[field] = [
					...arr.slice(0, index),
					...arr.slice(index + 1),
				];
			}
		},
		updateSection(state, action) {
			const { field, index, key, value } = action.payload;
			state.application[field] = state.application[field].map(
				(obj, idx) => (idx === index ? { ...obj, [key]: value } : obj)
			);
		},
	},
});

export const {
	setApplication,
	setCanEdit,
	setIsLoading,
	addSection,
	removeSection,
	updateSection,
} = applicationSlice.actions;

export const getApplication = (state) => state.application.application;
export const getCanEdit = (state) => state.application.canEdit;
export const getIsLoading = (state) => state.application.isLoading;

export default applicationSlice.reducer;
