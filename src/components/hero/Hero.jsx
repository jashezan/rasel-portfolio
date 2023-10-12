import "./hero.scss";
import { motion } from "framer-motion";
import hero from "../../data/developer.json";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            style={{ textTransform: "uppercase" }}
          >
            {hero.name}
          </motion.h2>
          <motion.h1 variants={textVariants}>{hero.profession}</motion.h1>
          <motion.p>
            Hello, I'm Rasel Rahman, a dedicated Android developer proficient in
            Java, Kotlin, and Android Jetpack. My experience includes crafting
            captivating social media, music streaming, and fitness tracker apps.
            I'm enthusiastic about continuous learning and poised to leverage my
            expertise to boost your business success.
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {hero.skills}
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Md. Rasel Rahman" />
      </div>
    </div>
  );
};

export default Hero;
