import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Tech Stacks</p>
        <h2 className={styles.sectionHeadText}>Expertise.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
