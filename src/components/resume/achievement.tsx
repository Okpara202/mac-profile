import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      {/* Frontend Developer Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700"
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
            Quality Assurance Engineer
          </motion.h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.02 }}
          >
            <ResumeCard
              title="Quality Assurance Engineer"
              subTitle="Genesys Tech Hub,Enugu(2024 - 2025)"
              description={[
                "Successfully identified and documented 50+ critical and high-priority bugs across multiple web applications, achieving 90% resolution rate.",
                "Developed comprehensive test plans covering functional, regression, and exploratory testing scenarios for Tutera LMS platform.",
                "Reduced issue resolution time by 30% through active participation in Agile sprints and clear communication with development teams.",
                "Executed over 80+ manual test cases ensuring software quality and functionality across Playnaij web-based game and Tutera platform.",
                "Contributed to stakeholder presentations by providing key quality findings and testing insights that influenced product decisions.",
                "Collaborated effectively with QA teams of 5+ members, ensuring strict adherence to SDLC and STLC processes.",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            2023 - 2025
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Quality Assurance Engineer
          </motion.h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.02 }}
          >
            <ResumeCard
              title="QA Testing Fundamentals Graduate"
              subTitle="Quality Teches (2025 - 2025)"
              description={[
                "Successfully completed Quality Teches Software Testing Fundamentals program with practical, real-world testing experience.",
                "Led capstone project team, coordinating and guiding teammates throughout the testing lifecycle and project execution.",
                "Gained hands-on experience with Cypress automation framework for web application testing and API testing.",
                "Applied API testing knowledge and DOM handling skills in practical project implementations.",
                "Developed and executed comprehensive test cases using industry-standard testing methodologies.",
                "Demonstrated strong understanding of software testing principles, bug tracking, and quality assurance processes.",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default Achievements;
