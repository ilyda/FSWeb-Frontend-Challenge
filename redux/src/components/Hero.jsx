import { assets } from "../assets/assets";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { lang, data, loading } = useLanguage();

  if (loading || !data) return null;

  return (

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div>
        <div className="flex items-center gap-4 w-[30%] mb-5">
          <div className="flex-grow h-px bg-blue-600"></div>
          <span className="text-blue-600 font-medium whitespace-nowrap">
            Almila Su
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
          {data.hero.title}<br />
          <span className="text-textLight">{data.hero.subtitle}</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-textLight max-w-md text-sm sm:text-base font-[200]">
          {data.hero.description}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="w-full sm:w-auto px-5 py-3 rounded-lg border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white dark:text-white transition">
            {data.hero.buttons.hireMe[lang]}
          </button>

          <button className="w-full sm:w-auto px-5 py-3 rounded-lg border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white dark:text-white flex items-center justify-center transition">
            <img src={assets.github} alt="" className="mr-2 w-5 h-5" />
            {data.hero.buttons.github}
          </button>

          <button className="w-full sm:w-auto px-5 py-3 rounded-lg border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white dark:text-white flex items-center justify-center transition">
            <img src={assets.linkedin} alt="" className="mr-2 w-5 h-5" />
            {data.hero.buttons.linkedin}
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10 md:mt-0">
        <img src={assets.hero_image} className="md:w-full rounded-2xl shadow-lg" />
      </div>
    </section>
  );
}
