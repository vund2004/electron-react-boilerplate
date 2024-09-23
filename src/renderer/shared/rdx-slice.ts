import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IMainState } from './types';

const initialState: IMainState = {
  value: 0,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = mainSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default mainSlice.reducer;
