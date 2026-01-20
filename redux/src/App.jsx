import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLanguageData, setLoading } from "./store/languageSlice";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("https://696e1402d7bacd2dd715a89f.mockapi.io/setting/settings")
      .then((res) => {
        dispatch(setLanguageData(res.data[0]));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);




  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
