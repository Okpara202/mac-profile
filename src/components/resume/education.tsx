import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      {/* Educational Qualification Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            2003-2022
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Educational Qualification
          </motion.h2>
        </div>
        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <ResumeCard
              title="BSc in Sociology"
              subTitle="Godfrey Okoye University, Enugu (2018 -2023)"
              description={[
                "Equipped with critical thinking, problem-solving, and practical skills to navigate real-world challenges.",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <ResumeCard
              title="Secondary School Education"
              subTitle="Unity Secondary School, Enugu (2010 - 2016)"
              description={[
                "Developed foundational knowledge, discipline, and critical thinking skills for future academic and life success.",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <ResumeCard
              title="Primary Education"
              subTitle="University Primary School, Enugu (2003 - 2010)"
              description={[
                "Developed basic literacy, numeracy, social skills, and a foundation for lifelong learning and growth",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>

      {/* Job Experience Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            2024 - PRESENT
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Job Experience
          </motion.h2>
        </div>
        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <ResumeCard
              title="Quality Assurance Intern"
              subTitle="Genesys Tech Hub,Enugu(2024 - 2025)"
              description={[
                "Executed over 100+ manual test case across PlayNaij web based Game to ensure software quality and functionality.",
                "Developed and maintained comprehensive test plan covering functional regression and exploratory testing scenario.",
                "Reported over 50% critical and high priority bugs using trello and documented 50% bugs with 90% resolved",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ x: 5, scale: 1.01 }}
          >
            <ResumeCard
              title="Quality Assurance"
              subTitle="The Bug Detective (April, 2025 - July, 2025 )"
              description={[
                "Led a team of 5 QA's on real projects ensuring adherence to SDLC and STLC processes.",
                "Participated in weekly agile and daily standups improving issues resolution time by 30% through clear communication.",
                "Developed and maintained comprehensive test plan covering functional regression and exploratory testing scenario.",
                "Reported over 50% critical and high priority bugs using trello and documented 50% bugs with 90% resolved",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default Education;
