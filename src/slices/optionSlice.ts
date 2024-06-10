import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionState {
  selectedOption: string;
}

const initialState: OptionState = {
  selectedOption: 'Option A',
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;
