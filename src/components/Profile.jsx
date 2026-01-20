import React from "react";
import Title from "./Title";
import { useLanguage } from "../hooks/useLanguage";

const Profile = () => {
  const { data, lang, loading } = useLanguage();
  if (loading || !data) return null;

  const profile = data.profile;
  const about = data.about;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-b border-[#BAB2E7]">

      <Title text1={lang === "tr" ? "Profil" : "Profile"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-4 text-sm sm:text-base">
          <h2 className="text-[24px] sm:text-3xl font-medium mb-6 sm:mb-10 text-[#4338CA]">
            {lang === "tr" ? "Profil" : "Profile"}
          </h2>
          <div><strong>{lang === "tr" ? "Doğum Tarihi:" : "Birth Date:"}</strong> {profile.birthDate}</div>
          <div><strong>{lang === "tr" ? "İkamet Şehri:" : "City:"}</strong> {profile.city}</div>
          <div><strong>{lang === "tr" ? "Eğitim:" : "Education:"}</strong> {profile.education}</div>
          <div><strong>{lang === "tr" ? "Rol:" : "Role:"}</strong> {profile.role}</div>
        </div>
        <div>
          <h2 className="text-[24px] sm:text-3xl font-medium mb-6 sm:mb-10 text-[#4338CA]">

            {lang === "tr" ? "Hakkımda" : "About Me"}
          </h2>

          {about.map((p, i) => (
            <p
              key={i}
              className="font-inter font-normal sm:font-extralight text-[16px] sm:text-[18px] leading-[150%] tracking-normal mb-4 text-textLight"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
