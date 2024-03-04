import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    messageAlert: {
        message: [],
        info: '',
        isShowAlert: false,
        messageId: '',
        type: 'success',
    },
    userInfo: {},
};

const commonSlice = createSlice({
    name: 'commonReducers',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setMessageAlert: (state, action) => {
            state.messageAlert = {
                ...state.messageAlert,
                ...action.payload,
            };
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

export const { setLoading, setMessageAlert, setUserInfo } = commonSlice.actions;

export default commonSlice.reducer;
