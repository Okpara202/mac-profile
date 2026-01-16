import { FaLinkedinIn } from "react-icons/fa";
import { SpinningCircle } from "../navbar/navbarStuff/logoSvg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SiPostman } from "react-icons/si";
import { SiCypress } from "react-icons/si";

function LeftBanner() {
  const [text] = useTypewriter({
    words: ["Professional Quality Assurance Tester.", "Technical Writer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <motion.aside
      className="w-full lgl:w-[45%] flex flex-col gap-15 lgl:gap-20"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h4
          className="text-lg flex dark:text-darkBody"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          WELCOME TO MY WORLD <SpinningCircle />
        </motion.h4>

        <motion.h1
          className=" text-5xl md:text-6xl font-bold text-white dark:text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Hi, I am{" "}
          <span className="text-designColor capitalize">
            Macarius Ifeanyichukwu
          </span>
        </motion.h1>

        <motion.h2
          className="text-4xl font-bold h-20 text-white dark:text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          a{" "}
          <span>
            {text}
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          I turn complex systems into reliable, high-quality digital
          experiences. As a QA professional, I ensure every feature works
          flawlessly—front to back. From designing detailed test plans and
          automating workflows with tools like Java, Katalon studio,postman and
          Jest, to performing manual exploratory testing, I make sure every
          interaction feels smooth, responsive, and bug-free. I focus on
          performance, security, and scalability—validating that data flows
          correctly and systems behave as intended under any condition. I love
          combining analytical thinking with a passion for quality to help teams
          deliver products users can truly trust. Always learning, always
          improving. Let&apos;s build excellence together!
        </motion.h2>
      </motion.div>

      <motion.a
        href="/public/Macarius-ifeanyi-Onyekwelu-FlowCV-Resume-20251013.pdf"
        download
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="border-2 mx-auto lgl:mx-0 border-designColor text-designColor rounded py-2 block w-[200px] transition-all duration-500 dark:border-blue-700 dark:text-blue-700 hover:border-white hover:text-white dark:hover:text-designColor dark:hover:border-designColor">
          Checkout my Cv
        </button>
      </motion.a>

      <section className="flex flex-col sml:flex-row gap-6 lgl:gap-10 justify-between">
        <motion.div
          className="mx-auto sml:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <h2 className="text-center lgl:text-left uppercase font-titleFont font-semibold mb-4">
            Find me on
          </h2>
          <nav className="flex gap-4">
            <motion.a
              target="_blanc"
              href="https://x.com/Mac_QA111"
              className="bannerIcon"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaX />
            </motion.a>
            <motion.a
              target="_blanc"
              href="https://www.linkedin.com/in/macarius-onyekwelu-a04327349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="bannerIcon"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </nav>
        </motion.div>

        <motion.div
          className="hidden sml:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <h2 className="uppercase font-titleFont font-semibold mb-4">
            Best skills on
          </h2>
          <nav className="flex gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="" className="bannerIcon">
                <SiPostman />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="" className="bannerIcon">
                <SiCypress />
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </section>
    </motion.aside>
  );
}

export default LeftBanner;
