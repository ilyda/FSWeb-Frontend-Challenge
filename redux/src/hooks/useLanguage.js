import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../store/languageSlice";

export const useLanguage = () => {
  const dispatch = useDispatch();
  const { lang, data, loading } = useSelector((state) => state.language);

  return {
    lang,
    loading,
    data: data
      ? {
          footer: {
            ...data.footer,
            title: data.footer.title[lang],
            links: data.footer.links.map((link) => ({
              ...link,
              label:
                typeof link.label === "object" ? link.label[lang] : link.label,
            })),
          },
          hero: {
            ...data.hero,
            title: data.hero.title[lang],
            subtitle: data.hero.subtitle[lang],
            description: data.hero.description[lang],
            buttons: data.hero.buttons,
          },
          skills: data.skills.map((skill) => ({
            ...skill,
            description: skill.description[lang],
          })),
          profile: {
            ...data.profile,
            city:
              typeof data.profile.city === "object"
                ? data.profile.city[lang]
                : data.profile.city,
          },
          about: data.about.paragraphs[lang] || [],
          projects: data.projects.map((p) => ({
            ...p,
            title: typeof p.title === "object" ? p.title[lang] : p.title,
            description:
              typeof p.description === "object" ? p.description[lang] : p.description,
          })),
        }
      : null,
    toggleLanguage: () => dispatch(toggleLanguage()),
  };
};
