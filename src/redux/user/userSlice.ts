import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { DecisionCenter, Gender, IState } from './user.types';

const initialState: IState = {
  gender: null,
  birthday: null,
  email: null,
  details: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBirthday: (state, action: PayloadAction<string>) => {
      state.birthday = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setRelationshipStatus: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === 'single') {
        state.details.relationshipStatus = 'single';
      } else {
        state.details.relationshipStatus = 'in_relationship';
      }
    },
    setParentStatus: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Yes') state.details.children = true;
      else if (action.payload === 'No') state.details.children = false;
    },
    setUsersFeel: (state, action: PayloadAction<string>) => {
      state.details.feel = action.payload;
    },
    setDecisionCenter: (state, action: PayloadAction<string>) => {
      state.details.decision_center =
        action.payload.toLowerCase() as DecisionCenter;
    },
  },
});

export const {
  setBirthday,
  setGender,
  setEmail,
  setRelationshipStatus,
  setParentStatus,
  setUsersFeel,
  setDecisionCenter,
} = userSlice.actions;

export default userSlice.reducer;
