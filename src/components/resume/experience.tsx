import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      {/* Job Experience Section */}
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
            2023 - PRESENT
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
          {[
            {
              title: "Quality Assurance Engineer (Software Tester)",
              subTitle: "The Bug Detective (2025 - 2025)",
              description: [
                "Contributed to stakeholder pitch presentations by sharing key findings on product quality from my testing work, with a strong focus on the Tutera product.",
                "Developed and maintained comprehensive test plans covering functional regression, and explanatory testing scenarios.",
                "Reported 50+ critical and high-priority bugs using click up and documented 85% bugs with 90% resolved",
                "I was actively involved in weekly Agile sprints and daily stand-ups, improving issues resolution time by 30% through clear communication.",
                "Collaborated with a QA teams of 5+ members on real-world projects, ensuring adherence to SDLC and STLC processes",
              ],
            },
            {
              title: "Quality Assurance Engineer (Software Tester),",
              subTitle: "Genesys Tech Hub,Enugu(2024 - 2026)",
              description: [
                "Executed over 80+ manual test case across the Playnaij web-based game and Hybrid Tutera an LMS platform to ensure software quality and functionality.",
                " Developed and maintained comprehensive test plan covering functional, regression, and exploratory testing scenarios.",
                " Reported 0+ critical and high-priority bugs using click up and documented 85% bugs, with 90% resolved.",
                "I was actively involved in the weekly Agile sprints and daily stand-ups, improving issues resolution time by 25% through clear communication.",
                "Collaborated with a QA teams of 5+ members on real-world projects, ensuring adherence to SDLC and STLC processes",
                "Contributed to stakeholder pitch presentations by sharing key findings on product quality from my testing work, with a strong focus on the Tutera product.",
              ],
            },
            {
              title: "Quality Assurance Engineer (Software Tester)",
              subTitle: "Quality Teches (2025 -2025)",
              description: [
                "I completed the Quality techies Software Testing Fundamentals program.",
                "I gained practical, real-world experience in testing using the Cypress automation framework.",
                "I led the Capstone project team, coordinating and guiding my teammates throughout the project.",
                "I converted my learning about APIs and DOM handling into practical implementation during the project.",
                "I was actively involved in software testing tasks, including writing and executing tests using Cypress.",
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <ResumeCard {...card} />
            </motion.div>
          ))}
        </aside>
      </motion.div>

      {/* Other Experiences Section */}
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
            2023 - 2024
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Other Experiences
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
              title="National Youth Service Corp"
              subTitle="Majesty Community Rural Development Foundation.(2024 - 2025)"
              description={[
                "Served as an Instructor during the National Youth Service Corps (NYSC).",
                "Engaged in capacity-building programs, leadership trainings, and team collaborations to support organizational goals.",
                "Organized and participated in community service (CDS) projects, promoting social impact initiatives.",
                "Developed technical and soft skills, including problem-solving, communication, and teamwork",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
