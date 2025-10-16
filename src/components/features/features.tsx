import { motion } from "framer-motion";
import Title from "../layouts/title";
import Card from "./card";
import {
  FaBug,
  FaClipboardCheck,
  FaNetworkWired,
  FaRobot,
  FaSyncAlt,
  FaTachometerAlt,
} from "react-icons/fa";

function Features() {
  return (
    <>
      <motion.section
        id="features"
        className="w-full py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-100px" }}
      >
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title="Ensuring Product Quality"
              description="Conducting comprehensive manual and automated testing to guarantee product reliability and user satisfaction."
              icon={<FaBug />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Card
              title="Test Automation"
              description="Building and maintaining automated test scripts with Cypress, Katalon studio, Java to streamline QA workflows."
              icon={<FaRobot />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card
              title="API and Integration Testing"
              description="Validating backend APIs and integrations using tools like Postman and REST Assured to ensure data accuracy and consistency."
              icon={<FaNetworkWired />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Card
              title="Exploratory Testing & Adaptive Skills"
              description="Adapt and investigate beyond what is written in the test case, often discovering bugs that automation or rigid testing might miss."
              icon={<FaTachometerAlt />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card
              title="Bug Tracking & Reporting"
              description="Documenting and tracking issues through Jira or Azure DevOps, ensuring clear communication and timely resolution."
              icon={<FaClipboardCheck />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            <Card
              title="Continuous Improvement"
              description="Collaborating with developers and product teams to enhance QA processes, prevent defects, and promote quality-driven development."
              icon={<FaSyncAlt />}
            />
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </>
  );
}

export default Features;
