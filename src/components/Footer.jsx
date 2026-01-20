import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { data, loading } = useLanguage();

  if (loading || !data) return null;

  return (

     <footer className="w-full bg-[#F9F9F9] dark:bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl flex flex-col gap-16 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-4xl md:text-5xl font-semibold
                         text-slate-900 dark:text-white
                         leading-tight">
            {data.footer.title}
          </h2>

          <a
            href={`mailto:${data.footer.email}`}
            className="mt-10 inline-flex items-center gap-2
                       text-pink-600 dark:text-pink-400
                       text-lg font-medium underline underline-offset-4"
          >
            👉{data.footer.email}
          </a>
        </div>

        <div className="flex items-center gap-6 text-lg">
            {data.footer.links.map((link, idx) => (
          <a key={idx} href={link.url} className="text-slate-900 dark:text-slate-300
                       hover:underline underline-offset-4">
            {link.label}
          </a>
        ))}
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
