import { configureStore } from '@reduxjs/toolkit';
import optionReducer from './slices/optionSlice';
import noteReducer from './slices/noteSlice';

export const store = configureStore({
  reducer: {
    option: optionReducer,
    note: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
