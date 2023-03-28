import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Gender, IState } from './user.types';

const initialState: IState = {
  gender: null,
  birthday: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBirthday: (state, action: PayloadAction<Date>) => {
      state.birthday = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setBirthday, setGender, setEmail } = userSlice.actions;

export default userSlice.reducer;
