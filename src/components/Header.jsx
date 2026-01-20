import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useLanguage } from "../hooks/useLanguage";

const Header = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  const { lang, toggleLanguage } = useLanguage();

  const navTexts = {
    tr: { skills: "Yetenekler", projects: "Projeler", hireMe: "Benimle Çalış" },
    en: { skills: "Skills", projects: "Projects", hireMe: "Hire me" },
  };

  return (
    <header className="w-full px-6 py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-end">
        <div className="flex flex-col items-end gap-6">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-wide">
           
            <label className="flex items-center gap-3 cursor-pointer text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => dispatch(toggleTheme())}
                className="sr-only peer"
              />
              <div className="relative h-7 w-14 rounded-full bg-slate-300 transition peer-checked:bg-indigo-500">
                <span
                  className="absolute left-1 top-1 h-5 w-5 rounded-full bg-yellow-300
                       transition-transform duration-300
                       peer-checked:translate-x-7"
                />
              </div>

              <span>{lang === "tr" ? "KARANLIK MOD" : "DARK MODE"}</span>
            </label>
            <span className="text-slate-300">|</span>
              <button className="text-indigo-600 hover:underline underline-offset-4"  onClick={toggleLanguage}>
           {lang === "tr" ? "ENGLISH LATE" : "TÜRKÇE’YE GEÇ"}
        </button>
          </div>

          <nav className="flex items-center gap-12 text-lg font-normal text-slate-500 dark:text-white">
            <a href="#skills">{navTexts[lang].skills}</a>
            <a href="#projects">{navTexts[lang].projects}</a>
            <button
              className="w-full sm:w-auto px-8 py-3 rounded-lg
                         border border-[#3730A3]
                         text-[#3730A3]
                         hover:bg-[#3730A3] hover:text-white dark:text-white
                         transition"
            >
              {navTexts[lang].hireMe}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
