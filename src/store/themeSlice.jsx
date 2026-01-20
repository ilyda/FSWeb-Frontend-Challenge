import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: localStorage.getItem("dark") || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
      localStorage.setItem("dark",true)
    },
    setDark: (state, action) => {
      state.dark = action.payload;
      localStorage.setItem("dark",true)
    },
  },
});

export const { toggleTheme, setDark } = themeSlice.actions;
export default themeSlice.reducer;
