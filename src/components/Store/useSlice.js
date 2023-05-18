import userApi from '~/apiServices/userApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/tookit');
export const getMe = createAsyncThunk('user/getMe', async (params, thunkAPI) => {
    // ThunkAPI.dispatch(...)
    const currentUser = await userApi.getME();
    return currentUser;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
