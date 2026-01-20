import React from "react";
import Title from "./Title";
import { useLanguage } from "../hooks/useLanguage";

const Skills = () => {
  const { data, lang, loading } = useLanguage();

  if (loading || !data) return null;

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <Title text1={lang === "tr" ? "Beceriler" : "Skills"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-[14%]">
        {data.skills.map((skill) => (
          <div key={skill.title}>
            <h3
              className="
                font-inter font-medium
                text-[22px] sm:text-[26px] md:text-[30px]
                leading-[26px] md:leading-[28px]
                tracking-normal
                mb-4 md:mb-[30px]
                text-[#4338CA]
              "
            >
              {skill.title}
            </h3>

            <p className="
                font-inter font-normal sm:font-extralight
                text-[14px] sm:text-[12px]
                leading-[18px] sm:leading-[16px]
                tracking-normal
                text-textLight
              "
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
