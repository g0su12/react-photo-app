const { createSlice } = require('@reduxjs/toolkit');

const auth = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    signInSuccess(state, action) {
      state.token = action.payload.token;
    },
  },
});

const { reducer, action } = auth;
export const { signInSuccess } = action;
export default reducer;
