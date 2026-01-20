import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang:localStorage.getItem("language") || "tr",
    data: null,
    loading: false,
  },
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "tr" ? "en" : "tr";
    },
    setLanguageData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("language",state.lang)
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
       localStorage.setItem("language",state.lang)
    },
  },
});

export const { toggleLanguage, setLanguageData, setLoading } =
  languageSlice.actions;

export default languageSlice.reducer;
