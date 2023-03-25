import { createSlice } from "@reduxjs/toolkit";

interface IState {
  fibonacciValue: number | null;
  error: boolean;
}

const initialState: IState = {
  fibonacciValue: null,
  error: false,
};

export const fibonacci = createSlice({
  name: "fibonacci",
  initialState,
  reducers: {
    setFibonacciValue: (state, { payload }) => {
      state.fibonacciValue = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setFibonacciValue, setError } = fibonacci.actions;

export default fibonacci.reducer;
