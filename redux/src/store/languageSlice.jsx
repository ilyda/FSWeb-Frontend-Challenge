import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "tr",
    data: null,
    loading: false,
  },
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "tr" ? "en" : "tr";
    },
    setLanguageData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguageData, setLoading } =
  languageSlice.actions;

export default languageSlice.reducer;
