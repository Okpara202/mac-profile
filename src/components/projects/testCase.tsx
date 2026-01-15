import { FaGlobe } from "react-icons/fa";

function TestCase({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full p-6 xl:px-6 h-auto xl:py-8 group rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 dark:bg-gradient-to-r dark:from-transparent dark:to-transparent"
    >
      <div className="w-full flex items-center justify-between mb-4">
        <h3 className="dark:text-bodyColor group-hover:text-white font-semibold uppercase text-xl">
          {title}
        </h3>
        <nav>
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 group-hover:text-designColor duration-200 cursor-pointer">
            <FaGlobe />
          </span>
        </nav>
      </div>
      <p className="text-sm tracking-wide group-hover:text-gray-100 duration-300 dark:text-gray-600">
        {description}
      </p>
    </a>
  );
}

export default TestCase;
